export default function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <span>{props.user}</span>
              {props.name}
            </div>
        </div>
    )
}