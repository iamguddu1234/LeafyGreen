import logo from './logo.svg';
import classes from './App.module.css';

import CompanyDetails from './Company/CompanyDetails';
import Contact from './Contact/Contact';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import Subscription from './Subscription/Subscription';
import Product from './Product/Product';
import Microgreen from './Microgreen/Microgreen';


function App() {
  return (
    <div className={classes.mainBlock}>






      <div className={classes.subBlock}>

      <header className={classes.header}>
      <nav className={classes.navbar}>
        {/* Left side menu items */}
        <div className={classes.menuItems}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right side logo */}
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </nav>
    </header>

<Product/>
<Subscription/>
     
      {/* <Faq/> */}

<CompanyDetails/> 
<Microgreen/>
<Faq/>
<div id="contact">
  <Contact />
</div>
 <Footer/>
{/* <Product/> */}

{/* 
 <Subscription/> */}
{/* <Contact/>
<Faq/>
 */}

</div>
    

    </div>
  );
}

export default App;
