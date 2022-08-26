import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>
          oops! it's a dead end! this is a demonstration of a purposeful error
          page. this error will appear every time the user navigates away from
          an established page. now click the home button and find a tasty drink!
        </h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}
