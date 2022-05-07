import React from "react";

export default function Acoes(){

    const [like, setLike] = React.useState(0);
    
    function likesPost(){
        setLike(1);
    }

    function unlikesPost(){
        setLike(0);
    }

    let heart = like === 0 ? <ion-icon name="heart-outline" onClick={likesPost}></ion-icon> : <ion-icon name="heart" class="liked" onClick={unlikesPost}></ion-icon>;
    
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