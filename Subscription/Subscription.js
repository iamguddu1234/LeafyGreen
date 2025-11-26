import classes from "./Subscription.module.css"
// import Photo from "./microgreens.png"


function Subscription() {
    return (
      <div className={classes.subscriptionBox}>
      
      <div className={classes.SubBox}>

        <div className={classes.img}></div>
        <div className={classes.title}>Beetroot Seeeds</div>
        <div className={classes.desc}>Everything starts with NON-GMO seeds and grains carefully selected to ensure the healthiest alternative ingredients for those innovating and reinventing themselves.</div>
        <div className={classes.discount}>Weekly Plan</div>
        <div className={classes.pricee}>200$</div>


      </div>

      </div>
    );
  }
  
  export default Subscription;