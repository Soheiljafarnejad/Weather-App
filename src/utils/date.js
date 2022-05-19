const dateFormat = (dateValue, options) => {
  return new Date(dateValue).toLocaleString("en-US", options);
};

export default dateFormat;
