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


export class FormPersonalDetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.previousStep();
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
                         <span className='h3center'>Enter Personal Details</span></div>
                    </AppBar><br></br><br></br><br></br><br></br>
                    
            <TextField 
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              style={styles.button}
            />
            <br />
            <TextField 
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              style={styles.button}
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              style={styles.button}             
            />
            <br />
            <div>
            <Button
              color="default"
              variant="contained"
              onClick={this.back}
              style={styles.button}
            >Previous</Button></div>
            <div>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={styles.button}
            >Continue</Button></div>
        
          
          </div>

                </React.Fragment>
            </MuiThemeProvider>
            </div>
        );
    }
} const styles = {
          button:{
              margin:20,
              width: 350
          }
      }


export default FormPersonalDetail
