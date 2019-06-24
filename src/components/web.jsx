import React ,{Component} from "react";
import MyEditor from "./editor";
import {
    Grid,
    Tab,
    Tabs,
    Button
} from "@material-ui/core";
import {connect} from "react-redux"
import Save from "./save"
class Web extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:0,
            html:`<!--Write your html here-->`,
            css:"/*Write css here*/",
            js:"//Write javascript here",
        }
    }
    componentDidMount(){
        if(this.props.match)
        {
           let program= this.props.programs.find(program=>{
                if(program._id===this.props.match.params.id)
                return program;
            })
            program=JSON.parse(program.program)
                    this.setState({
                        html:program.html,
                        css:program.css,
                        js:program.css
                    });
            
        }
    }
    preview=()=>{
        var ifr=this.refs.ifr.contentWindow.document;
        ifr.open()
        ifr.write(this.state.html)
        ifr.close()
        var style=document.createElement("style");
        style.append(this.state.css);
        var js=document.createElement("script");
        js.append(this.state.js);
        ifr.getElementsByTagName("head")[0].appendChild(style);
        ifr.getElementsByTagName("head")[0].appendChild(js);
    }
   
    updatehtml=(val)=>{
        this.setState({html:val})
    }

    updatecss=val=>
    this.setState({css:val})

    updatejs=val=>
    this.setState({js:val})

    changeValue=(e,val)=>{
        this.setState({value:val})
    }
    getProgram=()=>{
        var program={
            html:this.state.html,
            css:this.state.css,
            js:this.state.js
        }
        console.log(program);
        program=JSON.stringify(program);
        return program;
    }
    render()
    {
        const {value}=this.state;
        return(
            <Grid container>
            <Grid item lg={6} sm={12} xs={12}>
                <div style={{width:"100%",padding:"1%"}}>
                <Tabs
                value={value}
                onChange={this.changeValue}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                >
                    <Tab label="HTML"></Tab>
                    <Tab label="CSS"></Tab>
                    <Tab label="JS"></Tab>
                    {/* <Tab label="c/c++"></Tab> */}
                    </Tabs>
                    {value===0&&<MyEditor mode="html" theme="monokai" update={this.updatehtml} defvalue={this.state.html}/>}
                    {value===1&&<MyEditor mode="css" theme="monokai" update={this.updatecss} defvalue={this.state.css}/> }
                    {value===2&&<MyEditor mode="javascript" theme="monokai" update={this.updatejs} defvalue={this.state.js}/>}
                    {/* {value===3&&<MyEditor mode="c_cpp" theme="monokai" update={this.updatecpp} defvalue={this.state.cpp}/>} */}
                    </div>
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                <div style={{width:"100%",padding:"1%"}}>
                <div style={{width:"100%",height:"47px",paddingTop:"5px"}}>

                <Button 
                variant="contained"
                color="primary"
                onClick={this.preview
                }
                style={{float:"left"}}
                >
                run
                    </Button>
                <Save
                getProgram={this.getProgram}
                type="web"
                handleClickOpen={this.props.handleClickOpen}
                id={this.props.match&&this.props.match.params.id}
                ></Save>
                    </div>
                    <iframe ref="ifr" style={{width:"100%",height:660,backgroundColor:"white"}}></iframe>
                </div>
                </Grid>
                </Grid>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        // user: store.userReducer,
        programs:store.programReducer
    }
}
export default connect(mapStateToProps)(Web);