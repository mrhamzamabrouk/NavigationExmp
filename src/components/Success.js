import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core/';



export class Success extends Component {

  render() {
    
    return (
        <MuiThemeProvider>
              <React.Fragment>
              
                  <AppBar className="navv">
                   <div className='h3center'>
                       <span className='h3center'>Success</span></div>
                  </AppBar><br></br><br></br><br></br><br></br>
          
          <div className="App">
          <h1>Thank You For Your Submission</h1>
          </div>
          <div className="App">
          <p>You will get an email with further instructions</p>
          </div>
          
          

              </React.Fragment>
          </MuiThemeProvider>
      );
  }
} const styles = {
        button:{
            margin:20
        }
    }


export default Success

  