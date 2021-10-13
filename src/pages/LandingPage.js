import React, { useEffect } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
// import Fade from "react-reveal/Fade";
import { fetchPage } from "store/actions/page";
import { connect } from "react-redux";

function LandingPage(props) {
  const refMostPicked = React.createRef();

  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
    // if (!props.page.landingPage)
    props.fetchPage(`/landing-page`, "landingPage");
  }, []);

  const { page } = props;

  if (!page.hasOwnProperty("landingPage")) return null;
  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={page.landingPage.mostPicked}
      />
      <Categories data={page.landingPage.category} />
      <Testimony data={page.landingPage.testimonial} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
