import React from "react";
import Article from './Article'

function ArticleList(articles){
    const ArticleComp = articles.posts.map((item)=>{
        return(
            <Article key={item.id} date={item.date} title={item.title} preview={item.preview}/>
        )
    })
    return(
        <main>
            {ArticleComp}
        </main>
    )
}

export default ArticleList