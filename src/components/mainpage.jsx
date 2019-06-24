import React from "react";
import MyEditor from "./editor";
import { Route, Switch, Link } from "react-router-dom"
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Menu,
    MenuItem
} from "@material-ui/core";
import Web from "./web";
import C_Cpp from "./c_cpp";
import Firstpage from "./firstpage"
import Login from "./login";
import Programs from "./programs";
import { connect } from 'react-redux';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            html: `<!--Write your html here-->`,
            css: "/*Write css here*/",
            js: "//Write javascript here",
            cpp: "//Write your c++ code here",
            open:false,
            registeropen:false,
            suopen:false,
            menuopen:false
        }
    }
    componentWillMount(){
        fetch("/mainpage")
        .then(res=>res.json())
        .then(res=>{
          if(res.success)
          {
              this.props.dispatch({type:"ADD_USER",payload:res.user});
          }
        })
        .catch(err=>console.log(err));
    }
   

    handleClickOpen=()=> {
        this.setState({
            registeropen:false,
            open:true
        })
     }
   
    handleClose=()=> {
       this.setState({
           open:false
       })
     }
     registerhandleClickOpen=()=> {
        this.setState({
            open:false,
            registeropen:true
        })
     }
   
     registerhandleClose=()=> {
       this.setState({
        registeropen:false
       })
     }
     snackhandle=()=>{
         this.setState({
             suopen:!this.state.suopen
         })
     }
     handlemenu=()=>{
         
         this.setState({
             menuopen:!this.state.menuopen
         });

     }
     logout=()=>{
         this.handlemenu()
         fetch("/logout")
         .then(res=>res.json())
         .then(res=>{
             if(res.success)
             {
                 this.props.dispatch({type:"DELETE_USER"});
             }
         })
         .catch(err=>console.log(err))
     }

    render() {
        const {open,registeropen,suopen,menuopen}=this.state;
        const { socket,user } = this.props;
        return (
            <CssBaseline>
                <AppBar position="static" color="primary" position="sticky">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{ flex: 1, }} align="left">
                            Code Editor
          </Typography>
          <div>
          <Menu
        open={Boolean(menuopen)}
        // anchorEl={true}
        onClose={this.handlemenu}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
        }}
        elevation={0}
        getContentAnchorEl={null}
        disableAutoFocusItem
        style={{position:"absolute",top:40,left:-20,right:0}}
        >
            
            <Link to="/user/programs" style={{textDecoration:"none",color:"white"}}>
            <MenuItem>
            My Programs
            </MenuItem>
            </Link>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>
            <MenuItem>
            Editor
            </MenuItem>
            </Link>
            <MenuItem onClick={this.logout} >
            Logout
            </MenuItem>
        </Menu>
          {
              user._id&&
            //   <Typography variant="subtitle" color="secondary" >

            <p onClick={this.handlemenu}>                {user.firstname+" " +user.lastname}</p>
        //  </Typography> 
              ||
          <Login 
          open={open} 
          handleClose={this.handleClose} 
          handleClickOpen={this.handleClickOpen}
          registeropen={registeropen} 
          registerhandleClose={this.registerhandleClose} 
          registerhandleClickOpen={this.registerhandleClickOpen}
          snackhandle={this.snackhandle}
          suopen={suopen}
          />
        }
        </div>
       
                    </Toolbar>
                </AppBar>

                <Switch>
                <Route path="/user/programs" component={() => <Programs></Programs>} />
                     <Route path="/c_cpp/:id" component={(props) => <C_Cpp 
                     socket={socket} 
                     handleClickOpen={this.handleClickOpen}
                     {...props}
                    ></C_Cpp>} />
                    <Route path="/web/:id" component={(props) => <Web
                    handleClickOpen={this.handleClickOpen}
                    {...props}
                    ></Web>} />
                    <Route path="/c_cpp" component={() => <C_Cpp 
                     socket={socket} 
                     handleClickOpen={this.handleClickOpen}
                    ></C_Cpp>} />
                    <Route path="/web" component={() => <Web
                    handleClickOpen={this.handleClickOpen}
                    ></Web>} />
                    <Route path="/" component={Firstpage} />
                    {/* <Route path="/" component={() => <Web></Web>} /> */}
                </Switch>
                {/* <Web></Web> */}
            </CssBaseline>
        );
    }
}
const mapStateToProps = (store) => {
    return {
      user: store.userReducer
    }
  }
export default connect(mapStateToProps)(MainPage);