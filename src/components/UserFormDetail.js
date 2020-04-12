import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class UserFormDetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
            <MuiThemeProvider>
                <React.Fragment>
                <div className="App">
                    <AppBar className="navv">
                    <div className='h3center'>
                         <span className='h3center'>Enter User Details</span></div>
                    </AppBar><br></br><br></br><br></br><br></br>
                    
            <TextField 
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('name')}
              defaultValue={values.name}
              style={styles.button}
              name = 'first name'
            //   margin="normal"
            //   fullWidth="true"
            />
            <br />
            <TextField 
              placeholder="Enter Your Last Name"
              label="Last Name"
              name = 'last name'
              onChange={handleChange('lastNaame')}
              defaultValue={values.lastNaame}
              style={styles.button}
            //   margin="normal"
			//   fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              name = 'email'
              onChange={handleChange('email')}
              defaultValue={values.email}
              style={styles.button}
            //   margin="normal"
                            // fullWidth="true"
                            
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={styles.button}
            >Continue</Button>
           </div>

                </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
    }
}
const styles = {
    button:{
        margin:10,
        width: 350
    }
}

export default UserFormDetail
