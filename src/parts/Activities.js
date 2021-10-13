import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

const Activities = ({ data }) => {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index1) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-${index1}-item-${index1}`}
              >
                <Fade bottom delay={300 * index1}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        classname="streched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default Activities;
