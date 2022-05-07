import Sugestao from "./Sugestao";

export default function Sugestoes(){
    
    const suggestions = [
        {image:"assets/img/bad.vibes.memes.svg",
        name:"bad.vibes.memes"},

        {image:"assets/img/chibirdart.svg",
        name:"chibirdart"},

        {image:"assets/img/razoesparaacreditar.svg",
        name:"razoesparaacreditar"},

        {image:"assets/img/adorable_animals.svg",
        name:"adorable_animals"},

        {image:"assets/img/smallcutecats.svg",
        name:"smallcutecats"}
    ]
    
    
    
    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {suggestions.map(sug => <Sugestao image={sug.image} name={sug.name}/>)}
        </div>
    )
}