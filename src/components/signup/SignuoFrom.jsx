import React from "react"

export default class SignuoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props.signupActions)
        this.props.signupActions.userSignupRequest(this.state)
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>join us</h1>
                <div className="form-group">
                    <label className="control-label">UserName</label>
                    <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input className="form-control" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">注册</button>
                </div>
            </form>
        )
    }
}