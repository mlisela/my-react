import React, {Component} from 'react';
import classes from './Field.css';
import {JockRacer} from '../JockRacer';

export const Field = (props) => {
    return(
        <div className="Jocky">
            <JockRacer  
                avatar="https://avatars1.githubusercontent.com/u/3757315?v=4"
                color="blue"/>
        </div>
    );
}