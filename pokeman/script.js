async function getPokemons(){
    try {
        // const API = "https://pokeapi.co/api/v2/ability/?limit=20";
        const API ="https://pokeapi.co/api/v2/pokemon/"
       const pokemans =  await((await fetch(API)).json())
        const urls = pokemans.results.map((pokeman)=>(
            {
                url:pokeman.url
            }
        ))
        console.log(urls);

    } catch (error) {
        
    }


}
getPokemons()