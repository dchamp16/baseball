import React from "react";

const NewsCard = () => {
  const cardSize = {
    width: "15rem",
  };
  const cardPosition = {
    display: "flex",
    gap: "1%",
    flexWrap: "wrap",
  };
  return (
    <div className="test" style={cardPosition}>
      <div className="card" style={cardSize}>
        <img
          src="https://images.unsplash.com/photo-1529852978034-f5a227b92f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card" style={cardSize}>
        <img
          src="https://images.unsplash.com/photo-1529852978034-f5a227b92f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card" style={cardSize}>
        <img
          src="https://images.unsplash.com/photo-1529852978034-f5a227b92f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card" style={cardSize}>
        <img
          src="https://images.unsplash.com/photo-1529852978034-f5a227b92f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
