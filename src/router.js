import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Common from './common'
import HomePage from './view/HomePage/index'
import Market from  './view/Market/index'
import Monitor from  './view/Monitor/index'
import singleAnalysis from './view/FactorAnalysis/SingleAnalysis'
import groupAnalysis from './view/FactorAnalysis/GroupAnalysis'
import groupTrack from  './view/GroupManagent/groupTrack'

export default class ERouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/" render={()=>
                        <Common>
                            <Switch>
                                <Route path="/home" component={HomePage}/>
                                <Route path='/market' component={Market} />
                                <Route path='/monitor' component={Monitor} />
                                <Route path='/singleAnalysis/single' component={singleAnalysis} />
                                <Route path='/singleAnalysis/group' component={groupAnalysis} />
                                <Route path='/managent/choiceness' component={groupTrack} />
                            </Switch>
                        </Common>
                    } />
                </App>
            </HashRouter>
        );
    }
}
