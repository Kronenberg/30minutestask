import  { Component } from "react";

//@ACTIONS
import { createHewUser, getCurrentUser } from './actions/userActions';

class Login extends Component {

  componentWillMount() {

    this.props.getCurrentUser();

  }

   // @its a bit dirty, in my case i will use redux-form, but task only for 30 minutes! :)
  createNewUser = () => this.props.createHewUser(this.name.value, this.pass.value);

  render() {
    const { auth } = this.props;
    const userName = auth.success ? auth.userData.name.toUpperCase() : '';
    const userRole =  auth.success ? auth.userData.role: '';
    // if the user is not logged in
    if (!auth.userData) {
      return <form onSubmit={this.submit}>
        <input 
          type="text"  
          name="email"
          ref={this.name}

        />
         <br/>
        <input
          type="text" 
          ref={this.password}
          name="pass"/>
         <br/>

        <button type="submit"/>
      </form>
    }

    // if the user is logged in
    if (auth.userData) {


      // printing the user name Capitalized

      return <h1>Welcome {userName}. Your role is {userRole}</h1>
    }
  }
}


const mapStateToProps = (state) => {
  return {
      auth: state.authReducer
  }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    createHewUser: bindActionCreators(createHewUser, dispatch),
    getCurrentUser: bindActionCreators(getCurrentUser, dispatch)
  }
}


export connect(mapStateToProps, mapDispatchToProps)(Login);