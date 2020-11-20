import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Local imports
import Logo from '../assets/kronos-logo2.png';
import Message from './Message';
import '../styles/Modal.css';

class ModalBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      showMsg: true,
      show: false
    };
  }
  handleNameChange = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value, lastName: e.target.value });
  };
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  handleShow() {
    this.props.close();
  }
  render() {
    return (
      <>
        <div onClick={this.props.close} className="backdrop-modal"></div>
        <div className="bg-modal">
          <div className="wrapper">
            <button onClick={this.props.close} type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="content-form">
              <div className="input-fields">
                <img src={Logo} className="logo" />
                <form>
                  <div className="checkbox" onChange={this.handleChange}>
                    <label> Gender : </label>
                    <label> Male</label>
                    <input checked={this.state.checked} onChange={this.handleChecked} type="checkbox" />
                    <label> Female</label>
                    <input type="checkbox" />
                  </div>
                  <input
                    type="text"
                    onChange={this.handleNameChange}
                    value={this.state.firstName}
                    className="input"
                    placeholder="First name"
                  ></input>
                  <input
                    type="text"
                    onChange={this.handleLastNameChange}
                    value={this.state.lastName}
                    className="input"
                    placeholder="Last name"
                  ></input>
                  <input type="text" className="input" placeholder="Adress email"></input>
                  <input type="text" className="input" placeholder="Mobile number"></input>
                  <Button className="send" onClick={() => this.handleModal()}>
                    Submit
                  </Button>
                  {this.state.show ? (
                    <Message
                      handleShow={() => this.handleShow()}
                      name={this.state.firstName}
                      lastName={this.state.lastName}
                    />
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalBook;
