import React, { Component } from 'react';
import classes from './Field.css';
import { JockRacer } from '../JockRacer';
//import teamJson from '../../team.json';

export const Field = (props) => {

    // myCallback = (dataFromChild) => {
    // }

    if (props.startGame) {

        const MAX_PLAYERS = 5;  
        let avatarIndexArr = [];
        while(avatarIndexArr.length < MAX_PLAYERS){
            const randomNumber = Math.floor(Math.random() * 30);
            if(avatarIndexArr.indexOf(randomNumber) > -1){
                continue;     
            }
            avatarIndexArr.push(randomNumber);
        }

        let teamJson = JSON.parse(JSON.stringify(require("../../team.json")));

        let data = [
                {
                    avatar_url: teamJson[0].avatar_url,
                    login:teamJson[avatarIndexArr[0]].login,
                    color: "#800000"
                },
                {
                    avatar_url: teamJson[avatarIndexArr[1]].avatar_url,
                    login:teamJson[avatarIndexArr[1]].login,
                    color: "#FF0000"
                },
                {
                    avatar_url: teamJson[avatarIndexArr[2]].avatar_url,
                    login:teamJson[avatarIndexArr[2]].login,
                    color: "#FFA500"
                },
                {
                    avatar_url: teamJson[avatarIndexArr[3]].avatar_url,
                    login:teamJson[avatarIndexArr[3]].login,
                    color: "#FFFA00"
                },
                {
                    avatar_url: teamJson[avatarIndexArr[4]].avatar_url,
                    login:teamJson[avatarIndexArr[4]].login,
                    color: "#FFFA00"
                }
            ];
            //dataArray = Object.values(teamJson);
        
        console.log("Data Array",data);
        return (
            <div className="Jocky">
                {
                    data.map(racer => {
                        return (
                            <JockRacer
                                avatar={racer.avatar_url}
                                login={racer.login}
                                color={racer.color} />
                        );
                    })

                }

            </div>
        );
       
    } else {
        return (
            <h1>Start the race by clicking the start race button</h1>
        );
    }
}