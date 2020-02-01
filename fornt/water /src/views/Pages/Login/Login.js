import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback, FormGroup , Label} from 'reactstrap';
//import {loginUser} from '../../../action/authAction';
import {loginUser} from '../../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Login extends Component {
  constructor(){
    super();
    this.state ={
      username:'',
      password:'',
      errors:{}
    }

  }

  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit =(e) =>{
    e.preventDefault();
    const userData ={
    username:this.state.username,
    password:this.state.password
    }
    //console.log(newUser);
    this.props.loginUser(userData);
  }

  componentDidMount() {
    console.log(" login outside this.props.auth.isAuthenticated = ",this.props.auth.isAuthenticated);
    if(this.props.auth.isAuthentication){
        console.log(" login this.props.auth.isAuthenticated = ",this.props.auth.isAuthentication);
       this.props.history.push('/dashboard');
       // window.location = '/#/dashboard';
    }
}

  componentWillReceiveProps(nextProps){
    console.log(" login outside this.props.auth.isAuthentication = ",nextProps.auth.isAuthentication);
    if(nextProps.auth.isAuthentication){
      this.props.history.push('/dashboard');
    }
    if(nextProps.errors){
      console.log("errors"+nextProps.errors);
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const { errors } = this.state ;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit = {this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange={this.onChange} />
                        {/* {errors.username && (<lable>{errors.username}</lable>)} */}

                      </InputGroup>
                      {errors.username && (<lable style={{color: "red"}}>{errors.username}</lable>)}
                      {/* {errors.username && (<div className="invalid-feedback">{errors.username}</div>)} */}

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChange} />
                        {/* {errors.password && (<lable>{errors.password}</lable>)} */}
                        {/* <FormFeedback valid className="help-block">Input provided</FormFeedback> */}
                          {/* {errors.password && (<lable>{errors.password}</lable>)} */}
                      </InputGroup>
                      {errors.password && (<lable style={{color: "red"}}>{errors.password}</lable>)}
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default Login;
// Login.propTypes ={
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// }

const mapStateToProps =(state) =>({
  auth:state.auth,
  errors:state.errors
})

export default connect (mapStateToProps,{loginUser})(withRouter(Login));
