import React from "react";
import Layout from "../../layouts/admin";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    if (req) {
      // If `req` is defined, we're rendering on the server and should use
      // MongoDB directly. You could also use the REST API, but that's slow
      // and inelegant.
      const { db } = req;
      const list = await db
        .collection("users")
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      return { list };
    }
    // Otherwise, we're rendering on the client and need to use the API
    const list = await fetch("/users", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data!", data);
        return data.users;
      });

    return { list };
  }
  constructor(props) {
    super(props);
    this.state = {
      users: props.list,
      updateResponse: "",
      deleteResponse: ""
    };
  }
  getUsers() {
    return fetch("/users", {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data users!", data.users);
        this.setState({
          users: data.users
        });
      });
  }
  removeUser(id, password) {
    return fetch(`/users/${id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        password: password
      })
    }).then(response => {
      this.setState({ deleteResponse: response });
      this.getUsers();
    });
  }
  updateUser(user) {
    user.preventDefault();
    const id = user.target.id.value;
    const username = user.target.username.value;
    const newPassword = user.target.newPassword.value;
    const repeatPassword = user.target.repeatPassword.value;

    if (newPassword === repeatPassword) {
      console.log("got it");
      return fetch(`/users/${id}`, {
        method: "put",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          username: username,
          newPassword: newPassword
        })
      }).then(response => {
        this.setState({ updateResponse: response });
        this.getUsers();
      });
    }
  }
  createUser() {
    console.log("createUser");
    return fetch(`/users/create`, {
      method: "post"
    }).then(response => {
      this.getUsers();
    });
  }
  render() {
    let list = this.state.users.map((item, index) => {
      return (
        <li className="card" key={index}>
          <div className="card-content">
            <form onSubmit={this.updateUser.bind(this)}>
              <input type="hidden" name="id" value={item._id} />
              <label htmlFor="username">Username</label>
              <input type="text" name="username" defaultValue={item.username} />
              <label htmlFor="newPassword">New password</label>
              <input type="password" name="newPassword" />
              <label htmlFor="repeatPassword">Repeat new password</label>
              <input type="password" name="repeatPassword" />
              <div className="row">
                <div className="col s2">
                  <input type="submit" className="btn" value="update" />
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col s2">
                <button
                  className="btn red"
                  onClick={() => this.removeUser(item._id, item.password)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      );
    });
    let { updateResponse, deleteResponse } = this.state;
    let updateResponseElement, deleteResponseElement;
    if (updateResponse) {
      if (updateResponse.status === 200) {
        updateResponseElement = <div className="green-text">User updated</div>;
      } else if (updateResponse.status !== 200) {
        updateResponseElement = (
          <div className="red-text">Could not update user!</div>
        );
      }
    }
    if (deleteResponse) {
      if (deleteResponse.status === 200) {
        deleteResponseElement = <div className="green-text">User deleted</div>;
      } else if (deleteResponse.status !== 200) {
        deleteResponseElement = (
          <div className="red-text">Could not delete user!</div>
        );
      }
    }
    return (
      <Layout>
        <div>{updateResponseElement}</div>
        <div>{deleteResponseElement}</div>
        <div className="container">
          <h2 className="thin">Users</h2>
          <ul>{list}</ul>
          <div className="row">
            <div className="col s4">
              <button className="btn" onClick={() => this.createUser()}>
                Create new user
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
