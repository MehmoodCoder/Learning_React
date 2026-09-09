import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        fetch("https://api.quotable.io/random")
          .then((res) => res.json())
          .then((fallbackData) => {
            setQuote(fallbackData.content);
            setAuthor(fallbackData.author);
            setLoading(false);
          })
          .catch(() => {
            setQuote("Continuous learning is the key to unlocking potential.");
            setAuthor("GrowthLift Mentor");
            setLoading(false);
          });
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      <h3>Random Quote (useEffect Fetch)</h3>
      {loading ? (
        <p className="loading-text">Loading quote...</p>
      ) : (
        <div className="quote-content">
          <p className="quote-text">"{quote}"</p>
          <p className="quote-author">- {author}</p>
        </div>
      )}
      <button className="quote-btn" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
