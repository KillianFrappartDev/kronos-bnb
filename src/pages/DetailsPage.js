import React from 'react';


// Local imports
import '../styles/DetailsPage.css';



class DetailsPage extends React.Component {

    render(){
        const { title, description, image, rating  } = this.props
        return (
            <>
            <div className="split">
                <div className="left">
                <div className="text">
                    <h1 className="textH1">Storming of the Bastille</h1> 
                    <p>Paris, France, Europe</p>
                    ⭐⭐⭐⭐
                    <h5>This studio has been entirely renovated ans is brand new. The studio was a former bellman loge, it is on the ground floor in a small yard. It has 2 windows, wooden walls, high ceilings, a mezzanina for the bed. it is an amzing place to wath the Storming of the Bastille ans all the beheaded people running around. Really Lovely place</h5>         
                </div>
                <div>
                    <h3 className="book">BOOK NOW</h3>
            
                </div>    
                </div>

                <div className="right">
                <div className="imageRight">
                    <img src={'https://i.ebayimg.com/images/g/Vi0AAOSwQXlcPkMx/s-l1600.jpg'} />
                </div>
                </div>
            </div>
        </>
        );
    };
    
  
}
export default DetailsPage;