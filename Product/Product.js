import classes from "./Product.module.css";

function Product() {
  const items = [
    {
      title: "Broccoli",
      img: "https://picsum.photos/300/200?random=1",
      desc: "Rich in antioxidants and sulforaphane, these broccoli microgreens support immunity, detoxification, and overall wellness. Perfect for salads, sandwiches, smoothies, and garnishing meals.",
    },
    {
      title: "Radish",
      img: "https://picsum.photos/300/200?random=2",
      desc: "Spicy and crunchy, radish microgreens add flavor and nutrition to your dishes. Packed with vitamins, minerals, and antioxidants for a healthy, tasty boost.",
    },
    {
      title: "Sunflower",
      img: "https://picsum.photos/300/200?random=3",
      desc: "Nutty and crisp, sunflower microgreens are high in protein and essential nutrients. Ideal for sandwiches, salads, and healthy snacking.",
    },
    {
      title: "Pea Shoot",
      img: "https://picsum.photos/300/200?random=4",
      desc: "Sweet, tender pea shoots are nutrient-rich and versatile. Excellent in stir-fries, salads, and wraps, providing natural vitamins, minerals, and antioxidants.",
    },
    {
      title: "Basil",
      img: "https://picsum.photos/300/200?random=5",
      desc: "romatic and flavorful, basil microgreens enhance taste while offering antioxidants and nutrients. Perfect for garnishing dishes, sandwiches, or adding to smoothies.",
    },
    {
      title: "Coriander",
      img: "httpsum.photos/300/200?random=6",
      desc: "Fresh and fragrant, coriander microgreens add flavor and essential vitamins to meals. Great for salads, soups, and garnishing your favorite dishes.",
    },
    {
      title: "Mustard",
      img: "https://picsum.photos/300/200?random=7",
      desc: "Bold, spicy mustard microgreens are packed with antioxidants, vitamins, and minerals. Ideal for sandwiches, salads, and healthy culinary creations.",
    },
    {
      title: "Kale",
      img: "https://picsum.photos/300/200?random=8",
      desc: "Superfood kale microgreens are loaded with vitamins, minerals, and antioxidants. Perfect for smoothies, salads, or adding nutrient density to everyday meals.",
    },
    {
      title: "Spinach",
      img: "https://picsum.photos/300/200?random=9",
      desc: "Tender spinach microgreens are mild and nutritious, rich in iron, vitamins, and antioxidants. Great for salads, soups, and green smoothies.",
    },
    {
      title: "Fenugreek",
      img: "https://picsum.photos/300/200?random=10",
      desc: "Slightly bitter fenugreek microgreens aid digestion and are rich in nutrients. Ideal for culinary dishes, salads, or garnishing your meals.",
    },
    {
      title: "Beetroot",
      img: "https://picsum.photos/300/200?random=11",
      desc: "Vibrant beetroot microgreens are packed with antioxidants and nutrients. Add color, taste, and nutrition to salads, wraps, or smoothies.",
    },
    {
      title: "Amaranth",
      img: "https://picsum.photos/300/200?random=12",
      desc: "Bright and nutritious, amaranth microgreens are rich in vitamins and antioxidants. Perfect for adding color, flavor, and health benefits to meals.",
    },
  ];

  return (
    <div className={classes.ProductParentBox}>

<div className={classes.prTitle}>Products</div>

      <div className={classes.ProductWrapper}>
        {items.map((item, index) => (
          <div className={classes.ProductGroup} key={index}>
            <img
              src={item.img}
              alt={item.title}
              className={classes.ProductImage}
            />

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
