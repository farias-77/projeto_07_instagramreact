import ItemNavbar from "./ItemNavbar"

export default function Container(){

    return (
        <div class="container">
            <ItemNavbar title="logo" ion="logo-instagram" divClass="separador" img="assets/img/logo.png" alt="imagem navbar"/>
            <ItemNavbar title="logo-mobile" ion="logo-instagram"/>
            <ItemNavbar title="instagram-mobile" img="assets/img/logo.png" />
            <div class="pesquisa"><input type="text" placeholder="Pesquisar" /></div>
            <ItemNavbar title="icones" ion="paper-plane-outline" ion2="compass-outline" ion3="heart-outline" ion4="person-outline" />
            <ItemNavbar title="icones-mobile" ion="paper-plane-outline" />
        </div>
    )
}