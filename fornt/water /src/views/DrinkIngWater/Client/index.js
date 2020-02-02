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
import { Link } from 'react-router-dom';
import { addClient } from '../../../actions/clientActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class index extends Component {
  constructor(){
    super();
    this.state ={
      id:''
    }

  }
  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }


  render() {

    return (
      <div>
                   <FormGroup>
                        <Label htmlFor="appendedInputButtons">Client Search Or Add New</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButtons" size="16" type="text" placeholder="Client Ref No" name="id" value={this.state.id} onChange={this.onChange}/>
                            <InputGroupAddon addonType="append">
                            <Link to={`/viewclient/${this.state.id}`}>
                              <Button color="primary">Search</Button>
                              </Link>

                            </InputGroupAddon>
                          </InputGroup>

                        </div>
                      </FormGroup>
                      <Link to="/addnewclient">
                              <Button color="primary">Add New Client</Button>
                              </Link>
      </div>
    );
  }
}

export default index;
