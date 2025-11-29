import classes from "./Microgreen.module.css";
import microgreenImg from "./micro.jpg";

function Microgreen() {
  return (
    <div className={classes.MicrogreenParent}>
      <div className={classes.QUE}>Microgreens</div>

      <div className={classes.MicrogreenSubParent}>
        <img className={classes.microGeenImage} src={microgreenImg} />

        <div className={classes.microDetails}>
          <div className={classes.whatSMicrogress}>
            <div className={classes.ANS}>
              Microgreens are young, edible plants harvested shortly after
              sprouting, when they are at their peak in flavor and nutrition.
              These tiny greens contain highly concentrated levels of vitamins,
              minerals, antioxidants, and enzymes—often 4 to 40 times more than
              fully grown vegetables. Their fresh taste, vibrant colour, and
              high nutritional value make them an excellent addition to everyday
              meals.
            </div>
          </div>

          <div className={classes.types}>
            <div className={classes.ty1}>Types of Microgreens</div>
            <div className={classes.tyd1}>
              <b>Microgreens</b> come in categories offering unique taste and
              health benefits. They include leafy greens like kale, spinach, and
              lettuce; herbs such as basil, coriander, and parsley; cruciferous
              varieties like broccoli, mustard, and radish; and specialty
              microgreens like sunflower, pea shoots, and wheatgrass. Each type
              delivers distinct flavours, from mild to spicy, making them
              versatile for many dishes.
            </div>
          </div>

          <div className={classes.benifits}>
            <div className={classes.bf1}>Benefits of Microgreens?</div>
            <div className={classes.bf2}>
              1. Extremely high in vitamins, minerals, and antioxidants
            </div>
            <div className={classes.bf2}>
              2. Supports immunity, digestion, and overall wellness naturally
            </div>
            <div className={classes.bf2}>
              3. Adds vibrant colour, flavour, and texture to meals
            </div>
            <div className={classes.bf2}>
              4. Grown sustainably without pesticides using minimal resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Microgreen;
