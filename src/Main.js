import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import ContentMain from './Views/ContentMain';
import ContentSidebar from './Views/ContentSidebar.js';

import axios from 'axios';

class Main extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            articles:[],
            selectedArticle:undefined,
            hideArticleView:(this.props.location.pathname == "/")
        }
        this.onArticleSelected = this.onArticleSelected.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onArticleSelected(articleId){
        this.props.history.push('/'+articleId);
        this.setState({hideArticleView:false})
    }

    goBack(){
        this.props.history.push('/');
        this.setState({hideArticleView:true})
    }
    
    render(){
        console.log(this.state.hideArticleView)
        return(
            <div style={{display: "flex",
            flexFlow: "column",
            height: "100vh"}}>
                <AppBar position="static">
                    <Toolbar>
                        <Hidden mdUp smDown={this.state.hideArticleView}><Button onClick={this.goBack}>Back</Button></Hidden>
                    </Toolbar>
                </AppBar>
                <Grid container style={{flex: "1 1 auto"}}>
                    <Hidden smDown={!this.state.hideArticleView}>
                        <Paper component={Grid} item sm={12} md={3}>
                            <ContentSidebar onArticleSelected={this.onArticleSelected}/>
                        </Paper>
                    </Hidden>
                    <Hidden smDown={this.state.hideArticleView}>
                    <Grid item sm={12} md={9}>
                        <Route exact path={this.props.match.path}  component={(props)=><ContentMain {...props}/>} />
                        <Route exact path="/:articleId"  component={(props)=><ContentMain {...props}/>} />
                    </Grid>
                    </Hidden>
                </Grid>
            </div>
        );
    }
}

export default Main;
