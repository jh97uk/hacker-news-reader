import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CommentItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Paper square>
            <CardContent>
                <Typography color="textSecondary" gutterBottom style={{fontSize:12, width:'100%'}}>By {this.props.comment.by ? this.props.comment.by : "[deleted]"}</Typography>
                <p dangerouslySetInnerHTML={{__html:(this.props.comment.text ? this.props.comment.text : "[deleted]")}}></p>
            </CardContent>
        </Paper>)
    }
}

export default CommentItem;