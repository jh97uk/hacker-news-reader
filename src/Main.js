import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import ContentMain from './Views/ContentMain';
import ContentSidebar from './Views/ContentSidebar.js';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Button from '@material-ui/core/Button';

import ArrowBack from '@material-ui/icons/ArrowBack';

class Main extends Component{
    constructor(props){
        super(props);
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
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Hidden mdUp smDown={this.state.hideArticleView}><Button onClick={this.goBack}><ArrowBack style={{color:'white'}}/></Button></Hidden>
                    </Toolbar>
                </AppBar>
                <Grid container>
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
