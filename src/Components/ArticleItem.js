import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

class ArticleItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Card style={{marginBottom:15}}>
            <CardContent>
                <Typography variant='h6' style={{width:"100%"}} style={{cursor:'pointer'}} onClick={()=>this.props.onSelected(this.props.article)}>{this.props.article.title}</Typography>
        <Typography color="textSecondary" gutterBottom style={{fontSize:12}}>{this.props.article.score} points | By {this.props.article.by} | {moment(new Date(this.props.article.time*1000)).fromNow()} | {this.props.article.descendants} comments</Typography>
            </CardContent>
        </Card>)
    }
}

export default ArticleItem;