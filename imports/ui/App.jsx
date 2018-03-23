import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {

    constructor(props) {
        super(props);

        // setting up the state
        this.state = {
            players: []
        };
    }

    componentWillMount() {
        this.setState({
            players: [
                {
                    _id: 1,
                    name: "Christian Pena",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 3,
                    blockingAbilities: 2,
                    gameStrategy: 3,
                    playmakingRisks: 2,
                },
                {
                    _id: 2,
                    name: "Jonathan Pena",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 3,
                    blockingAbilities: 2,
                    gameStrategy: 3,
                    playmakingRisks: 2,
                },
                {
                    _id: 3,
                    name: "Samuel Pena",
                    ballManipulation: 2,
                    kickingAbilities: 3,
                    passingAbilities: 1,
                    duelTackling: 1,
                    fieldCoverage: 3,
                    blockingAbilities: 2,
                    gameStrategy: 3,
                    playmakingRisks: 2,
                }
            ]
        });
    } // End: componentWillMount

    renderPlayers() {
        return this.state.players.map((player) => <TeamList key={player._id} player={player} />);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar
                    title="Soccer Application"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}/>
                    <div className="row">
                        <div className="col s12 m7"><Player /></div>
                        <div className="col s12 m5">
                            <Divider />
                                <h2>Team List</h2>
                                <List>
                                    {this.renderPlayers()}
                                </List>
                            <Divider />
                        </div>
                        <div className="col s12 m5"><TeamStats /></div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
