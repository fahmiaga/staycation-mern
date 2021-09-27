import Breadcrumb from "elements/Breadcrumb";
import React, { useState } from "react";
// import InputNumber from "elements/Form/InputNumber";
// import { InputDate } from "elements/Form";

const Testing = () => {
  // const [Test, setTest] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // });
  // console.log("test =>", Test);
  // const handleChange = (e) => {
  //   setTest({
  //     ...Test,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          {/* <InputNumber
            max={30}
            // suffix=" night"
            onChange={handleChange}
            name="value"
            value={Test}
          /> */}
          <Breadcrumb
            data={breadcrumbList}
            // max={30}
            // suffix=" night"
            // onChange={handleChange}
            // name="value"
            // value={Test}
          />
        </div>
      </div>
    </div>
  );
};

export default Testing;
