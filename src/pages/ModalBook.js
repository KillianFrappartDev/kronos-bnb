import React, { Component } from 'react'
import Logo from "./Logo.png"
import Message from './Message'
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/ModalCss.css'


 class ModalBook extends Component {
     constructor(props) {
         super(props)  
         this.state = {
            firstName: "",
                lastName: "",
                    showMsg:true,
                        show: false,
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

    handleShow(){
        this.setState({ show: false})
    }
    render() {
        return (
            <div className="bg-modal">             
                <div className="wrapper">                
                    <Link to ={{
                            pathname: "/Results"
                            }}> 
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Link>
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
                                    {this.state.show ? <Message 
                                                        handleShow={()=>this.handleShow()}
                                                        name={this.state.firstName}
                                                        lastName={this.state.lastName} /> : null}
                                                     
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default ModalBook











