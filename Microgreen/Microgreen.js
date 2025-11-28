import classes from "./Microgreen.module.css";
import microgreenImg from './micro.jpg';

function Microgreen() {
  return (
    <div className={classes.MicrogreenParent}>

    
<img className={classes.microGeenImage} src={microgreenImg}/>


        <div className={classes.microDetails}>

        <div className={classes.whatSMicrogress}>
            <div className={classes.QUE}>This is the Fucking Questions?</div>
            <div className={classes.ANS}>This is the Fucking Ans?</div>
          </div>

          <div className={classes.types}>
            <div className={classes.ty1}>THis si the Fucking Type</div>
            <div className={classes.ty1}>THis si the Fucking Type</div>
            <div className={classes.ty1}>THis si the Fucking Type</div>
            <div className={classes.ty1}>THis si the Fucking Type</div>
            
          </div>

          <div className={classes.benifits}>
            <div className={classes.bf1}>This is the Fucking Questions?</div>
            <div className={classes.bf2}>This is the Fucking Ans?</div>
            <div className={classes.bf3}>This is the Fucking Ans?</div>
            <div className={classes.bf4}>This is the Fucking Ans?</div>
          </div>

        


        </div>

     

    </div>
  );
}

export default Microgreen;
