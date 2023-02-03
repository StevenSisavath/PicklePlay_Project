import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Tournaments from "../../components/Tournaments/Tournaments";
import "./HomePage.css"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  // TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  

  // const fetchCars = async () => {
  //   try {
  //     let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     setCars(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };


  // useEffect(() => {
  //   fetchCars();
  //   console.log(user)
  // }, [token]);

  // console.log(user)
  
  return (
    <div className='homepagebody'>
      
      <Tournaments/>
    </div>
  );
};

export default HomePage;
