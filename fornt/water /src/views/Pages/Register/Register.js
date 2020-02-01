import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';
import axios from 'axios';
import { connect } from "react-redux";
import { registerUser } from '../../../actions/authActions'

const initialState = {
  username:'',
  password:'',
  confirmPassword:'',
  usernameError:'',
  passwordError:'',
  confirmPasswordError:'',
};

class Register extends Component {
  constructor(){
    super();
    this.state ={
      username:'',
      password:'',
      confirmPassword:'',
      usernameError:'',
      passwordError:'',
      confirmPasswordError:'',
      errors:{}
    };  
  }

 

    

  onChange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  validate = () => {
      let usernameError:"";
      let passwordError:"";
      let confirmPasswordError:"";

    if (this.state.password.length< 4) {
      passwordError = "password min length is 4";
    }
    if(!this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
      usernameError = "invalid email";
    }

    if (!this.state.password.match(this.state.confirmPassword) ) {
      confirmPasswordError = "miss match password";
    }

    if (usernameError || passwordError ||confirmPasswordError ) {
      this.setState({ usernameError, passwordError, confirmPasswordError });
      return false;
    }

    return true;
  };

  

  onSubmit =(e) =>{
    e.preventDefault();
    const newUser ={
    username:this.state.username,
    password:this.state.password,
    confirmPassword:this.state.confirmPassword
    };

    // this.props.registerUser(newUser);
    // const isValid = this.validate();
    
    // if (isValid) {
    //   console.log(newUser);
    // axios
    // .post('/api/users/register', newUser)
    // .then(res => console.log(res.data))
    // .catch(err => this.setState({errors: err.response.data}))
    // this.setState(initialState);
    // }
   
  }

  render() {
    const { errors, formErrors} = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit = {this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input invalid={errors.username || this.state.usernameError} type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange={this.onChange} onKeyUp={this.OnKeyUp}/>
                      <FormFeedback>{errors.username  || this.state.usernameError}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input invalid={errors.password || this.state.passwordError} type="password" placeholder="Password" autoComplete="new-password"  name="password" value={this.state.password} onChange={this.onChange}/>
                      <FormFeedback>{errors.password || this.state.passwordError}</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                       
                      </InputGroupAddon>
                      <Input invalid={errors.confirmPassword || this.state.confirmPasswordError} type="password" placeholder="Repeat password" autoComplete="new-password"  name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange}/>
                      <FormFeedback>{errors.confirmPassword || this.state.confirmPasswordError}</FormFeedback>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(null,{registerUser})(Register);
