import React, { useEffect } from "react";
import Header from "parts/Header";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetaildescription from "parts/PageDetaildescription";
import BookingForm from "parts/BookingForm";

import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { checkoutBooking } from "../store/actions/checkout";
import { fetchPage } from "../store/actions/page";

const DetailsPage = (props) => {
  useEffect(() => {
    document.title = "Details Page";
    window.scrollTo(0, 0);

    if (!props.page[props.match.params.id])
      props.fetchPage(
        `detail-page/${props.match.params.id}`,
        props.match.params.id
      );
  }, []);

  const { page, match } = props;

  if (!page[match.params.id]) return null;

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Detail", pageHref: "" },
  ];

  return (
    <>
      <Header {...props}></Header>
      <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
      <FeaturedImage data={page[match.params.id].imageId} />

      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetaildescription data={page[match.params.id]} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                ItemDetails={page[match.params.id]}
                startBooking={props.checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={page[match.params.id].activityId} />
      <Testimony data={page[match.params.id].testimonial} />

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
