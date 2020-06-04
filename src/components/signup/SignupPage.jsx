import React from 'react'
import SignuoFrom from "./SignuoFrom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as signupActions from "../../actions/signupActions"
class SignupPage extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignuoFrom signupActions={this.props.signupActions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    console.log(signupActions.userSignupRequest)
    return{
        // signupActions:bindActionCreators(signupActions.userSignupRequest)
        signupActions:bindActionCreators(signupActions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(SignupPage)