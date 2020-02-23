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
import { updateAlkalinity , updateHardness, updateCAHardness, updateMgHardness, updateChloride} from '../../actions/reportAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Spinner from '../Common/Spinner';
import isEmpty from '../../validation/isEmpty';
import { Link } from 'react-router-dom';

class index extends Component {
  constructor(){
    super();
    this.state ={
      alkalinity_x:'',
      alkalinity_y:'',
      alkalinity_result:'',
      hardness_x:'',
      hardness_y:'',
      hardness_result:'',
      cAHardness_x:'',
      cAHardness_y:'',
      cAHardness_result:'',
      mgHardness_x:'',
      mgHardness_y:'',
      mgHardness_result:'',
      chloride_x:'',
      chloride_y:'',
      chloride_result:'',

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

  onUpdateAlkalinity =(e) =>{
    e.preventDefault();
    const userData ={
      alkalinity_x:this.state.alkalinity_x,
      alkalinity_y:this.state.alkalinity_y,
    }
    this.setState({ alkalinity_result:  Number(userData.alkalinity_x)+ Number(userData.alkalinity_y) })
    const data ={
      oilAndGrease: Number(userData.alkalinity_x)+ Number(userData.alkalinity_y)
    }
    this.props.updateAlkalinity(data, this.props.report.reportDetails.id);

    console.log("working" + data);
  }
  onSubmitSuspended =(e) =>{
    e.preventDefault();
    const userData ={
      hardness_x:this.state.hardness_x,
      hardness_y:this.state.hardness_y,
    }
    this.setState({ hardness_result:  Number(userData.hardness_x)+ Number(userData.hardness_y) })
    const data ={
      oilAndGrease: Number(userData.hardness_x)+ Number(userData.hardness_y)
    }
    this.props.updateHardness(data, 57);
  }
  onSubmitCod =(e) =>{
    e.preventDefault();
    const userData ={
      cAHardness_x:this.state.cAHardness_x,
      cAHardness_y:this.state.cAHardness_y,
    }
    this.setState({ cAHardness_result:  Number(userData.cAHardness_x)+ Number(userData.cAHardness_y) })
    const data ={
      oilAndGrease: Number(userData.cAHardness_x)+ Number(userData.cAHardness_y)
    }
    this.props.updateCAHardness(data, 57);
  }
  onSubmitMgHardness =(e) =>{
    e.preventDefault();
    const userData ={
      mgHardness_x:this.state.hardness_result,
      mgHardness_y:this.state.cAHardness_result,
    }
    this.setState({ mgHardness_result:  Number(userData.mgHardness_x)+ Number(userData.mgHardness_y) })
    const data ={
      oilAndGrease: Number(userData.mgHardness_x)+ Number(userData.mgHardness_y)
    }
    this.props.updateMgHardness(data, 57);
  }

  onChloride =(e) =>{
    e.preventDefault();
    const userData ={
      chloride_x:this.state.chloride_x,
      chloride_y:this.state.chloride_y,
    }
    this.setState({ chloride_result:  Number(userData.chloride_x)+ Number(userData.chloride_y) })
    const data ={
      oilAndGrease: Number(userData.chloride_x)+ Number(userData.chloride_y)
    }
    this.props.updateChloride(data, 57);
  }

  onSubmit(){

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
    // if (!isEmpty(this.props.report.reportDetails ) ) {
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
                <Label htmlFor="street">Alkalinity</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>X</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="alkalinity" placeholder="enter" name="alkalinity_x" value={this.state.alkalinity_x} onChange={this.onChange}  />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Y</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="alkalinity_y" placeholder="enter" name="alkalinity_y" value={this.state.alkalinity_y} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onUpdateAlkalinity}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" value={this.state.alkalinity_result} />

                  </FormGroup>
                </Col>
              </Row>

                <Label htmlFor="street">Hardness</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>X</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="hardness_x" value={this.state.hardness_x} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Y</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="hardness_y" value={this.state.hardness_y} onChange={this.onChange} />
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


                  <Input type="text" id="cvv" placeholder="" name="oli_initial_weight" value={this.state.hardness_result} onChange={this.onChange} />

                  </FormGroup>
                </Col>
              </Row>
                <Label htmlFor="street">Ca Hardness</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>X</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="cAHardness_x" value={this.state.cAHardness_x} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Y</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="cAHardness_y" value={this.state.cAHardness_y} onChange={this.onChange}/>
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


                  <Input type="text" id="cvv" placeholder="" required value={this.state.cAHardness_result} />

                  </FormGroup>
                </Col>
              </Row>
              <Label htmlFor="street">Mg Hardness</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Hard ness</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="cod_x" value={this.state.hardness_result} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Ca Hard nesss</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="cod_y" value={this.state.cAHardness_result} onChange={this.onChange}/>
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onSubmitMgHardness}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" required value={this.state.mgHardness_result} />

                  </FormGroup>
                </Col>
              </Row>
              <Label htmlFor="street">Chloride</Label>
                <Row>

                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>X</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="chloride_x" value={this.state.chloride_x} onChange={this.onChange} />
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>
                  <Col md="3">
                    <Label>Y</Label>
                  </Col>
                  <Col xs="12" md="9">
                  <Input type="text" id="cvv" placeholder="enter" name="chloride_y" value={this.state.chloride_y} onChange={this.onChange}/>
                  </Col>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Button type="button" color="primary" onClick={this.onChloride}>Result</Button>
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup row>


                  <Input type="text" id="cvv" placeholder="" required value={this.state.chloride_result} />

                  </FormGroup>
                </Col>
              </Row>

            </CardBody>
            <CardFooter>
            <Link to={'/report'}>
            <Button type="submit" size="sm" color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Normal Report</Button>
                </Link>

              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Additional Parameters</Button>
            </CardFooter>
          </Card>
        </Col>
        </Row>
    // }
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
  report:state.report,
  errors:state.errors
})

export default connect (mapStateToProps,{updateAlkalinity,  updateHardness, updateCAHardness, updateMgHardness, updateChloride})(withRouter(index));
