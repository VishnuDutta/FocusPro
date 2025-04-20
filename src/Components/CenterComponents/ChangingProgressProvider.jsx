import React, { useState, useEffect } from "react";

const ChangingProgressProvider = ({ interval = 1000, values, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, interval); // Cleanup interval on component unmount

    return () => clearInterval(timer);
  }, [interval, values.length]);

  return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
