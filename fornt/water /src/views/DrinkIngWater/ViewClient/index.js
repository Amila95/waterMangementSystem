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
import { getClient } from '../../../actions/clientActions';
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

  componentDidMount(){
    if (this.props.match.params.id) {
      this.props.getClient(this.props.match.params.id);
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
                  <Input type="text" id="company"  name="clientName" value={this.props.client.client.clientName} onChange={this.onChange}/>
                  {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}
                  {/* {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)} */}
                </FormGroup>


                <FormGroup>
                  <Label htmlFor="vat">Company Name</Label>
                  <Input type="text" id="vat"  name="companyName" value={this.props.client.client.companyName} onChange={this.onChange}/>
                  {/* {errors.companyName && (<lable style={{color: "red"}}>{errors.companyName}</lable>)} */}

                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Address</Label>
                  <Input type="text" id="street" name="address" value={this.props.client.client.address} onChange={this.onChange}/>

                </FormGroup>

              </CardBody>
              <CardFooter>
              {/* {`/drinkingwaterclient/viewclient/${this.state.id}`} */}
              <Link to={`/drinkingwaterclient/viewclient/${this.props.match.params.id}/reportDetails`}>
                <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> Make Report</Button>
                </Link>
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
  errors:state.errors,
  client:state.client
})

export default connect (mapStateToProps,{getClient})(withRouter(index));
