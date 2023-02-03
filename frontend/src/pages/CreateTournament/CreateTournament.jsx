import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './CreateTournament.css'

const CreateTournament = (props) => {
    const navigate = useNavigate();
    const [user, token] = useAuth();
    const [name, setName] = useState([]);
    const [start_date, setStartDate] = useState([]);
    const [end_date, setEndDate] = useState([]);
    const [format, setFormat] = useState([]);
    const player_count = 0;
    const address_id =  1;
    const userId = user.id;


    // function handleSubmit (e) {
    //     if (user.is_club_owner === false) {
    //     e.preventDefault();
    //     const tournament = {name, player_count, start_date, end_date, address_id, userId, format};
    //     fetch('http://127.0.0.1:8000/api/tournaments/', {
    //         method: 'POST',
    //         headers: { 
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + token,
    //         },
    //         body: JSON.stringify(tournament)
    //     })
    //     .then(() => navigate('/'))
    //     .catch((err) => console.log(err))
    //     }
    // }

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
        axios.post(`http://127.0.0.1:8000/api/tournaments/`, data, {
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
        <div className='createtourneyformcontainer'>
            <form className='createtourneyform' onSubmit= {handleSubmit}>

                <h1 className='createtournamenttitle'>CREATE A TOURNAMENT</h1>


                    <label className='createtournamentlabels'>What is the name of the tournament being registered? </label>
                    <input type = 'text' id = 'name' onChange={(e) => setName(e.target.value)}></input>



                    <label className='createtournamentlabels'>Start Date: </label>
                    <input type = 'date' id = 'startdate' onChange={(e) => setStartDate(e.target.value)}></input>


                    <label className='createtournamentlabels'>end Date: </label>
                    <input type = 'date' id = 'enddate' onChange={(e) => setEndDate(e.target.value)}></input>


                    <label className='createtournamentlabels'>What is the tournament format/rules? </label>
                    <input className='createtourneyinput' type = 'text' id = 'format' onChange={(e) => setFormat(e.target.value)}></input>

                <button className='createtournamentregisterbutton' type='submit'>Register</button>
            </form>
        </div>
     );
}
 
export default CreateTournament;