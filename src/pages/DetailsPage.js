import React from 'react';
import styles from 'src/styles/DetailsPage.css';



class DetailsPage extends React.Component {

    render(){
        const { title, description, image, rating  } = this.props
        return (
            <>
            <div className={styles.split}>
                <div className={styles.left}>
                <div className={styles.text}>
                    <h1 className={styles.textH1}>Storming of the Bastille</h1> 
                    <p>Paris, France, Europe</p>
                    ⭐⭐⭐⭐
                    <h5>This studio has been entirely renovated ans is brand new. The studio was a former bellman loge, it is on the ground floor in a small yard. It has 2 windows, wooden walls, high ceilings, a mezzanina for the bed. it is an amzing place to wath the Storming of the Bastille ans all the beheaded people running around. Really Lovely place</h5>         
                </div>
                </div>

                <div className={styles.right}>
                <div className={styles.imageRight}>
                    <img src={'https://i.ebayimg.com/images/g/Vi0AAOSwQXlcPkMx/s-l1600.jpg'} />
                </div>
                </div>
            </div>
        </>
        );
    };
    
  
}
export default DetailsPage;