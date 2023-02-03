import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UpdateTournament from '../UpdateTournament/UpdateTournament';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './TournamentPage.css'


const TournamentPage = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [playerCount, setPlayerCount] = useState()
    const [players, setPlayers] = useState()
    const [user, token] = useAuth();

    console.log(location.state)

    function handleClick (){
        setPlayerCount(location.state.player_count + 1)
        navigate('/FinalCheckout', {state: location.state})
    }

    function navigateUpdate (){
        setPlayerCount(location.state.player_count + 1)
        console.log(playerCount)
        navigate('/updatetournament', {state: location.state})
    }

    const fetchPlayers = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/players/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          let filteredPlayers = response.data.filter((player) => player.tournament.id === location.state.id)
          setPlayers(filteredPlayers);
          console.log(filteredPlayers)
        } catch (error) {
          console.log(error.response.data);
        }
      };

    

    useEffect(() => {
        fetchPlayers()
      }, []);


    return (  
        <div className='tournamentpagecontainer'>
            <div className='tournamentdetails'>

                <h1 className='tournamentnametitle'>{location.state.name}</h1>

                <div className='registerupdatepicturecontainer'>
                    <img src="GettyImages-1373009126-1200x779.jpg" width="400px"></img>
                    <div className='registerupdatecontainer'>
                        {/* <h3 className='playersregistered'>Number of Players Registered: {length}</h3> */}
                        <button className='registerupdatebuttons' onClick={() => handleClick()}>Register</button>
                        <button className='registerupdatebuttons' onClick={() => navigateUpdate()}>Update</button>
                    </div>
                </div>

                <div className='line'></div>

                <h2 className='playersregisteredtitle'>Players Registered for This Tournament</h2>
                <div className="FilteredSearches">
                    <table>
                        <thead>
                            <tr className='TableHeaders'>
                                <td>NAME</td>
                                <td>CONTACT</td>
                                <td>RATING</td>
                                <td>GENDER</td>
                            </tr>
                        </thead>
                        <tbody >
                            {players &&
                                players.map((player, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{player.user.last_name}, {player.user.first_name}</td>
                                        <td>{player.user.email}</td>
                                        <td>{player.user.rating}</td>
                                        <td>{player.user.gender}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <h2 className='playersregisteredtitle'>Tournament Format</h2>
                <div className='tournamentformat'>{location.state.format}</div>

                <h2 className='playersregisteredtitle'>Tournament Days</h2>
                <div className='tournamentformat'>Starting Date: {location.state.start_date}</div>
                <div className='tournamentformat'>Ending Date: {location.state.end_date}</div>

                <h2 className='playersregisteredtitle'>Location</h2>
                <div className='tournamentformat'>{location.state.address.house_number} {location.state.address.street_name} {location.state.address.street_type}</div>
                <div className='tournamentformat'>{location.state.address.city}, {location.state.address.state} {location.state.address.zip_code}</div>


            </div>
        </div>
    );
}
 
export default TournamentPage;