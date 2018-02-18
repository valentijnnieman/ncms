const Koa = require('koa');
const next = require('next');

const BodyParser = require('koa-bodyparser');
const Session = require('koa-session');
const Router = require('koa-router');
const passport = require('koa-passport');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const dbUrl = 'mongodb://localhost:27017'
const dbName = 'ncms'

app.prepare()
    .then(() => {
        const server = new Koa();
        const router = new Router();
        let db

        server.keys = ['secret']
        server.use(Session({}, server))

        require('./auth')
        server.use(passport.initialize())
        server.use(passport.session())

        server.use(BodyParser())

        MongoClient.connect(dbUrl, function(err, client) {
            assert.equal(null, err);
            console.log("DB server running");
          
            db = client.db(dbName);
            // client.close();
            // clear db upon running for now for debugging
            db.collection('posts').remove()
            // create admin user
          });

        router.get('/', async ctx => {
            await app.render(ctx.req, ctx.res, '/index', ctx.query)
            ctx.respond = false
        })

        router.get('/admin', async ctx => {
            if (ctx.isAuthenticated()) {
                await app.render(ctx.req, ctx.res, '/admin/posts', ctx.query)
            }
            else {
                await app.render(ctx.req, ctx.res, '/login', ctx.query)
                await app.renderErrorToHTML("no good", ctx.req, ctx.res, '/login', ctx.query)
            }
            ctx.respond = false
        })

        router.get('/login', async ctx => {
            await app.render(ctx.req, ctx.res, '/login', ctx.query)
            ctx.respond = false
        })

        router.post('/login', passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/login'
        })
        )

        router.get('/logout', async ctx => {
            ctx.logout()
            ctx.redirect('/login')
        })

        /////////// POSTS ////////////////
        router.get('/posts', async ctx => {
            const allPosts = await db.collection('posts').find().toArray()
            ctx.body = {
                posts: allPosts 
            }
        })

        router.get('/posts/:slug', async ctx => {
            ctx.req.slug = ctx.params.slug
            await app.render(ctx.req, ctx.res, '/posts', ctx.query)
        })

        router.put('/posts/:slug', async ctx => {
            db.collection('posts').update({"slug": ctx.params.slug}, 
                {
                    "title": ctx.request.body.title,
                    "slug": ctx.request.body.newSlug, 
                    "content": ctx.request.body.content
                })
            ctx.redirect('/admin')
        })

        router.post('/posts/create', async ctx => {
            const postCount = await db.collection('posts').find().toArray().then(response => response.length)
            db.collection('posts').insertOne({
                title: "New post",
                slug: "new-post-" + postCount,
                content: "<h1>New post</h1>"
            });
        })

        router.delete('/posts/:slug', async ctx => {
            db.collection('posts').remove({"slug": ctx.params.slug})
        })
        /////////// ----- ////////////////

        // This route should be the last
        router.get('*', async ctx => {
            await handle(ctx.req, ctx.res)
            ctx.respond = false
        })

        server.use(async (ctx, next) => {
            ctx.req.db = db
            try {
                ctx.status = 200
                await next();
              } catch (err) {
                ctx.status = err.status || 500;
                ctx.body = err.message;
                ctx.app.emit('error', err, ctx);
              }
        })

        server.use(router.routes());

        server.listen(3000);

        console.log('Server running on port 3000');
    })