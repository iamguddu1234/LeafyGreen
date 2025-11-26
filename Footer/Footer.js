import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerparentBox}>
      <div className={classes.BOX1}>
        <div className={classes.logoMaterial}>
          <div className={classes.mainLogo}></div>

          <div className={classes.socialIcon}>
            <div className={classes.insta}></div>
            <div className={classes.fb}></div>
            <div className={classes.fb}></div>
          </div>
        </div>

        <div className={classes.email}>
          <div className={classes.emailLogo}></div>
          <div className={classes.emailAddress}></div>
        </div>

        <div className={classes.address}>
          <div className={classes.addressLogo}></div>
          <div className={classes.detailsAddress}></div>
        </div>

        <div className={classes.phoneNumber}>
          <div className={classes.phoneLogo}></div>
          <div className={classes.phone}></div>
        </div>
      </div>
      <div className={classes.BOX2}>
<div className={classes.home}>HOME</div>
<div className={classes.home}>Products</div>
<div className={classes.home}>Subscription</div>
<div className={classes.home}>Contact</div>
<div className={classes.home}>About</div>
      </div>

      <div className={classes.BOX3}>
        <div className={classes.copyRight}>All Copyright Reserved To Motappa(Soniya)</div>
      </div>
    </div>
  );
}

export default Footer;
