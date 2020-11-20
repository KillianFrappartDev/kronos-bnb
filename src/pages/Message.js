import React from 'react'
import { Button} from 'react-bootstrap'


const  Message = ({ onClick, name, lastName}) => {
    return (
            <div className="Modal" >
                <label className="label"> Thank you for booking  {name} {lastName} </label>
                <Button className="btn" onClick={onClick}> CLOSE </Button>
            </div>
    )
}

export default Message;