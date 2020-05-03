import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      users: [],
    };
  }

  onHandelInputChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  onLogin = () => {
    const { email, password, users } = this.state;
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email === "" || regEmail.test(email) !== true) {
      alert("Enter valid email");
    } else if (password === "") {
      alert(" Enter password");
    } else {
      if (users.length > 0) {
        const result = users.find(
          (item) => item.email === email && item.password === password
        );
        if (result !== undefined) {
          alert("login success");
          this.props.history.push("/home");
        }
      } else {
        alert("Please signup for login");
      }
    }
  };

  componentDidMount() {
    if (this.props.userData.createdUser.length > 0) {
      this.setState({
        users: this.props.userData.createdUser,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Login to our site</h3>
                <p>Enter your email and password to log on:</p>
              </div>
              <div className="form-top-right">
                <i className="fa fa-key"></i>
              </div>
            </div>
            <div className="form-bottom">
              <div className="form-group">
                <label className="sr-only" htmlFor="form-username">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email..."
                  className="form-username form-control"
                  id="form-username"
                  onChange={(txt) => this.onHandelInputChange(txt)}
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="form-password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="form-password form-control"
                  id="form-password"
                  onChange={(txt) => this.onHandelInputChange(txt)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={() => this.onLogin()}
              >
                Sign in!
              </button>
            </div>
            <a
              className="btn"
              onClick={() => this.props.history.push("signup")}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
