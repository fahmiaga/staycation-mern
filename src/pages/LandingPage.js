import React from "react";
import Header from "parts/Header";
import landingPage from "jsons/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

function LandingPage(props) {
  const refMostPicked = React.createRef();

  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
    </>
  );
}

export default LandingPage;
