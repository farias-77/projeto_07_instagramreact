export default function ItemNavbar(props){

    return (
        <div class={props.title}>
            <ion-icon name={props.ion}></ion-icon>
            <div class={props.divClass}></div>
            <img src={props.img} alt={props.alt} />
            <ion-icon name={props.ion2}></ion-icon>
            <ion-icon name={props.ion3}></ion-icon>
            <ion-icon name={props.ion4}></ion-icon>
        </div>
    )
} 