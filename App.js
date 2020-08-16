import React, {useState, useEffect} from 'react';
import Golfers from './components/Golfers'
import axios from 'axios'
import './App.css';

function App() {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
      axios.get("https://api.sportsdata.io/api/golf/json/Leaderboard/393?key=0377d20fa0f34f47a642ff0d612ef434").then(res=>{
         setPlayers(res.data.Players)
          })
      .catch(err=>{
          console.log("uh oh")
      })
  },[])

  
  return (
    <div className="App">
      <header className="header">
       <img src="https://www.rickrungood.com/wp-content/uploads/2020/05/RickRunGood-Logo.png" alt="logo"/>
       <button>Menu</button>
      </header>
      <div className="filters">
        <h2>Sort by:</h2>
        <li>Name</li>
        <li>Position</li>
        <li>fPts</li>
        <li>SG OTT</li>
        <li>SG APP</li>
        <li>SG ARG</li>
        <li>SG PUT</li>
        <li>SG T2G</li>
        <li>SG TOT</li>
        <input type="text"/>
      </div>
      <div className="myLeaderboard">
        <h3>My Leaderboard</h3>
        { players.map(player=>{
      return    <Golfers name={player.Name} position={player.Rank} fpts={player.FantasyPoints} score = {player.TotalScore} />
}) }
        </div>
<div className="cards">   { players.map(player=>{
      return    <Golfers name={player.Name} position={player.Rank} fpts={player.FantasyPoints} score = {player.TotalScore} />
}) }</div>
<footer>
  <a href="https://www.rickrungood.com">Home</a><a href="https://twitter.com/RickRunGood">Twitter</a>
</footer>
    </div>
  );
}

export default App;
