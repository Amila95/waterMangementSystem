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
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { wasteAddReportDetails } from '../../../actions/reportAction';
import Spinner from '../../Common/Spinner';
import isEmpty from '../../../validation/isEmpty';

class index extends Component {
  constructor(){
    super();
    this.state ={
      date:'',
      refNo:'',
      sampleNo:'',
      client:'',
      sample:'',
      source:'',
      dateOfSampling:'',
      timeOfSampling:'',
      samplingCarriedOutBy:'',
      analysisStatedDate:'',
      analysisEndDate_Chemical:'',
      analysisEndDate_Bio:'',
      errors:{}
    }

  }
  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit =(e) =>{
    const id = this.props.match.params.id;
    e.preventDefault();
    const userData ={
      date:this.state.date,
      refNo:this.state.refNo,
      sampleNo: this.state.sampleNo,
      client:this.props.client.client.clientName,
      sample:this.state.sample,
      dateOfSampling:this.state.dateOfSampling,
      timeOfSampling:this.state.timeOfSampling,
      source:this.state.source,
      samplingCarriedOutBy:this.state.samplingCarriedOutBy,
      location:this.state.location,
      analysisStatedDate:this.state.analysisStatedDate,
      analysisEndDate_Chemical:this.state.analysisEndDate_Chemical,
      analysisEndDate_Bio:this.state.analysisEndDate_Bio,
    }
    //console.log(newUser);
    this.props.wasteAddReportDetails(id,userData, this.props.history);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      console.log("errors"+nextProps.errors);
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const { errors } = this.state ;
    let dashboardContent;
//console.log("report  "+ this.props.report.reportDetails);
    if (isEmpty(this.props.client.client ) ) {
      dashboardContent = <Spinner />;
    }else{
      dashboardContent = <Row>
      <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Report Details</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
              <FormGroup >
                  <Label htmlFor="date-input">Date </Label>
                  <Input type="date" id="date" name="date" placeholder="date" value={this.state.date} onChange={this.onChange} />
                  {errors.date && (<lable style={{color: "red"}}>{errors.date}</lable>)}
                  {/* {errors.date && (<FormFeedback valid className="help-block">{errors.date}</FormFeedback>)} */}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="company">Ref No</Label>
                <Input type="text" id="refNo" placeholder="Enter Ref No" name="refNo" value={this.state.refNo} onChange={this.onChange}/>
                {errors.refNo && (<lable style={{color: "red"}}>{errors.refNo}</lable>)}
                {/* {errors.refNo && (<FormFeedback valid className="help-block">{errors.refNo}</FormFeedback>)} */}
                {/* {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)} */}
              </FormGroup>
              {/* {errors.clientName && (<FormFeedback valid className="help-block">Input provided</FormFeedback>)} */}

              {/* {errors.clientName && (<lable style={{color: "red"}}>{errors.clientName}</lable>)} */}

              <FormGroup>
                <Label htmlFor="vat">Sample No</Label>
                <Input type="text" id="sampleNo" placeholder="Enter Simple no" name="sampleNo" value={this.state.sampleNo} onChange={this.onChange}/>
                {errors.sampleNo && (<lable style={{color: "red"}}>{errors.sampleNo}</lable>)}

              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Client</Label>
                <Input type="text" id="client" placeholder="Enter client" name="client" value={this.props.client.client.clientName} />
                {errors.client && (<lable style={{color: "red"}}>{errors.client}</lable>)}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Sample</Label>
                <Input type="text" id="street" placeholder="Enter sample" name="sample" value={this.state.sample} onChange={this.onChange}/>
                {errors.sample && (<lable style={{color: "red"}}>{errors.sample}</lable>)}
              </FormGroup>
              <FormGroup >
                    <Label htmlFor="date-input">Date of Sampling</Label>
                    <Input type="date" id="dateOfSampling" name="dateOfSampling" placeholder="date" value={this.state.dateOfSampling} onChange={this.onChange}/>
                  {errors.dateOfSampling && (<lable style={{color: "red"}}>{errors.dateOfSampling}</lable>)}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Time of Sampling</Label>
                <Input type="text" id="timeOfSampling" placeholder="Enter time of sampling" name="timeOfSampling" value={this.state.timeOfSampling} onChange={this.onChange}/>
                {errors.timeOfSampling && (<lable style={{color: "red"}}>{errors.timeOfSampling}</lable>)}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Source</Label>
                <Input type="text" id="source" placeholder="Enter source" name="source" value={this.state.source} onChange={this.onChange}/>
                {errors.source && (<lable style={{color: "red"}}>{errors.source}</lable>)}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Sampling carried out by</Label>
                <Input type="text" id="samplingCarriedOutBy" placeholder="Enter sampling carried out by" name="samplingCarriedOutBy" value={this.state.samplingCarriedOutBy} onChange={this.onChange}/>
                {errors.samplingCarriedOutBy && (<lable style={{color: "red"}}>{errors.samplingCarriedOutBy}</lable>)}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="street">Location</Label>
                <Input type="text" id="location" placeholder="Enter location" name="location" value={this.state.location} onChange={this.onChange}/>
                {errors.location && (<lable style={{color: "red"}}>{errors.location}</lable>)}
              </FormGroup>
              <FormGroup >
                    <Label htmlFor="date-input">Analysis Stated date</Label>
                    <Input type="date" id="analysisStatedDate" name="analysisStatedDate" placeholder="date" value={this.state.analysisStatedDate} onChange={this.onChange}/>
                  {errors.analysisStatedDate && (<lable style={{color: "red"}}>{errors.analysisStatedDate}</lable>)}
              </FormGroup>
              <FormGroup >
                    <Label htmlFor="date-input">Analysis ended date(Chemical)</Label>
                    <Input type="date" id="analysisEndDate_Chemical" name="analysisEndDate_Chemical" placeholder="date" value={this.state.analysisEndDate_Chemical} onChange={this.onChange}/>
                    {errors.analysisEndDate_Chemical && (<lable style={{color: "red"}}>{errors.analysisEndDate_Chemical}</lable>)}
              </FormGroup>
              <FormGroup >
                    <Label htmlFor="date-input">Analysis ended date(MicroBialog)</Label>
                    <Input type="date" id="analysisEndDate_Bio" name="analysisEndDate_Bio" placeholder="date" value={this.state.analysisEndDate_Bio} onChange={this.onChange}/>
                    {errors.analysisEndDate_Bio && (<lable style={{color: "red"}}>{errors.analysisEndDate_Bio}</lable>)}
              </FormGroup>
            </CardBody>
            <CardFooter>

              <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
            </CardFooter>
          </Card>
        </Col>
        </Row>
    }
    return (
      <div>
       {dashboardContent}
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

export default connect (mapStateToProps,{wasteAddReportDetails})(withRouter(index));
