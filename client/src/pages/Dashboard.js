import React from "react";
import "./Login.js";
// import { Link } from "react-router-dom";
import { QUERY_ME } from "../../src/utils/queries";
import { useQuery } from "@apollo/client";

export default function UserDashboard() {
  const { data, loading } = useQuery(QUERY_ME);

  let cardInfo;

  let username;

  if (!loading) {
    username = data.QUERY_ME.username;
    cardInfo = data.QUERY_ME.card;
  } else {
    return <h2>loading...</h2>;
  }

  return (
    <>
      <div>
        <div className="cardContainer text-center">
          <h1 className="">Your Creative Dasboard</h1>
        </div>

        <div className="d-flex flex-wrap mt-5 container">
          {cardInfo.map((card, index) => {
            return (
              <div className="col-auto">
                <div
                  style={{ width: "18rem", height: "30rem" }}
                  key={index}
                  className="shadow-lg m-1 mb-5 text-center"
                >
                  {/* <div.Img variant="top" src={card.image} /> */}

                  <body>
                    <div className="cardUsername pb-2">
                      {username}
                    </div>
                    <p>{card.description}</p>
                    <p>{card.email}</p>
                    <p>{card.patterns}</p>
                  </body>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

