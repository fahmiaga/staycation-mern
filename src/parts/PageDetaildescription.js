import React from "react";
import ReactHtmlParser from "react-html-parser";

const PageDetaildescription = ({ data }) => {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "tidak ada feature"
          : data.featureId.map((feature, i) => {
              return (
                <div
                  className="col-3"
                  key={`feature-${i}`}
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                  />
                  <span>{feature.qty}</span>
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default PageDetaildescription;
