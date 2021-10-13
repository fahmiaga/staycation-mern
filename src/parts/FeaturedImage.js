import React from "react";
import Fade from "react-reveal/Fade";

const FeaturedImage = ({ data }) => {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, i) => {
          return (
            <div
              key={`featuredImage-${i}`}
              className={`item ${i > 0 ? "column-5" : "column-7"} ${
                i > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade bottom delay={300 * i}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                      alt={item.id}
                      className="img-cover"
                    />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedImage;
