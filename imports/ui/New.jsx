import React, { Component } from 'react';

export default class Example extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <h3>Add a new player</h3>

                    {/* Name and Team inputs below */}
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" type="text" placeholder="Name" ref="name"/>
                        </div>
                        <div className="input-field col s6">
                            <input className="validate" type="text" placeholder="Team" ref="team"/>
                        </div>
                    </div>

                    {/* Players Ability below */}
                    <div className="row">
                        <div className="col s6">
                            <h5>Ball Manipulation</h5>
                            <select className="browser-default" ref="ballManipulation">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Kicking Abilities</h5>
                            <select className="browser-default" ref="kickingAbilities">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Passing Abilities</h5>
                            <select className="browser-default" ref="passingAbilities">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Duel Tackling</h5>
                            <select className="browser-default" ref="duelTackling">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Field Coverage</h5>
                            <select className="browser-default" ref="fieldCoverage">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Blocking Abilities</h5>
                            <select className="browser-default" ref="blockingAbilities">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <h5>Game Strategy</h5>
                            <select className="browser-default" ref="gameStrategy">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h5>Play Making Risks</h5>
                            <select className="browser-default" ref="playmakingRisks">
                                <option value="0">0 - Hasn't demonstrated skills</option>
                                <option value="1">1 - Needs improvements</option>
                                <option value="2">2 - Skill acquired</option>
                                <option value="3">3 - Great skills/could teach</option>
                            </select>
                        </div>
                    </div>

                    {/* Notes and Button elements below */}
                    <div className="row">
                        <div className="input-field col s6">
                            <textarea className="materialize-textarea" type="text" placeholder="Notes" ref="notes"></textarea>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}
