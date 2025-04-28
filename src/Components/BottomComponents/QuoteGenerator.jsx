import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export default function QuoteGenerator() {
  // All use States
  const [quotes, setQuotes] = useState(
    "Once you Start you will end"
  );

  //All functions
  async function changeQuote() {
    try {
      const response = await axios.post("http://localhost:3000/quoteapi/");
      updateQuoteUI(response.data.content);
    } catch (error) {
      updateQuoteUI(error);
    }
  }

  function updateQuoteUI(quoteRecieve) {
    setQuotes(quoteRecieve);
  } // useEffect to set interval for changing quotes

  //All UseEffect

  useEffect(() => {
    const interval = setInterval(() => {
      changeQuote();
    }, 300000); // 5 minutes // Initial quote fetch

    changeQuote(); // Cleanup interval on component unmount

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="text-xl font-bold text-center">{quotes}</h3>
    </>
  );
}

//edge cases
// 1. backup API
// 2. Too long message
