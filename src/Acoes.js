import React from "react";

export default function Acoes(props){
    
    function likesPostaux(){
        props.likesPost();
    }

    function unlikesPostaux(){
        props.unlikesPost();
    }

    let heart = props.likeStatus === "0" ? <ion-icon name="heart-outline" onClick={likesPostaux}></ion-icon> : <ion-icon name="heart" class="liked" onClick={unlikesPostaux}></ion-icon>;
    
    return (
        <div class="acoes">
            <div>
                {heart}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}