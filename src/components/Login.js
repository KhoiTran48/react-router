import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    onChangeInput=(e)=>{
        var target= e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            [name]: value
        })
    }
    onLogin = (e)=>{
        var {username, password} = this.state;
        e.preventDefault();
        if(username ==='admin' && password ==='admin'){
            localStorage.setItem('isLogin', true);
            this.setState({
            })
        }
    }
    render() {
        var {location, match} = this.props;
        var isLogin = localStorage.getItem('isLogin');
        if( isLogin){
            return <Redirect to={{
                pathname: '/',
                state: {
                    from: location
                }
            }}/>
        }
        var {username, password} = this.state;
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                    <h3 className="panel-title text-center">Login</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onLogin} action="" method="POST" className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label  className="col-sm-2 control-label">Username:</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="username" id=" " className="form-control"  required="required"  onChange={this.onChangeInput} value={username}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label  className="col-sm-2 control-label">Password:</label>
                                            <div className="col-sm-10">
                                                <input type="password" name="password" id="input" className="form-control"  required="required" title="" onChange={this.onChangeInput} value={password}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-10 col-sm-offset-2">
                                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
