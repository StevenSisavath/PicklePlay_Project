import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateTournament.css'

const UpdateTournament = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, token] = useAuth();
    const [name, setName] = useState([]);
    const [start_date, setStartDate] = useState([]);
    const [end_date, setEndDate] = useState([]);
    const [format, setFormat] = useState([]);
    const player_count = 0;
    const address_id =  1;
    const userId = user.id;
    console.log(user.is_club_owner)
    console.log(location.state.id)
    console.log(userId)

    function handleSubmit (e) {
        e.preventDefault();
        const data = {
            "name": name, 
            "player_count": player_count, 
            "start_date": start_date, 
            "end_date": end_date, 
            "address_id": address_id, 
            "user": userId,
            "format": format
        }
        axios.put(`http://127.0.0.1:8000/api/tournaments/${location.state.id}/`, data, {
            headers: {
                    Authorization: "Bearer " + token,
                  }
                }
            )
        .then((data) => {
            console.log(data);
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return ( 
        // <div>
        //     <form onSubmit= {handleSubmit}>
        //         <label>What name would you like to change your tournament to?</label>
        //         <input type = 'text' id = 'name' onChange={(e) => setName(e.target.value)}></input>
        //         <label>Start Date: </label>
        //         <input type = 'date' id = 'startdate' onChange={(e) => setStartDate(e.target.value)}></input>
        //         <label>end Date: </label>
        //         <input type = 'date' id = 'enddate' onChange={(e) => setEndDate(e.target.value)}></input>
        //         <button type='submit'>Update</button>
        //     </form>
        // </div>

        <div className='createtourneyformcontainer'>
            <form className='createtourneyform' onSubmit= {handleSubmit}>

                <h1 className='createtournamenttitle'>UPDATE A TOURNAMENT</h1>


                    <label className='createtournamentlabels'>What is the new name of the Tournament?</label>
                    <input type = 'text' id = 'name' onChange={(e) => setName(e.target.value)}></input>



                    <label className='createtournamentlabels'>New Start Date: </label>
                    <input type = 'date' id = 'startdate' onChange={(e) => setStartDate(e.target.value)}></input>


                    <label className='createtournamentlabels'>New End Date: </label>
                    <input type = 'date' id = 'enddate' onChange={(e) => setEndDate(e.target.value)}></input>


                    <label className='createtournamentlabels'>What are the new rules/format for the tournament? </label>
                    <input className='createtourneyinput' type = 'text' id = 'format' onChange={(e) => setFormat(e.target.value)}></input>

                <button className='createtournamentregisterbutton' type='submit'>Update</button>
            </form>
        </div>
     );
}
 
export default UpdateTournament;