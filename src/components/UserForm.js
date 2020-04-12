import React, { Component } from 'react';
import UserFormDetail from './UserFormDetail.js';
import FormPersonalDetail from './FormPersonalDetail.js';
import Confirm from './Confirm.js';
import Success from './Success.js'

export class UserForm extends Component {


    state={
        step:1,
        name:'',
        lastNaame:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //next step

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1,
        });
    }

    //back to previous step

    previousStep = () => {
        const {step} =this.state;
        this.setState({
            step:step-1,
        });
    }

    //Handle changes

    handleChange = input => e => {
        this.setState({[input]:e.target.value,});
    }

    render() {

        const {step}=this.state;
        const {name, lastNaame, email, occupation, city, bio}=this.state;
        const values={step, name, lastNaame, email, occupation, city, bio};

        switch(step){
            case 1:
                return (
                    <UserFormDetail nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}></UserFormDetail>
                )
            case 2:
                return (<FormPersonalDetail previousStep={this.previousStep} handleChange={this.handleChange} nextStep={this.nextStep} 
                    values={values}></FormPersonalDetail>)
            case 3:
                return (<Confirm previousStep={this.previousStep} handleChange={this.handleChange} nextStep={this.nextStep} values={values}></Confirm>)
            case 4:
                return (<Success></Success>)
        }

        
       
    }
}

export default UserForm
