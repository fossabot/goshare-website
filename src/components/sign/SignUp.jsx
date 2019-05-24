import React, { Component } from 'react';
import Sign from './Sign'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/user'

const SignUp = props => <Sign title={'注册'} {...props}/>

const mapDispatchToProps = { signUp }

export default connect(
  null,
  mapDispatchToProps
)(SignUp)