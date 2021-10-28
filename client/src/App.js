import React from "react";
//HoC
import HomeLayoutHoc from "./HOC/HomeHoc";
//css file
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//Component
import Temp from "./Components/Temp";
import Master from "./Components/Master";
import RestaurantLayoutHoc from "./HOC/RestaurantHoC";

function App() {
  return (

    <>
      <div >
      <HomeLayoutHoc path="/" exact component={Temp}/>
      <HomeLayoutHoc path="/:type" exact component={Master}/>
      <RestaurantLayoutHoc path="/restaurant/:id" component={Temp}/>
      </div>
    </>
  );
}

export default App;
