import React from 'react';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CommentItem(props){
    return <Paper square>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{fontSize:12, width:'100%'}}>By {props.comment.by ? props.comment.by : "[deleted]"}</Typography>
                    <p dangerouslySetInnerHTML={{__html:(props.comment.text ? props.comment.text : "[deleted]")}}></p>
                </CardContent>
            </Paper>
}

export default CommentItem