import React, { Component } from "react";
import MyEditor from "./editor";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Tab,
    Tabs,
    Button,
    CircularProgress,
    Typography,
} from "@material-ui/core";
import {connect} from "react-redux"
import Term from "./xterm";
import Save from "./save";
const styles = theme => ({
    main: {
        zIndex: 1,
    },
    runcompile: {
        position: "absolute",
        width: "98%",
        backgroundColor: "rgba(151, 151, 151,0.3)",
        height: "660px",
        top: 55,
        zIndex: -1,
        paddingTop: "30%"
    },
    headline: {
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        height: "30px",
        width: "150px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
    }

});
class C_Cpp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            cpp: `//Write your c++ code here
#include <iostream>
using namespace std;
int main()
{
    string name;
    cout << "Enter your name:";
    getline(cin,name);
    cout<<"Hello "<<name;
    return 0;
}`,
            curstate: ""
        }
    }
    style = {
        main: {
            zIndex: 1
        },
        back: {
            zIndex: -1
        }
    }
    componentDidMount() {
        // window.addEventListener("beforeunload", function (e) {
        //     var confirmationMessage = 'It looks like you have been editing something. '
        //                             + 'If you leave before saving, your changes will be lost.';
        
        //     (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        //     // return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        // });
        this.props.socket.on("running", val => {
            if (val)
                this.setState({ curstate: "run" });
        })
        this.props.socket.on("exit", val => {
            if (val)
                this.setState({ curstate: "" });
        })
        this.props.socket.on("err", val => {
            document.getElementById("err").value=val;
            // this.refs.err.value = val;
            this.setState({ curstate: "" });
        })
        if(this.props.match)
        {
           let program= this.props.programs.find(program=>{
                if(program._id===this.props.match.params.id)
                return program;
            })
            program=JSON.parse(program.program)
                    this.setState({
                        cpp:program.cpp
                    });
            console.log({cpp:program.cpp});
            
        }
    }
    getProgram = () => {
        let program = {
            cpp: this.state.cpp
        }
        program = JSON.stringify(program);
        return program;
    }
    runcpp = () => {

        // this.refs.cpp.innerHTML=this.state.cpp;
        this.setState({ curstate: "comp" });
        let data = {
            number: this.props.number,
            code: this.state.cpp
        }
        this.props.socket.emit("runcpp", data);
    }
    stopcomp = () => {
        this.props.socket.emit("stopcomp", true);
    }
    stoprun = () => {
        this.props.socket.emit("stoprun", true);
    }
    updatecpp = val =>
        this.setState({ cpp: val });
    render() {
        const { value, curstate } = this.state;
        const { socket, classes } = this.props;
        return (
            <div>
                <Grid container>
                    <Grid item lg={6} sm={12} xs={12}>
                        <div style={{ width: "100%", padding: "1%", position: "relative" }}>
                            <Tabs
                                value={value}
                                onChange={this.changeValue}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <Tab label="c/c++"></Tab>
                            </Tabs>

                            {value === 0 && <MyEditor mode="c_cpp" theme="monokai" update={this.updatecpp} defvalue={this.state.cpp} />}
                            <div className={classNames(classes.runcompile)}
                                style={(curstate == "comp") ? this.style.main : this.style.back}
                            >
                                <Typography
                                    variant="h4"
                                >
                                    Please Wait
                    </Typography>
                                <CircularProgress color="secondary" />
                                <Typography
                                    variant="h5"
                                >
                                    Compiling
                    </Typography>
                            </div>
                            <div className={classNames(classes.runcompile)}
                                style={(curstate == "run") ? this.style.main : this.style.back}
                            >
                                <Typography
                                    variant="h4"
                                >
                                    Prgram Running
                             </Typography>

                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <div style={{ width: "100%", padding: "1%" }}>
                            <div style={{ width: "100%", height: "47px", paddingTop: "5px" }}>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={curstate === "" && this.runcpp || curstate === "comp" && this.stopcomp || curstate === "run" && this.stoprun}
                                    style={{ float: "left" }}
                                >
                                    {curstate === "" && "run" || curstate === "comp" && "Cancel" || curstate === "run" && "Stop"}
                                </Button>
                                <Save
                                    type="cpp"
                                    getProgram={this.getProgram}
                                    handleClickOpen={this.props.handleClickOpen}
                                    id={this.props.match&&this.props.match.params.id}
                                >
                                </Save>
                            </div>
                            <div style={{ width: "100%" }}>
                                <div className={classes.headline}>
                                    <Typography
                                        variant="h7"
                                    >
                                        Execution
                    </Typography>
                                </div>
                                <Term socket={socket}></Term>
                            </div>
                            <div style={{ marginTop: "20px", width: "100%" }}>
                                <div className={classes.headline}>
                                    <Typography
                                        variant="h7"
                                    >
                                        Compilation
                                </Typography>
                                </div>
                                <textarea readOnly id="err" style={{ width: "100%", height: "160px" }}>

                                </textarea>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        // user: store.userReducer,
        programs:store.programReducer
    }
}
export default connect(mapStateToProps)(withStyles(styles)(C_Cpp));