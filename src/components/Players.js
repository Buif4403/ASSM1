import React from 'react'
import { Players } from '../shared/ListOfPlayers'
import { useState } from 'react'
export default function Player() {
    const [player, setPlayer] = useState([])
    return (
        <div className='Container'>
            {Players.map((player) => (
                <div className='colum'key={player.id}>
                    <div className='card'>
                        <img src={player.img} alt=''/>
                        <h3>{player.name}</h3>
                        <p className='title'></p>
                        <p>
                        <button onClick={()=>{setPlayer(player)}}>
                        <a style={{color: 'black'} } href='#popup1' id='openPopUp'>Detail</a>
                        </button>
                        </p>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={player.img}/>
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}