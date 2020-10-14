import React, {Component} from 'react';
import ArticleSummary from '../Components/ArticleSummary.js';
import axios from 'axios';
import CommentItem from '../Components/CommentItem.js';

class ContentMain extends Component{
    constructor(props){
        super(props);
        this.state = {article:{}, comments:[]};
        this.retrieveComments = this.retrieveComments.bind(this);
    }

    retrieveComments(commentIds){
        const self = this;
        let comments = [];
        if(commentIds === undefined)
            return;
        for(const commentId of commentIds){
            axios.get('/item/'+commentId+'.json').then(function(response){
                comments.push(response.data);
                if(commentId == commentIds[commentIds.length-1])
                    self.setState({comments:comments})
            });
        }
        
    }

    componentDidMount(){
        const self = this;
        if(this.props.match.params.articleId){
            axios.get('/item/'+this.props.match.params.articleId+'.json').then(function(response){
                self.setState({article:response.data});
                self.retrieveComments(response.data.kids);
            }).catch(function(error){
                console.log(error);
            })
        }else{

            
        }
    }

    render(){
        return(
        <div style={{maxHeight: 'calc(100vh - 64px)',    overflowY: 'scroll'}}>
            <ArticleSummary article={this.state.article}/>
            <div>
                {this.state.comments.map((comment, index)=>
                    <CommentItem key={index} comment={comment}/>
                )}
            </div>
        </div>)
    }
}

export default ContentMain;