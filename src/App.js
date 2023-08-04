import "./App.css";
import Landing from "./Components/Landing.jsx";
import Header from "./Components/Header.jsx";
// import Carousel from "./Components/Carousel.jsx";
// import Card from "./Components/Card.jsx";
import RSVP from "./Components/RSVP.jsx";
import Location from "./Components/Location.jsx";
import Footer from "./Components/Footer.jsx";
import Galery from "./Components/Galery.jsx";
import Slider from "./Components/Slider/Slider";
import Letter from "./Components/Letter";
import { useEffect, useLayoutEffect, useState } from "react";
import { getAllUser, newUser } from "./api/userCollection";
import { db } from "./utils/FirebaseDB";
import { onValue, ref } from "firebase/database";

//Databases
function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getAllUser()
      .then((response) => {
        setUsers(response.val());
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  //scroll into view


  // View
  return (
    <div className="scroll-smooth" >
      <Header />
      <Landing />
      {/* <Carousel /> */}
      {/* <Card /> */}
      <Slider />
      <Letter />
      <Galery />
      <RSVP />
      {/* <Location /> */}
      <Footer />
    </div>
  );
}

export default App;
