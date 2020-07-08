// import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
var apiCall = require('../configuration/config')

class RegisterUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            stateCode: "",
            zip: "",
            phoneNumber: "",
            redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var userDetails = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            stateCode: this.state.stateCode,
            zip: this.state.zip,
            phoneNumber: this.state.phoneNumber
        }
        console.log("data at submit", userDetails);
        apiCall.registerUser(userDetails).then(res => {
            console.log("after create user", res);
        })
    }

    handleUpdate = (event) => {

        this.setState({redirect:"/update"})

    }

    render() {
        return (
            <div>
                <h1>Add User To Address Book</h1>
                <form>
                    <input type="text" name="firstName" placeholder="firstName" onChange={this.handleChange} value={this.state.firstName}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange} value={this.state.lastName}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="address" placeholder="address" onChange={this.handleChange} value={this.state.address}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="city" placeholder="city" onChange={this.handleChange} value={this.state.city}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="stateCode" placeholder="stateCode" onChange={this.handleChange} value={this.state.stateCode}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="zip" placeholder="zip" onChange={this.handleChange} value={this.state.zip}></input>
                    <br></br>
                    <br></br>
                    <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={this.handleChange} value={this.state.phoneNumber}></input>
                    <br></br>
                    <br></br>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <br></br>
                    <br></br>

                    <div>
                        <button type="submit" onClick={this.handleUpdate}>Update</button> < button type="submit">Delete</ button>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegisterUser;