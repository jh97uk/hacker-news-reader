import React, {Component} from 'react';
import axios from 'axios';
import ArticleItem from '../Components/ArticleItem.js';

class ContentSidebar extends Component{
    constructor(props){
        super(props);
        this.state = {articles:[]}
        this.articleIds = [];
        this.containerRef = React.createRef();
        this.getTopStories = this.getTopStoryIds.bind(this);
        this.getTopStoryArticles = this.getTopStoryArticles.bind(this);
        this.whenScrolledToBottom = this.whenScrolledToBottom.bind(this);
        this.reachedBottom = false;
    }

    componentDidMount(){
        this.getTopStoryIds();
        console.log(this.containerRef.current);
        this.containerRef.current.addEventListener('scroll', function(){
        });
    }

    getTopStoryIds(){
        const self = this;
        axios.get('/topstories.json').then(function(response){
            const data = response.data;
            self.articleIds = data;
            self.getTopStoryArticles(self.articleIds)
        })
        
    }

    getTopStoryArticles(articleIds){
        const self = this;
        let articles = [];
        for(const id of articleIds){
            if(articleIds.indexOf(id) == 10){
                break;
            } else{
                axios.get('/item/'+id+".json").then(function(response){
                    articles.push(response.data);
                    self.setState({articles:articles, articlesUpToId:articleIds.indexOf(id)});
                });
            }
        }
    }

    whenScrolledToBottom(event){
        const self = this;
        const target = event.target;
        const isBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
        let articles = this.state.articles;
        if(isBottom){
            if(this.reachedBottom)
                return;
            this.reachedBottom = true;
            for(var i =self.state.articlesUpToId; i < self.state.articlesUpToId+10; i++){
                if(this.articleIds[i] === undefined){
                    break;
                }
                axios.get('/item/'+this.articleIds[i]+".json").then(function(response){
                    if(response.data == null) // If article is deleted skip past.
                    return;
                    articles.push(response.data);
                    self.setState({articles:articles});
                    if(self.state.articlesUpToId+10 == i){
                        self.setState({articlesUpToId:self.state.articlesUpToId+10});
                        self.reachedBottom = false;
                    }
                });
            }
        }
    }

    render(){
        return(
        <div 
            ref={this.containerRef} 
            onScroll={this.whenScrolledToBottom}
            style={{
                overflowY: 'scroll',
                height: 'calc(-84px + 100vh)',
                padding: 10}}>
            {this.state.articles.map((article, index)=>
                <ArticleItem 
                    key={index} 
                    article={article}
                    onSelected={this.props.onArticleSelected}/>
            )}
        </div>)
    }
}

export default ContentSidebar;