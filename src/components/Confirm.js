import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core/';



export class Confirm extends Component {
  continue = e =>{
      e.preventDefault();
      this.props.nextStep();
  }
  back = e =>{
      e.preventDefault();
      this.props.previousStep();
  }
  render() {
    const { values: {name, lastNaame, email, occupation, city, bio} } = this.props;
    return (
          <div>
          <MuiThemeProvider>
              <React.Fragment>
              
              <div className="App">
          
                  <AppBar className="navv">
                   <div className='h3center'>
                       <span className='h3center'>Confirm</span></div>
                  </AppBar><br></br><br></br><br></br><br></br>
                  <div className='butto'>
         <List style={styles.button}>
            <ListItem>
              <ListItemText primary="First Name" secondary={name} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastNaame} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} /> 
            </ListItem>
          </List></div>
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
          >Confirm and continue</Button></div>
      
      </div>
              </React.Fragment>
          </MuiThemeProvider>
          </div>
      );
  }
} const styles = {
        button:{
            margin:20,
            width: 350,
            width: '100%',
            maxWidth: 360,
        }
    }


export default Confirm

  