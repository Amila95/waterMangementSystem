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
                      <Label>Ref No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>Sample No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.client}</p>
                    </Col>

                    <Col md="3">
                      <Label>CLIENT</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.location}</p>
                    </Col>

                    <Col md="3">
                      <Label>SAMPLE </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                    <Col md="3">
                      <Label>LABLE</Label>
                    </Col>
                    <Col md="3">
                      <Label>Date of Sampling</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                    <Col md="3">
                      <Label></Label>
                    </Col>
                    <Col md="3">
                      <Label>Time of Sampling</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                    <Col md="3">
                      <Label></Label>
                    </Col>
                    <Col md="3">
                      <Label>Source</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                    <Col md="3">
                      <Label></Label>
                    </Col>
                    <Col md="3">
                      <Label>Sampling carried out by</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>
                    <Col md="3">
                      <Label></Label>
                    </Col>
                    <Col md="3">
                      <Label>Location</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <p className="form-control-static">:{this.props.report.reportDetails.sample}</p>
                    </Col>

                  </FormGroup>



                  <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Test Result
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Characteristic</th>
                    <th>Method of Test</th>
                    <th>Test Result</th>
                    <th>Requirement(Maximum)</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Colour, Hazen units,(max)</td>
                    <td>APHA 2120-B</td>
                    <td></td>
                    <td>
                      15
                    </td>
                  </tr>
                  <tr>
                    <td>Odour</td>
                    <td>Sensory evaluation</td>
                    <td></td>
                    <td>
                     Unobjectionable
                    </td>
                  </tr>
                  <tr>
                    <td>PH at +- 2C</td>
                    <td>APHA 4500-H+B</td>
                    <td></td>
                    <td>
                      6.5 to 8.5
                    </td>
                  </tr>
                  <tr>
                    <td>Turbidity, (NTU)</td>
                    <td>APHA 2130 -B</td>
                    <td></td>
                    <td>
                      02
                    </td>
                  </tr>
                  <tr>
                    <td>Free Ammonia (as NH3mg/L)</td>
                    <td>Appendix-A</td>
                    <td></td>
                    <td>
                      0.06
                    </td>
                  </tr>
                  <tr>
                    <td>Albuminoid Ammonia(mg/L)</td>
                    <td>Appendix -A</td>
                    <td></td>
                    <td>
                      0.15
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride(as Cl, mg/L)</td>
                    <td>APHA 4500 -CL B</td>
                    <td></td>
                    <td>
                      250
                    </td>
                  </tr>
                  <tr>
                    <td>Free residual chlorine(as Cl2, mg/L)</td>
                    <td>APHA 4500 -CL G</td>
                    <td></td>
                    <td>
                      0.15
                    </td>
                  </tr>
                  <tr>
                    <td>Iron (as Fe, mg/L)</td>
                    <td>APHA 3500 -Fe B</td>
                    <td></td>
                    <td>
                      0.3
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate(as NO3, mg/L)</td>
                    <td>APHA 4500 -NO3 E</td>
                    <td></td>
                    <td>
                      50
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate(as NO2, mg/L)</td>
                    <td>APHA 4500 -NO2 B</td>
                    <td></td>
                    <td>
                      03
                    </td>
                  </tr>
                  <tr>
                    <td>Sulphate(as SO42-, mg/L)</td>
                    <td>APHA 4500 -SO42- E</td>
                    <td></td>
                    <td>
                      250
                    </td>
                  </tr>
                  <tr>
                    <td>Total Alklinity(as CaCo3, mg/L)</td>
                    <td>APHA 2320 -B</td>
                    <td></td>
                    <td>
                      200
                    </td>
                  </tr>
                  <tr>
                    <td>Total Dissolved Solds(mg/L)</td>
                    <td>APHA 2540 -C</td>
                    <td></td>
                    <td>
                      500
                    </td>
                  </tr>
                  <tr>
                    <td>Total Hardness(as CaCO3, mg/L)</td>
                    <td>APHA 2340 -B</td>
                    <td></td>
                    <td>
                      250
                    </td>
                  </tr>
                  <tr>
                    <td>Total Phosphate(as PO43-, mg/L )</td>
                    <td>APHA 2500 -PC</td>
                    <td></td>
                    <td>
                      2.0
                    </td>
                  </tr>
                  </tbody>
                  <Label  >SLS 614: 2013 - SPECIFICATION FOR POTABLE WATER(Frist Revision)</Label>
                </Table>

              </CardBody>
            </Card>
          </Col>
        </Row>

                  <Col>
                  <Label  >Dates of performance: 19/09/2018(** Analysis stated date)- 02/10/2018(**Analysis end date)</Label>
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
