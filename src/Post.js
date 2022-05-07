import Topo from "./Topo";
import Fundo from "./Fundo";
import React from "react";

export default function Post(props){
    
    const [like, setLike] = React.useState("0");
    
    function likesPost(){
        setLike("1");
    }

    function unlikesPost(){
        setLike("0");
    } 
    
    return(
        <div class="post">
            <Topo perfilImage={props.perfilImage} perfilName={props.perfilName}/>
            <div class="conteudo"><img src={props.postImage} onClick={likesPost}/></div>
            <Fundo likedImage={props.likedImage} whoLiked={props.whoLiked} likes={props.likes} likeStatus={like} likesPost={likesPost} unlikesPost={unlikesPost}/>
        </div>
    )
}