import React ,{Component} from "react";
import {
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Snackbar,
    SnackbarContent
} from "@material-ui/core"
import {Save as SaveIcon} from "@material-ui/icons"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {connect} from "react-redux"
class Save extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            suopen:false
        }
    }
    handleDialog=()=>{
        this.setState({
            open:!this.state.open
        });
    }
    saveProgram=(e)=>{
        e.preventDefault()
        let program=this.props.getProgram();
        let data={
            type:this.props.type,
            name:document.getElementById("name").value,
            program:program,
            user:this.props.user
        }
        let options={
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
            }
        fetch("/user/programs/new",options)
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                this.snackhandle()
                this.handleDialog()
            }
        })
        .catch(err=>console.log(err))
    }
    updateProgram=()=>{
        let program=this.props.getProgram();
        let data={
            _id:this.props.id,
            program:program,
        }
        let options={
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
            }
        fetch("/user/programs/update",options)
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                this.snackhandle()
                // this.handleDialog()
            }
        })
        .catch(err=>console.log(err))
    }
    snackhandle=()=>{
        this.setState({
            suopen:!this.state.suopen
        })
    }
    render(){
        const {open,suopen}=this.state
        const {user,handleClickOpen,id}=this.props
        return(
            <div>
                 <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={suopen}
        autoHideDuration={6000}
        onClose={this.snackhandle}
        >
         <SnackbarContent
        style={{backgroundColor:"#32CD32"}}
        message={<span style={{ display: 'flex',
        alignItems: 'center',color:"white"}}>
         <CheckCircleIcon style={{opacity:0.9,margin:"10px"}}/>
          Saved Successfuly</span>}       
         ></SnackbarContent>
      </Snackbar>
<Button variant="contained" color="secondary"
style={{float:"left",marginLeft:"10px"}}
onClick={
    id &&this.updateProgram 
    ||user._id&&this.handleDialog
    ||handleClickOpen
    }
>
        <SaveIcon />
        <Typography>
            Save
        </Typography>
      </Button>
      <Dialog open={open} onClose={this.handleDialog} aria-labelledby="form-dialog-title" fullWidth={true}>
        <DialogTitle id="form-dialog-title" style={{textAlign:"center"}}>Save</DialogTitle>
        <form onSubmit={this.saveProgram}>
        <DialogContent>
        <DialogContentText color="secondary" id="err">
         
        </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            required
          />
           <TextField
            margin="dense"
            // id="name"
            label="Type"
            type="text"
            value={this.props.type}
            fullWidth
            disabled
            // required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDialog} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
      </Dialog>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
      user: store.userReducer
    }
  }
export default connect(mapStateToProps)(Save);