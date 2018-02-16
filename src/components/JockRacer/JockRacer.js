import React, { Component } from 'react';
import classes from './JockRacer.css';
import ProgressBar from 'react-progressbar';


export class JockRacer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        interval: Math.floor(Math.random() * 100) + 48,
        progress: 0,
        count: 0
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 1 });
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : 0;
        if(this.state.progress > 99 && this.state.count < 1){
            //this.state.count ++;
            this.setState({count: this.state.count + 1});
            for(let i = 0; i < 1; i++){
                alert("In place number :" + this.state.count + " - " + this.props.login);
            }
            //alert("The winner is :" + this.props.login);
        }

    }
    componentDidMount = () => {
        this.interval = setInterval(this.timer, this.state.interval);

    }

    render() {
        return (
            <div className="Jocky">
                <img className="img" src={this.props.avatar} alt="Horse jocky"/>
                <h3 className="h3">{this.props.login}</h3>
                 <ProgressBar finite="true" progress={this.state.progress} className="progressBar" completed={this.state.progress} color={this.props.color} />
            </div>
        );
    }

}