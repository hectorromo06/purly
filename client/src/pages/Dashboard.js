import React from "react";
// import {Link} from
import { QUERY_ME } from "../../src/utils/queries";
import { useQuery } from "@apollo/client";

export default function Dashboard() {
  const { data, loading } = useQuery(QUERY_ME);

  let allUsers;

  if (!loading) {
    allUsers = data.QUERY_ME;
  } else {
    return <h2>loading...</h2>;
  }

  const renderAllUsers = (users, index) => {
    return users.card.map((card, index) => {
      return (
        <Container className="col-auto">
          <Card
            style={{ width: "18rem", height: "30rem" }}
            key={card._id}
            className="shadow-lg m-1 mb-5 text-center"
          >
            <Card.Img variant="top" src={card.image} alt="context img" />
            <Card.Body>
              <Card.Title className="cardUsername pb-2">
                {users.username}
              </Card.Title>
              <p>{card.description}</p>
              <p className="mb-0">Level</p>{" "}
              <h1 className="mb-0 test">${card.level}</h1>
              <button className="mt-4 btn btn-success">
                <Link className="text-decoration-none text-white" to="/pattern">
                  Pattern
                </Link>
              </button>
            </Card.Body>
          </Card>
        </Container>
      );
    });
  };

  return (
    <>
      <div className="container d-flex flex-wrap">
        {allUsers.map(renderAllUsers)}
      </div>
      <Footer/>
    </>
  );
}
