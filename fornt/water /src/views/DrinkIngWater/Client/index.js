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

class index extends Component {
  render() {
    return (
      <div>
                   <FormGroup>
                        <Label htmlFor="appendedInputButtons">Client Search Or Add New</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInputButtons" size="16" type="text" placeholder="Client Ref No"/>
                            <InputGroupAddon addonType="append">
                              <Button color="secondary">Search</Button>
                              <Link to="/addnewclient">
                              <Button color="secondary">Add New Client</Button>
                              </Link>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
      </div>
    );
  }
}

export default index;
