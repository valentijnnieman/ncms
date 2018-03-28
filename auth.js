const passport = require("koa-passport");
const passportLocal = require("passport-local");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const dbUrl = "mongodb://localhost:27017";
const dbName = "ncms";

const LocalStrategy = passportLocal.Strategy;

let db;

MongoClient.connect(dbUrl, function(err, client) {
  assert.equal(null, err);
  console.log("DB server running");

  db = client.db(dbName);
});

console.log("Auth is working");
const fetchUser = async (username, password) => {
  const user = await db.collection("users").findOne({ username, password });
  return user;
};

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = fetchUser();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new LocalStrategy((username, password, done) => {
    fetchUser(username, password)
      .then(user => {
        if (user) {
          if (username === user.username && password === user.password) {
            done(null, user);
          }
        } else {
          done(null, false);
        }
      })
      .catch(err => done(err));
  })
);
