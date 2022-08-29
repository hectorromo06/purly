import React from "react";
import "./Login.js";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../../src/utils/queries";
import { useQuery } from "@apollo/client";

function UserDashboard() {
console.log()
  const { data, loading } = useQuery(QUERY_ME);
  const me = data?.me || {}
  console.log(me)

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <body className="wrapper">
      <div className="container">
        <div>
          <h1 className="title">Your Creative Dashboard</h1>
        </div>
        <button className="newpattern-btn"> 
            <Link to = {`/addpattern`} className="subtitle">Make A New Pattern</Link>
        </button>
        <div>
            {me.patterns.map(( pattern) =>(
                <div>
                    <Link to = {`/pattern/${pattern._id}`}>
                        <h2>{pattern.name}</h2>
                    </Link>
                    <p>Created On {pattern.createdAt}</p>
                    <h3> Description </h3>
                    <p>{pattern.description}</p>
                </div>
            ))}
        </div>
        
      </div>
    </body>
  );
}

export default UserDashboard;
