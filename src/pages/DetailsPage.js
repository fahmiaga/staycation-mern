import React, { useEffect } from "react";
import Header from "parts/Header";
import Fade from "react-reveal/Fade";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetaildescription from "parts/PageDetaildescription";
import ItemDetails from "jsons/itemDetails.json";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

const DetailsPage = (props) => {
  useEffect(() => {
    document.title = "Details Page";
    window.scrollTo(0, 0);
  }, []);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Detail", pageHref: "" },
  ];

  return (
    <>
      <Header {...props}></Header>
      <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      <FeaturedImage data={ItemDetails.imageUrls} />

      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetaildescription data={ItemDetails} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm ItemDetails={ItemDetails} />
            </Fade>
          </div>
        </div>
      </section>
      <Categories data={ItemDetails.categories} />
      <Testimony data={ItemDetails.testimonial} />

      <Footer />
    </>
  );
};

export default DetailsPage;
