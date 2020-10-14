import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ContentMain from './Views/ContentMain';
import ContentSidebar from './Views/ContentSidebar.js';

import axios from 'axios';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[],
            selectedArticle:undefined,
        }
        this.onArticleSelected = this.onArticleSelected.bind(this);
    }

    onArticleSelected(articleId){
        this.props.history.push('/'+articleId);
    }

    render(){
        return(
            <div style={{display: "flex",
            flexFlow: "column",
            height: "100vh"}}>
                <AppBar position="static">
                    <Toolbar>
                    </Toolbar>
                </AppBar>
                <Grid container style={{flex: "1 1 auto"}}>
                    <Paper component={Grid} item sm={4} md={3}>
                        <ContentSidebar onArticleSelected={this.onArticleSelected}/>
                    </Paper>
                    <Grid item sm={8} md={9}>
                        <Route exact path={this.props.match.path}  component={(props)=><ContentMain {...props}/>} />
                        <Route exact path="/:articleId"  component={(props)=><ContentMain {...props}/>} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Main;
