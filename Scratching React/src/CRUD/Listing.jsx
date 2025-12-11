import axios from "axios";
import React, { useEffect, useState } from "react";

const Listing = () => {
  const [userData, setuserData] = useState([]);

  const fetchingData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/userData");
      console.log("User data uploaded successfully: ", res.data);
      setuserData(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchingData();
    console.log(userData);
  }, []);

  return (
    <>
      <h1>Listing</h1>

      <table className="table table-bordered">
        <thead className="table-success">
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listing;
