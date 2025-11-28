
import classes from "./Product.module.css";

function Product() {
  const items = [
    { title: "Product 1", img: "https://picsum.photos/300/200?random=1", desc: "This is dummy description for product 1" },
    { title: "Product 2", img: "https://picsum.photos/300/200?random=2", desc: "This is dummy description for product 2" },
    { title: "Product 3", img: "https://picsum.photos/300/200?random=3", desc: "This is dummy description for product 3" },
    { title: "Product 4", img: "https://picsum.photos/300/200?random=4", desc: "This is dummy description for product 4" },
    { title: "Product 5", img: "https://picsum.photos/300/200?random=5", desc: "This is dummy description for product 5" },
    { title: "Product 6", img: "httpsum.photos/300/200?random=6", desc: "This is dummy description for product 6" },
    { title: "Product 7", img: "https://picsum.photos/300/200?random=7", desc: "This is dummy description for product 7" },
    { title: "Product 8", img: "https://picsum.photos/300/200?random=8", desc: "This is dummy description for product 8" },
    { title: "Product 9", img: "https://picsum.photos/300/200?random=9", desc: "This is dummy description for product 9" },
    { title: "Product 10", img: "https://picsum.photos/300/200?random=10", desc: "This is dummy description for product 10" },
    { title: "Product 11", img: "https://picsum.photos/300/200?random=11", desc: "This is dummy description for product 11" },
    { title: "Product 12", img: "https://picsum.photos/300/200?random=12", desc: "This is dummy description for product 12" },
  ];

  return (
    <div className={classes.ProductParentBox}>
      <div className={classes.ProductWrapper}>
        {items.map((item, index) => (
          <div className={classes.ProductGroup} key={index}>
            <img src={item.img} alt={item.title} className={classes.ProductImage} />

            <div className={classes.ProductTitle}>{item.title}</div>
            <div className={classes.ProductDescription}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;



// import classes from "./Product.module.css"

// function Product() {
//     return (
//       <div className={classes.ProductParentBox}>


// <div className={classes.ProductGroup}>

//   <div className={classes.ProductImage}></div>
//   <div className={classes.ProductTitle}>AALLU WITH SHAALU</div>
//   <div className={classes.ProductDescription}>Motapppa With Cake Eating hungry stomack. alway hungry for cake and other things like drinks. Ans one is Wadapaav girl</div>

// </div>

//       </div>
//     );
//   }
  
//   export default Product;