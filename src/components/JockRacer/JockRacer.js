import React, { Component } from 'react';
import classes from './JockRacer.css';
import ProgressBar from 'react-progressbar';

export class JockRacer extends Component {

    state = {
        interval: Math.floor(Math.random() * 500),
        progress: 0
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 1 });
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : "";

    }
    componentDidMount = () => {
        this.interval = setInterval(this.timer, this.state.interval);

    }
    // <img src={this.props.jockey} alt="Horse jocky"/> <ProgressBar completed={this.state.progress} color={this.props.color}
    render() {
        return (
            <div>

            </div>
        );
    }

}