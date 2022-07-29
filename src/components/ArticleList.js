import React from "react";
import Article from "./Article";


export default function ArticleList({ posts }) {
    return(
    <main>
        {
            posts.map ((item) => {
            return(
            < React.Fragment key = {item.id}>
            <Article title ={item.title} preview ={item.preview} date ={item.date} />
            </ React.Fragment>
            )
        })
    }
    
    </main>
    )
}