import React from "react";

const FormatNumber = ({ number }) => (
  <span>{new Intl.NumberFormat().format(number)}</span>
);

export default FormatNumber;
