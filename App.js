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

<Microgreen/>

      {/* <Footer/> */}
      {/* <Faq/> */}

{/* <CompanyDetails/>  */}
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
