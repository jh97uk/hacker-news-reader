import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'

class ArticleSummary extends Component{
    constructor(props){
        super(props);
        this.state = {commentValue:''};
        this.onCommentFieldChanged = this.onCommentFieldChanged.bind(this);
    }
    
    onCommentFieldChanged(event){

    }

    render(){
        return(
        <Paper style={{padding:20, backgroundColor:'#f4f4f4'}} square>
            {this.props.article ? 
                <div>
                    <a href={this.props.article.url} style={{color:'black', textDecoration:'none'}}><Typography variant="h5">{this.props.article.title}</Typography></a>
                    <Typography color="textSecondary" gutterBottom style={{fontSize:12}}>{this.props.article.score} points | By {this.props.article.by} | {moment(new Date(this.props.article.time*1000)).fromNow()} | {this.props.article.descendants} comments</Typography>
                </div>
            : 'Select an article'}
        </Paper>)
    }
}

export default ArticleSummary;