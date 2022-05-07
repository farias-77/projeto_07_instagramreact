import Topo from "./Topo";
import Fundo from "./Fundo";

export default function Post(props){

    return(
        <div class="post">
            <Topo perfilImage={props.perfilImage} perfilName={props.perfilName}/>
            <div class="conteudo"><img src={props.postImage} /></div>
            <Fundo likedImage={props.likedImage} whoLiked={props.whoLiked} likes={props.likes}/>
        </div>
    )
}