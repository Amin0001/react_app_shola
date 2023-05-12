import React from "react";
import { useEffect } from "react";

function ErrorMessage() {
  useEffect(() => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="err-message" id="about">
      <h1>Oh Sorry, DIZA loves you.</h1>
      <h6>
        It seems you missed something and we couldn't fetch what you are looking
        for.
      </h6>
    </div>
  );
}

export default ErrorMessage;
