import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);


  //   this.state = {
  //     dropdownOpen: false,
  //     radioSelected: 2,
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  componentDidMount() {
    //console.log(" login outside this.props.auth.isAuthenticated = ",this.props.auth.isAuthenticated);
    if(!this.props.auth.isAuthentication){
        console.log(" login this.props.auth.isAuthenticated = ",this.props.auth.isAuthentication);
       this.props.history.push('/login');
       // window.location = '/#/dashboard';
    }
}
componentWillReceiveProps(nextProps){
  //console.log(" login outside this.props.auth.isAuthentication = ",nextProps.auth.isAuthentication);
  if(!nextProps.auth.isAuthentication){
    this.props.history.push('/login');
  }
  // if(nextProps.errors){
  //   console.log("errors"+nextProps.errors);
  //   this.setState({errors: nextProps.errors});
  // }
}


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
          <Link to={'/drinkingwaterclient'}>
            <Card className="text-white bg-info" >
              <CardBody className="pb-0">

                <div className="text-value">Drink Water</div>
                {/* <div>Members online</div> */}
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/* <Line data={cardChartData2} options={cardChartOpts2} height={70} /> */}
              </div>
            </Card>
            </Link>
          </Col>

          <Col xs="12" sm="6" lg="3">
          <Link to={'/wastewaterclient'}>
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">

                <div className="text-value">Waste Water</div>
                {/* <div>Members online</div> */}
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/* <Line data={cardChartData1} options={cardChartOpts1} height={70} /> */}
              </div>
            </Card>
            </Link>
          </Col>

          <Col xs="12" sm="6" lg="3"  >
          {/* <Link to={'/wastewaterclient'}> */}
            <Card className="text-white bg-warning"  >
              <CardBody className="pb-0" onClick={this.toggleSuccess}>

                <div className="text-value">Raw Water</div>
                {/* <div>Members online</div> */}
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                {/* <Line data={cardChartData3} options={cardChartOpts3} height={70} /> */}
              </div>
            </Card>
            {/* </Link> */}
          </Col>
          <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                       className={'modal-success ' + this.props.className}>
                  {/* <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader> */}
                  <ModalBody>
                    Still not development
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.toggleSuccess}>Ok</Button>{' '}
                    {/* <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button> */}
                  </ModalFooter>
                </Modal>

          <Col xs="12" sm="6" lg="3">
          {/* <Link to={'/wastewaterclient'}> */}
            <Card className="text-white bg-danger">
              <CardBody className="pb-0" onClick={this.toggleSuccess}>

                <div className="text-value">Boiler Water</div>
                {/* <div>Members online</div> */}
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                {/* <Bar data={cardChartData4} options={cardChartOpts4} height={70} /> */}
              </div>
            </Card>
            {/* </Link> */}
          </Col>
        </Row>



      </div>
    );
  }
}

//export default Dashboard;
const mapStateToProps =(state) =>({
  auth:state.auth,
  errors:state.errors
})

export default connect (mapStateToProps)(withRouter(Dashboard));
