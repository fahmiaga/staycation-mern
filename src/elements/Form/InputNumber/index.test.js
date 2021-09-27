import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

const TestInput = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  return (
    <InputNumber max={30} onChange={handleChange} name="value" value={input} />
  );
};

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

test("should able top change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("should not able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});

export default TestInput;
