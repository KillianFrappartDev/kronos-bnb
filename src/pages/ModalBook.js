import React, { Component } from 'react'
import './ModalCss.css'
import Logo from "./Logo.png"
import Message from './Message'
import { Button, Modal } from 'react-bootstrap'


 class ModalBook extends Component {
     constructor(props) {
         super(props)  
         this.state = {
            firstName: "",
            lastName: "",
            show: false
            }
     }
     handleNameChange = e => {
        this.setState({ firstName: e.target.value})
     }
     handleLastNameChange = e => {
        this.setState({ lastName: e.target.value, lastName: e.target.value})
     }
     handleModal(){
        this.setState({ show: !this.state.show})
    }
   
   
     
    render() {
        return (
            <div className="bg-modal">
                <div className="wrapper">
                    <div className="content-form">
                        <div className="input-fields">
                            <img src={Logo} className="logo"/>
                            <form>
                            <div className="checkbox" onChange={this.handleChange}>
                                <label> Gender : </label>
                                <label> Male</label>
                                <input checked={this.state.checked}  onChange={this.handleChecked} type="checkbox" /> 
                                <label> Female</label>
                                <input type="checkbox" />
                            </div>
                            <input type="text"  onChange={this.handleNameChange} value= {this.state.firstName} className="input" placeholder="First name"></input>
                            <input type="text"  onChange={this.handleLastNameChange} value={this.state.lastName} className="input" placeholder="Last name"></input>
                            <input type="text"  className="input" placeholder="Adress email"></input>
                            <input type="text"  className="input" placeholder="Mobile number"></input>
                            <Button className="send" onClick={()=>this.handleModal()}>Submit</Button>
                                        {/* <Modal  show={this.state.show}>
                                            <Modal.Body> 
                                                Thank your for booking {this.state.firstName}
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={()=>this.handleModal()}> Close</Button>
                                            </Modal.Footer>
                                        </Modal>  */}
                                    {this.state.show ? <Message 
                                                        onclick={this.handleModal} 
                                                        name={this.state.firstName}
                                                        lastName={this.state.lastName} /> : null }
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
            

        )
    }
}

export default ModalBook












{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Book your home</h5>
                        </div>
                        <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">First name*: </label>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control input-sm" id="inputsm" aria-describedby="emailHelp"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last Name*: </label>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div> <div class="form-group">
                                <label for="exampleInputEmail1">Email adress*: </label>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile number*: </label>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div> */}