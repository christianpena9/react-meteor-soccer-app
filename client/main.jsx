import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTabEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

injectTabEventPlugin();

Meteor.startup(() => {
    render((
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/new" component={New}/>
                <Route path="*" component={Lost}/>
            </Switch>
        </BrowserRouter>
    ), document.getElementById('render-target'));
});
