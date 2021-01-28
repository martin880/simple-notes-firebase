import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    changeUser = () => {
        this.props.changeUserName()
    }
    render(){
        return(
            <div>
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.changeUser}>Change User Name</button>
                <button>Go To Dashboard</button>
            </div>
        )
    }
}

const actionUserName = () => (dispatch) => {
        setTimeout(()=> {
            return  dispatch ({type: 'CHANGE_USER', value: 'Martin Lumbangaol'})
        }, 2000)
}

const reduxState = (state) =>({
    popupProps: state.popup,
    userName: state.user
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);