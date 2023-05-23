import React from "react";
import { useParams } from "react-router-dom";

export default function SuppThanks() {
  const params = useParams();
  return (
    <>
      <div className="container bg-light rounded shadow text-dark p-5 my-3">
        <div className="row p-5">
          <h1 className="supp-text-main">Thanks you {params.name}</h1>
          <h3 className="supp-text-quote">
                “Many people say they want to help; fewer actually step up to do
                it. Thank you for being one of the few today and stepping up
                with your important donation.”
              </h3>
        </div>
      </div>
    </>
  );
}
