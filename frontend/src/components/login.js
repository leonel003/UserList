import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
    state={
        form:{
            username:'',
            password: ''
        }
    }

    verifyUser=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render(){
        return(
            <div className="row">
                <div className="col-10">
                    <div className="card">
                        <div className="card-body">
                            <form className="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="username" name="username" onChange={this.verifyUser}/>

                                    <input type="password" className="form-control" placeholder="password" name="password" onChange={this.verifyUser}/>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;