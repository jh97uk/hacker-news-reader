import React from 'react';
import moment from 'moment'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function ArticleSummary(props){
    return(
        <Paper style={{padding:20, backgroundColor:'#f4f4f4'}} square>
            {props.article ? 
                <div>
                    <a href={props.article.url} style={{color:'black', textDecoration:'none'}}><Typography variant="h5">{props.article.title}</Typography></a>
                    <Typography color="textSecondary" gutterBottom style={{fontSize:12}}>{props.article.score} points | By {props.article.by} | {moment(new Date(props.article.time*1000)).fromNow()} | {props.article.descendants} comments</Typography>
                </div>
            : 'Select an article'}
        </Paper>)
}

export default ArticleSummary;