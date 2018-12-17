import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Redirect, Link, Prompt  } from 'react-router-dom';
import Menu from './components/Menu';
import routes, {topics} from './routes'
import Products from './components/Products';
import Login from './components/Login';

class App extends Component {

    
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                        <Route path="/" exact component={Home} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/login" component={({match, location}) => <Login match={match} location={location}/>} />
                </div>
            </Router>


        );
    }

}

function Home({location, match}){
    console.log(location)
    console.log(match)
    var formIsHalfFilledOut=true;
    return (
        <div>
            <h3>Home</h3>
            <Prompt
                when={formIsHalfFilledOut}
                message={location => (`Are you sure you want to navigate to ${location.pathname}?`)}
            />
        </div>
        
    )
}

function Topics({match}){

    var listTopic = topics.map(({name, id, description})=>{
        return (
            <li key={id}>
                <Link to={`${match.url}/${id}`}>{name}</Link>
                <p>{description}</p>
            </li>
        )
    })

    return (
        <div>
            <h3>Topics</h3>
            <ul>
                {listTopic}
            </ul>
            <div>
                <Route path={`${match.path}/:topicId`} component={ ({match}) => <Topic match={match}/>}/>
            </div>
        </div>
        
    )
}



class Topic extends Component{
    render(){
        var match=this.props.match;
        console.log(match)
        var topic= topics.find(({id})=>id===match.params.topicId);
        var listResource=  topic.resources.map(({name, id, description, url})=>{
            return (
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                    <p>{description}</p>
                </li>
            )
        })
        return (
            <div>
                <h3>{topic.name}</h3>
                <ul>
                    {listResource}
                </ul>
                <div>
                    <Route path={`${match.path}/:resourceId`} component={Resource}/>
                </div>
            </div>
        )
    }
}

function Resource({match}){
    console.log(match)
    const resource = topics.find((item)=>{
            return item.id===match.params.topicId
        })
        .resources.find((item)=>{
            return item.id===match.params.resourceId
        });
    return (
        <div>
            <h4>{resource.name}</h4>
            <p>{resource.description}</p>
            <a href={resource.url}>More Info</a>
            
        </div>
    )
}

export default App;
