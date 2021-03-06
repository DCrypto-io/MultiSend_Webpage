import React from 'react';
import { 
  Container,
  Col,
  Tab,
  Tabs,
  Row,
  Button
} from 'react-bootstrap';
import Web3 from 'web3';
import Generator from './Generator';
import Bulk from './Bulk';
import Balance from './Approve';
import HorizontalLinearStepper from './Stepper';

class Panel extends React.Component{
    constructor(props) {
        super(props);
        this.state = { enabled: false, error: null };
        this.connectWeb3 = this.connectWeb3.bind(this);
        this.getAccess = this.getAccess.bind(this);
    };

    async connectWeb3(){
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                this.setState({enabled: true});
            } catch (error) {
                console.log('Access refused');
                return false;
                this.setState({enabled: false});
            }   
        }else{
            alert('install Metamsk')
        }
    }
    async getAccess(){
        await this.connectWeb3();
        this.setState({enabled: true})
    }
    componentDidMount(){
        this.getAccess();
    }
    setStateArea(name, value){
        this.setState({name: value});
        console.log(value);
    }
    render() {
        return (
          <Container> 
              {/*
            <Row>
                <h2>Bulk Sender system</h2>
            </Row>
            <Row>
            {this.state.enabled &&
                <Col>
                    <Tabs defaultActiveKey="generator" id="uncontrolled-tab-example">
                        <Tab className='tab' eventKey="bulk" title="Bulk send tokens">
                            <Bulk />
                        </Tab>
                        <Tab className='tab' eventKey="balance" title="Addresses balance">
                            <Balance />
                        </Tab> 
                    </Tabs>
                </Col>
            }
            {!this.state.enabled &&
                <Button onClick={this.getAccess}>Connect Metamask</Button>
            }   
            </Row>
        */}
            <HorizontalLinearStepper />
          </Container>
        );
      }
}

export default Panel;