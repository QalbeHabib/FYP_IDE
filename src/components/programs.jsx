import React, { Component } from "react";
import { connect } from "react-redux"
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    IconButton,
    Grid
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons"
import {Link} from "react-router-dom";
class Programs extends Component {
    componentDidMount() {
        if (this.props.user._id) {
            let data = {
                user: this.props.user
            }
            let options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }
            console.log(this.props.user)
            fetch(`/user/programs/all`, options)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    if(res.success)
                    {
                        this.props.dispatch({type:"SET_PROGRAM",payload:res.programs})
                    }
                })
                .catch(err => console.log(err))
        }
    }
    deleteProgram=(id)=>{
        let data = {
            _id: id
        }
        let options = {
            method: 'Delete',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch(`/user/programs/delete`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.success)
                {
                    this.props.dispatch({type:"DELETE_PROGRAM",payload:{_id:id}})
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        const {programs} =this.props
        return (
            <div>
                <Grid container>
                    {
                        programs.map(program => {
                            return (
                                <Grid item lg={3} md={5} xs={6}>
                                    <Card style={{margin:"10px"}}>
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {program.name}
        </Typography>
                                            <Typography color="textSecondary">
                                                Type:{program.type}
        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton onClick={()=>{this.deleteProgram(program._id)}}>
                                                <Delete></Delete>
                                            </IconButton>
                                            <Link to={program.type==="cpp"&&`/c_cpp/${program._id}`
                                            ||program.type==="web"&&`/web/${program._id}`}>
                                            <IconButton>
                                                <Edit />
                                            </IconButton>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        user: store.userReducer,
        programs:store.programReducer
    }
}
export default connect(mapStateToProps)(Programs);