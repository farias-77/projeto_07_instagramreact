import Acoes from "./Acoes";

export default function Fundo(props){

    return(
        <div class="fundo">
            <Acoes />
            <div class="curtidas">
                <img src={props.likedImage} />
                <div class="texto">
                    Curtido por <span>{props.whoLiked}</span> e <span>outras {props.likes} pessoas</span>
                </div>
            </div>
        </div>
    )
}