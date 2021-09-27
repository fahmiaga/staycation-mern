import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";

import "./index.scss";

const Breadcrumb = (props) => {
  const className = ["breadcrumb", props.className];
  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, i) => {
          return (
            <li
              key={`breadcrumb-${i}`}
              className={`breadcrumb-item${
                i === props.data.length - 1 ? " active" : ""
              }`}
            >
              {i === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
export default Breadcrumb;
