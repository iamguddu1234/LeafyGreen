import classes from "./CompanyDetails.module.css"
import photo from './first.jpg';
import photo2 from './second.png';


function CompanyDetails() {
    return (
      <div className={classes.parentBlock}>

<img className={classes.imageData} src = {photo2}/>
<div className={classes.detailsBlock}>

<div className={classes.title}>This is the Fucking title of the leafy green</div>
<div className={classes.description}>
Everything starts with NON-GMO seeds and grains carefully selected to ensure the healthiest alternative ingredients for those innovating and reinventing themselves. We are a game changer and will be leading the way in many years to come, making a positive impact in the lives of many of you who share our passion for good food and finding healthier ways, a way that is closer aligned with nature. We are committed to conserve natural resources through proper use of water and low carbon footprint through vertical farming.
Everything starts with NON-GMO seeds and grains carefully selected to ensure the healthiest alternative ingredients for those innovating and reinventing themselves. We are a game changer and will be leading the way in many years to come, making a positive impact in the lives of many of you who share our passion for good food and finding healthier ways, a way that is closer aligned with nature. We are committed to conserve natural resources through proper use of water and low carbon footprint through vertical farming.
</div>
</div>





      </div>
    );
  }
  
  export default CompanyDetails;