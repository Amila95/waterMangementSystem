import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { addUser } from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class index extends Component {
  constructor(){
    super();
    this.state ={
      username:'',
      password:'',
      confirmPassword:'',
      errors:{}
    }

  }
  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  print() {
    // var content = document.getElementById('printarea');
    // var pri = document.getElementById('ifmcontentstoprint').contentWindow;

    // pri.document.open();
    // pri.document.write('<html><head><title>my div</title>');
    // pri.document.write('<link rel="stylesheet" href="http://www.dynamicdrive.com/ddincludes/mainstyle.css" type="text/css" />');
    // pri.document.write(content.innerHTML);

    // pri.document.close();
    // pri.focus();
    // pri.print();
    var printContents = document.getElementById('printarea').innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;

			window.print();

			document.body.innerHTML = originalContents;
   // window.print();
}

  onSubmit =(e) =>{
    e.preventDefault();
    const userData ={
      username:this.state.username,
      password:this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    //console.log(newUser);
    this.props.addUser(userData);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      console.log("errors"+nextProps.errors);
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const { errors } = this.state ;
    return (
      <div>
          <iframe id="ifmcontentstoprint" style={{
                        height: '0px',
                        width: '0px',
                        position: 'absolute',

                    }}></iframe>

        <Row id='printarea'>
        <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>User</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">User Name</Label>
                  <Input type="text" id="username" placeholder="Enter user name" name="username" value={this.state.username} onChange={this.onChange}/>
                  {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}
                  {errors.username && (<lable style={{color: "red"}}>{errors.username}</lable>)}
                </FormGroup>
                {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}

                {/* {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)} */}

                <FormGroup>
                  <Label htmlFor="vat">Password</Label>
                  <Input type="password" id="vat" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                  {errors.password && (<lable style={{color: "red"}}>{errors.password}</lable>)}

                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Comfirm Password</Label>
                  <Input type="password" id="confirmPassword" placeholder="Enter comfirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange}/>
                  {errors.confirmPassword && (<lable style={{color: "red"}}>{errors.confirmPassword}</lable>)}
                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger" onClick={this.print}><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          </Row>
      </div>
    );
  }
}

//export default index;

const mapStateToProps =(state) =>({
  auth:state.auth,
  errors:state.errors
})

export default connect (mapStateToProps,{addUser})(withRouter(index));
