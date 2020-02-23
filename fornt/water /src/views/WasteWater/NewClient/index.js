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
import { addClient } from '../../../actions/clientActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class index extends Component {
  constructor(){
    super();
    this.state ={
      clientName:'',
      companyName:'',
      address:'',
      errors:{}
    }

  }
  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit =(e) =>{
    e.preventDefault();
    const userData ={
      clientName:this.state.clientName,
      companyName:this.state.companyName,
      address: this.state.address
    }
    //console.log(newUser);
    this.props.addClient(userData, this.props.history);
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
        <Row>
        <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Client</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">Client Name</Label>
                  <Input type="text" id="company" placeholder="Enter client name" name="clientName" value={this.state.clientName} onChange={this.onChange}/>
                  {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}
                  {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)}
                </FormGroup>
                {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}

                {/* {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)} */}

                <FormGroup>
                  <Label htmlFor="vat">Company Name</Label>
                  <Input type="text" id="vat" placeholder="Enter company name" name="companyName" value={this.state.companyName} onChange={this.onChange}/>
                  {errors.companyName && (<lable style={{color: "red"}}>{errors.companyName}</lable>)}

                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Address</Label>
                  <Input type="text" id="street" placeholder="Enter address" name="address" value={this.state.address} onChange={this.onChange}/>

                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
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

export default connect (mapStateToProps,{addClient})(withRouter(index));
