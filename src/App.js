import "./App.css";
// import './App.scss'
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { MobileHeader } from "./components/header/MobileHeader";
import { Contact } from "./components/contact/Contact";
import { Products } from "./components/products/Products";
import { TestYourHome } from "./components/testing/TestYourHome";
import { News } from "./components/news/News";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import Partners from "./components/partners/Partners";
import { RightTestSysytem } from "./components/righttesting/RightTestSystem";
import { SingleProduct } from "./components/products/singleProduct/SingleProduct";
import { Groups } from "./components/products/groups/Groups";
import { Gallery } from "./components/gallery/Gallery";
import { SmartHome } from "./components/services/Smarthome";
import { SmartOffice } from "./components/services/Smartoffice";
import { SmartHotel } from "./components/services/Smarthotel";
import {Notdone} from "./components/services/Notdone"
import { Installment } from "./components/services/Installment";
import { ShowRoom } from "./components/showroom/Showroom";
import { PartnerPage } from "./components/partners/singlepartner";
import { Faq } from "./components/FAQ/Faq";
import { Documentation } from "./components/document/Documentation";
import { Openfile } from "./components/document/Openfile";

function App() {
  const [isMobile, setMobile] = useState(false);
  let width = 0;

  const handleResize = () => {
    width = window.innerWidth;
    if (width < 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <div className="App">
        {!isMobile ? (
          <>
            <Header />
            <RightTestSysytem />
          </>
        ) : (
          <MobileHeader />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/products/group/:group_id" component={Groups} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/about/partners" component={Partners} />
          <Route exact path="/services/smarthome" component={SmartHome} />
          <Route exact path="/services/Notdone" component={Notdone} />
          <Route exact path="/services/smartoffice" component={SmartOffice} />
          <Route exact path="/services/smarthotel" component={SmartHotel} />
          <Route exact path="/services/installment" component={Installment} />
          <Route exact path="/about/gallery" component={Gallery} />
          <Route exact path="/showroom/showroom" component={ShowRoom} />
          <Route exact path="/test-system" component={TestYourHome} />
          <Route exact path="/about/faq" component={Faq} />
          <Route exact path="/document/documentation" component={Documentation} />
          <Route exact path="/document/Openfile" component={Openfile} />
          <Route path="/about/partners/:id" component={PartnerPage} />
        </Switch>
      </div>
    </>
  );
}
export default App;