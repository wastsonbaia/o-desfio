const timeStamp='1622427329';
const apiKey= '8c6a6425b87e3d99deca779c281584c6';
const md5='80b3a951b8d919d1a5308ed4d3f55928';
const pesquisaHeroi= document.getElementById('nome').volue;
fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
).then((response)=>{           
    return response.json();
}).then((jsonParsed)=>{            
    const divHero = document.querySelector('#herois');
    jsonParsed.data.results.forEach(element => {
        const srcImage=element.thumbnail.path +'.'+ element.thumbnail.extension
        const nameHero = element.name
        createDivHero(srcImage, nameHero, divHero);
    });

    console.log(jsonParsed);
});
fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${pesquisaHeroi}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
        ).then((response)=>{           
            return response.json();
        }).then((jsonParsed)=>{            
            const divHero = document.querySelector('#herois');
            jsonParsed.data.results.forEach(element => {
                const srcImage=element.thumbnail.path +'.'+ element.thumbnail.extension
                const nameHero = element.name
                createDivHero(srcImage, nameHero, divHero);
            });
        
            console.log(jsonParsed);
        }); 
function createDivHero(srcImage, nameHero, divToAppend){
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')


    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)  
    divPai.classList.add("personagem")

function pegarpesquisa(){
    pesquisaHeroi= document.getElementById('nome').volue
        }
        

}
