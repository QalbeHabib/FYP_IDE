import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Snackbar,
  SnackbarContent,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { connect } from "react-redux";
class Login extends Component {
  // constructor(props){
  //     super(props);n 
  //     this.state={
  //         email:"",
  //         pass:"",
  //         firsname:"",
  //         lasname:""
  //     }
  // }
  cvalpass = false;
  valpass = false;
  register = (e) => {
    console.log('some')
    e.preventDefault();
    if (this.valpass && this.cvalpass) {
      let data = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
      };
      console.log(data);
      let options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };
      fetch("/adduser", options)
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            this.props.snackhandle();
            this.props.registerhandleClose();
            // this.props.handleClickOpen();
          } else {
            document.getElementById("emailerr").innerHTML =
              "Email has already used use another email";
          }
        })
        .catch((err) => console.log(err));
    }
  };
  login = (e) => {
    e.preventDefault();
    let data = {
      email: document.getElementById("lemail").value,
      password: document.getElementById("lpass").value,
    };
    console.log(data);
    let options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    fetch("/login", options)
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          document.getElementById("err").innerHTML =
            " Email or Password Invalid";
        } else {
          this.props.handleClose();
          this.props.dispatch({ type: "ADD_USER", payload: res.user });
        }
      })

      .catch((err) => console.log(err));
  };
  validpass = () => {
    let pass = document.getElementById("pass").value;
    if (pass.length < 8) {
      document.getElementById("perr").innerHTML =
        "Password must have atleast 8 latters";
      this.valpass = false;
    } else {
      document.getElementById("perr").innerHTML = "";
      this.valpass = true;
    }
  };
  validcpass = () => {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (pass !== cpass) {
      document.getElementById("cperr").innerHTML = "Password does not match";
      this.cvalpass = false;
    } else {
      document.getElementById("cperr").innerHTML = "";
      this.cvalpass = true;
    }
  };
  render() {
    const {
      open,
      handleClickOpen,
      handleClose,
      registerhandleClose,
      registerhandleClickOpen,
      registeropen,
      suopen,
      snackhandle,
    } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={suopen}
          autoHideDuration={6000}
          onClose={snackhandle}
        >
          <SnackbarContent
            style={{ backgroundColor: "#32CD32" }}
            message={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <CheckCircleIcon style={{ opacity: 0.9, margin: "10px" }} />
                Registered Successfuly
              </span>
            }
          ></SnackbarContent>
        </Snackbar>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          style={{ margin: "10px" }}
        >
          Login
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            Login
          </DialogTitle>
          <form onSubmit={this.login}>
            <DialogContent>
              <DialogContentText color="secondary" id="err"></DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                id="lemail"
                required
              />
              <TextField
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
                id="lpass"
                required
              />
              <DialogContentText>
                Not Have Account
                <Button
                  onClick={registerhandleClickOpen}
                  color="secondary"
                  disableRipple={true}
                >
                  Register
                </Button>{" "}
                Now
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Login
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Button
          variant="contained"
          color="secondary"
          onClick={registerhandleClickOpen}
        >
          Register
        </Button>
        <Dialog
          open={registeropen}
          onClose={registerhandleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            Register
          </DialogTitle>
          <form onSubmit={this.register}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="First Name"
                type="text"
                fullWidth
                id="fname"
                required
              />
              <TextField
                margin="dense"
                label="Last Name"
                type="text"
                fullWidth
                id="lname"
                required
              />
              <TextField
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                id="email"
                required
              />
              <DialogContentText
                color="secondary"
                id="emailerr"
              ></DialogContentText>
              <TextField
                margin="dense"
                label="Password"
                type="password"
                onBlur={this.validpass}
                fullWidth
                id="pass"
                required
              />
              <DialogContentText
                color="secondary"
                id="perr"
              ></DialogContentText>
              <TextField
                margin="dense"
                label="Confirm Password"
                type="password"
                fullWidth
                id="cpass"
                onBlur={this.validcpass}
                required
              />
              <DialogContentText
                color="secondary"
                id="cperr"
              ></DialogContentText>
              <DialogContentText>
                Already Have An Account
                <Button
                  onClick={handleClickOpen}
                  color="secondary"
                  disableRipple={true}
                >
                  Login
                </Button>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={registerhandleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Register
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
export default connect()(Login);
