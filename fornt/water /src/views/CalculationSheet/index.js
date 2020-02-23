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
import { updateOil , updateCOD, updateTss} from '../../actions/reportAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Spinner from '../Common/Spinner';
import isEmpty from '../../validation/isEmpty';

class index extends Component {
  constructor(){
    super();
    this.state ={
      oli_initial_weight:'',
      oli_final_weight:'',
      oli_result:'',
      suspended_initial_weight:'',
      suspended_final_weight:'',
      suspended_result:'',
      cod_x:'',
      cod_y:'',
      cod_result:'',
      errors:{}
    }

  }
  onChange =(e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmitOil =(e) =>{
    e.preventDefault();
    const userData ={
      oli_initial_weight:this.state.oli_initial_weight,
      oli_final_weight:this.state.oli_final_weight,
    }
    this.setState({ oli_result:  Number(userData.oli_initial_weight)+ Number(userData.oli_final_weight) })
    const data ={
      oilAndGrease: Number(userData.oli_initial_weight)+ Number(userData.oli_final_weight)
    }
    this.props.updateOil(data, this.props.report.reportDetails.id);

    console.log("working" + data);
  }
  onSubmitSuspended =(e) =>{
    e.preventDefault();
    const userData ={
      suspended_initial_weight:this.state.suspended_initial_weight,
      suspended_final_weight:this.state.suspended_final_weight,
    }
    this.setState({ suspended_result:  Number(userData.suspended_initial_weight)+ Number(userData.suspended_final_weight) })
    const data ={
      oilAndGrease: Number(userData.suspended_initial_weight)+ Number(userData.suspended_final_weight)
    }
    this.props.updateTss(data, this.props.report.reportDetails.id);
  }
  onSubmitCod =(e) =>{
    e.preventDefault();
    const userData ={
      cod_x:this.state.cod_x,
      cod_y:this.state.cod_y,
    }
    this.setState({ cod_result:  Number(userData.cod_x)+ Number(userData.cod_y) })
    const data ={
      oilAndGrease: Number(userData.cod_x)+ Number(userData.cod_y)
    }
    this.props.updateCOD(data, this.props.report.reportDetails.id);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      console.log("errors"+nextProps.errors);
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    const { errors , report} = this.state ;

    let dashboardContent;
//console.log("report  "+ this.props.report.reportDetails);
    // if (isEmpty(this.props.report.reportDetails ) ) {
    //   dashboardContent = <Spinner />;
    // }else{
      dashboardContent=<Row>
      <Col xs="12" sm="9">
          <Card>
            <CardHeader>
              <strong>Calculation</strong>
              <small> Form</small>
            </CardHeader>
            <CardBody>
                <Label htmlFor="street">Oil and grease</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Initial weight</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="oli_initial_weight" value={this.state.oli_initial_weight} onChange={this.onChange}  />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Final weight</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="oli_final_weight" value={this.state.oli_final_weight} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onSubmitOil}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" value={this.state.oli_result} />

                  </FormGroup>
                </Col>
              </Row>

                <Label htmlFor="street">Total Suspended Solid</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Initial weight</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="suspended_initial_weight" value={this.state.suspended_initial_weight} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Final weight</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="suspended_final_weight" value={this.state.suspended_final_weight} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onSubmitSuspended}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" name="oli_initial_weight" value={this.state.suspended_result} onChange={this.onChange} />

                  </FormGroup>
                </Col>
              </Row>
                <Label htmlFor="street">COD</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="2">
                    <Label>X</Label>
                  </Col>
                  <Col xs="12" md="10">
                  <Input type="text" id="cvv" placeholder="enter" name="cod_x" value={this.state.cod_x} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Y</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="cod_y" value={this.state.cod_y} onChange={this.onChange}/>
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onSubmitCod}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" required value={this.state.cod_result} />

                  </FormGroup>
                </Col>
              </Row>

            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Normal Report</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Additional Parameters</Button>
            </CardFooter>
          </Card>
        </Col>
        </Row>
    // }
    return (
      <div>
        {dashboardContent}
        {/* <Row>
        <Col xs="12" sm="9">
            <Card>
              <CardHeader>
                <strong>Calculation</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                  <Label htmlFor="street">Oil and grease</Label>
                  <Row>

                  <Col xs="3">
                    <FormGroup row>
                    <Col md="3">
                      <Label>Initial weight</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="cvv" placeholder="enter" name="oli_initial_weight" value={this.state.oli_initial_weight} onChange={this.onChange}  />
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>
                    <Col md="3">
                      <Label>Final weight</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="cvv" placeholder="enter" name="oli_final_weight" value={this.state.oli_final_weight} onChange={this.onChange} />
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Button type="button" color="primary" onClick={this.onSubmitOil}>Result</Button>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>


                    <Input type="text" id="cvv" placeholder="" value={this.state.oli_result} />

                    </FormGroup>
                  </Col>
                </Row>

                  <Label htmlFor="street">Total Suspended Solid</Label>
                  <Row>

                  <Col xs="3">
                    <FormGroup row>
                    <Col md="3">
                      <Label>Initial weight</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="cvv" placeholder="enter" name="suspended_initial_weight" value={this.state.suspended_initial_weight} onChange={this.onChange} />
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>
                    <Col md="3">
                      <Label>Final weight</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="cvv" placeholder="enter" name="suspended_final_weight" value={this.state.suspended_final_weight} onChange={this.onChange} />
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Button type="button" color="primary" onClick={this.onSubmitSuspended}>Result</Button>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>


                    <Input type="text" id="cvv" placeholder="" name="oli_initial_weight" value={this.state.suspended_result} onChange={this.onChange} />

                    </FormGroup>
                  </Col>
                </Row>
                  <Label htmlFor="street">COD</Label>
                  <Row>

                  <Col xs="3">
                    <FormGroup row>
                    <Col md="2">
                      <Label>X</Label>
                    </Col>
                    <Col xs="12" md="10">
                    <Input type="text" id="cvv" placeholder="enter" name="cod_x" value={this.state.cod_x} onChange={this.onChange} />
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>
                    <Col md="3">
                      <Label>Y</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="cvv" placeholder="enter" name="cod_y" value={this.state.cod_y} onChange={this.onChange}/>
                    </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Button type="button" color="primary" onClick={this.onSubmitCod}>Result</Button>
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup row>


                    <Input type="text" id="cvv" placeholder="" required value={this.state.cod_result} />

                    </FormGroup>
                  </Col>
                </Row>

              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Normal Report</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Additional Parameters</Button>
              </CardFooter>
            </Card>
          </Col>
          </Row> */}

      </div>
    );
  }
}

//export default index;

const mapStateToProps =(state) =>({
  auth:state.auth,
  report:state.report,
  errors:state.errors
})

export default connect (mapStateToProps,{updateOil,  updateCOD, updateTss})(withRouter(index));
