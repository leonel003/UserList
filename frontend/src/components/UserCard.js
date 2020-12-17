
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateUser extends Component {
    state = {
        users: [],
        name: ''
    };

  getUsers= async ()=>{
        const res = await axios.get('http://localhost:4000');
        this.setState({ users: res.data });
    }
    async componentDidMount() {
        this.getUsers();
        
    }


    setUserName=(e)=>{
        this.setState({
            name:e.target.value

        })
    }

    createUser= async e=>{
        e.preventDefault();  
        await axios.post('http://localhost:4000',{
            name: this.state.name
        });
        this.setState({name:''});
        this.getUsers(); 
    }

    render() {
        return (
            
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.createUser}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="name" onChange={this.setUserName} value={this.state.name}/>
                                    
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    {
                        this.state.users.map(user =>
                            
                            <div className="card" key={user._id}>
                                <div className="card-body" >
                                    {user.name}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        );
    }
}

export default CreateUser;