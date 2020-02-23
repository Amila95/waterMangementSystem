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
  Table
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
  printMe=(e)=> {
// console.log("print ")
    var printContents = document.getElementById('printarea').innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;

			window.print();

			document.body.innerHTML = originalContents;
  // window.print();
  //  var content = document.getElementById('printarea');
  //   var pri = document.getElementById('ifmcontentstoprint').contentWindow;

  //   pri.document.open();
  //   pri.document.write('<html><head><title>my div</title>');
  //   //pri.document.write('<link rel="stylesheet" href="http://www.dynamicdrive.com/ddincludes/mainstyle.css" type="text/css" />');
  //   pri.document.write(content.innerHTML);

  //   pri.document.close();
  //   pri.focus();
  //   pri.print();
}
  render() {

    return (
      <div>
         <iframe id="ifmcontentstoprint" style={{
                        height: '0px',
                        width: '0px',
                        position: 'absolute',

                    }}></iframe>
                    <Row >
<Card >
<CardBody id='printarea' >
                <FormGroup row>
                    <Col md="3">
                      <Label>SAMPLE IDENTIFIED AS</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>COMPANY NAME</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.client}</p>
                    </Col>

                    <Col md="3">
                      <Label>ADDRESS</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.location}</p>
                    </Col>

                    <Col md="3">
                      <Label>SAMPLE QUANTITY</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>SAMPLE DESCRIPTION</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>TYPE OF SAMPLE </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>REQUESTED BY</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>SAMPLE CARRIED OUT BY</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>WITNESS</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>DATE OFSAMPLE </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.dateOfSampling}</p>
                    </Col>

                    <Col md="3">
                      <Label>TIME OF SAMPLE </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.timeOfSampling}</p>
                    </Col>

                    <Col md="3">
                      <Label>SOURCE</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.source}</p>
                    </Col>

                    <Col md="3">
                      <Label>LOCATION</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.location}</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>SAMPLE RECEIVED ON</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>JOB START DATE</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.analysisStatedDate}</p>
                    </Col>

                    <Col md="3">
                      <Label>JOB END DATE</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.analysisEndDate_Chemical}</p>
                    </Col>
                  </FormGroup>
                  <Col>
                  <Label style={{color: "red"}} >(***This is normal parameter report if necessary need to add additional parameters)</Label>
                  </Col>

                  <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Test Report
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>TSTSE</th>
                    <th>PROTOCOL</th>
                    <th>RESULT</th>
                    <th>TOLERANCE LIMIT</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>pH Value at ambient temperature 25(+/-) 2C </td>
                    <td>ELectrometric APHA 4500 - H - B</td>
                    <td></td>
                    <td>
                      6.0 to 8.5
                    </td>
                  </tr>
                  <tr>
                    <td>Biochemical Oxygen Demand(mg/L at 20c)</td>
                    <td>Incubation Method APHA 5210 -B</td>
                    <td></td>
                    <td>
                     30 at 20c(max)
                    </td>
                  </tr>
                  <tr>
                    <td>Chemical Oxygen Demand(mg/L)</td>
                    <td>Open Reflux Method APHA 5220-B</td>
                    <td></td>
                    <td>
                      250(Max)
                    </td>
                  </tr>
                  <tr>
                    <td>Oil and Grease(mg/L)</td>
                    <td>Partition - Gravimetric APHA5200 -B</td>
                    <td></td>
                    <td>
                      10(Max)
                    </td>
                  </tr>
                  <tr>
                    <td>Total Suspended Solids(mg/L)</td>
                    <td>Gravimetric APHA 2540- D</td>
                    <td></td>
                    <td>
                      50(Max)
                    </td>
                  </tr>
                  </tbody>
                </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>
        <Col>
                  <Label  >*Tolerance limits for the discharge of industrial waste into inland surface water Part1: sec(1) Schedule1</Label>
                  </Col>
                  <Col>
                  <Label  >National Environmental Protection and Quality Regulatio- Gazette Notification N0:1345/18 dated 01.02.2008</Label>
                  </Col>
                  <Col>
                  <Label  >Ref: APHA 18th edn.1992</Label>
                  </Col>
                  <Col>
                  <Label  >CONCLUSION:.........................</Label>
                  </Col>
                  <Col>
                  <Label  >This report refers specifically to the sample tested</Label>
                  </Col>
                  <Col>
                  <Label  >This report shall not be reproduced except in full, without the written approval of Avato Water tect(Pvt)Ltd.</Label>
                  </Col>
                  <Row>
                    <Col md="9"></Col>
                  <Col md="3">
                  <Label  >Chemist:......................</Label>
                  </Col>
                  </Row>
                  </CardBody>
                  <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.printMe}><i className="fa fa-dot-circle-o"></i> Print</Button>
                {/* <Button type="reset" size="sm" color="danger" onClick={this.printMe}><i className="fa fa-ban"></i> Reset</Button> */}

              </CardFooter>
</Card>
</Row>
      </div>
    );
  }
}

const mapStateToProps =(state) =>({
  auth:state.auth,
  errors:state.errors,
  client:state.client,
  report: state.report
})

export default connect (mapStateToProps,{})(withRouter(index));
