import React from 'react';
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ArticleItem(props){
    return(
        <Card style={{marginBottom:15}}>
            <CardContent>
                <Typography variant='h6' style={{width:"100%"}} style={{cursor:'pointer'}} onClick={()=>props.onSelected(props.article.id)}>{props.article.title}</Typography>
                <Typography color="textSecondary" gutterBottom style={{fontSize:12}}>{props.article.score} points | By {props.article.by} | {moment(new Date(props.article.time*1000)).fromNow()} | {props.article.descendants} comments</Typography>
            </CardContent>
        </Card>)
}

export default ArticleItem;