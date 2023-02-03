import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import "./Tournaments.css";
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


const Tournaments = (props) => {
    const [tournaments, setTournaments] = useState([]);
    const [search, setSearch] = useState([tournaments])
    const [user, token] = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        fetchTournaments();
    }, [token])

    const fetchTournaments = async () => {
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/tournaments/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setTournaments(response.data);
          // console.log(response.data)
        } catch (error) {
          console.log(error.response.data);
        }
      };

    function handleClick (tournament){
        navigate('/tournament', {state : tournament})
    }

    function handleCreate (){
      navigate('/createtournament')
    }

    function setFilteredTournaments(search){
      let filteredTournaments = tournaments.filter(tournament => tournament.name === `${search}`)
      console.log(search)
      setTournaments(filteredTournaments)
    }

    // let filteredTournaments = tournaments.filter(tournament => tournament.name === 'PickleBrawl');
    // console.log(filteredTournaments)


    return ( 
        <div className='homecontainer'>

          <h1 className='tournamentstitle'>TOURNAMENTS</h1>

          <SearchBar setFilteredTournaments={setFilteredTournaments}/>

          

          <div className='tournamentthumbnails'>
            {tournaments &&
                tournaments.map((tournament) => (
                  <div className='tournament_thumbnail'>
                    <div onClick={() => handleClick(tournament)} key={tournament.id} >

                        <div><img src="GettyImages-1373009126-1200x779.jpg" width="200px"></img></div>
                        <div>{tournament.name}</div>

                    </div>
                  </div>
            ))}
          </div>

          <button onClick={() => handleCreate()} className='create_tourney'>CREATE TOURNEY</button> 

        </div> 
     );
}
 
export default Tournaments;