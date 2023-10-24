/* eslint-disable react/prop-types */
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Singapore'
            }
        }    
    }

    async componentDidMount() {
        // For api calls

        const data = await fetch('https://api.github.com/users/rprakash78');
        const json = await data.json();
        this.setState({
            userInfo: json
        }) 
    }

    componentDidUpdate() {
        console.log('COMPONENT GOT UPDATED');
    }

    componentWillUnmount() {
        console.log('COMPONENT GOT UN MOUNTED');
    }

    render() {
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} ></img>
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>Location: {this.state.userInfo.location === null ? 'India' : this.state.userInfo.location}</h2>
                <h3>Contact: {this.state.userInfo.email === null ? 'prakashr@gmail.com' : this.state.userInfo.email}</h3>
            </div>
        )
    }
}

export default UserClass;