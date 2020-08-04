import config from '../config';

const url_categories = `${config.url_backend}/categorias`;

function getAll() {
    console.log(url_categories);

    return fetch(`${url_categories}` ) // fecth = função nativa do browser, que é usada para buscar coisas. essa fetch ela retorna uma promise. (then... etc)
        .then(async (respostaDoservidor) => {

            if(respostaDoservidor.ok){
                const resposta = await respostaDoservidor.json();
                return resposta;
            }
            
            throw new Error('Não foi possível pegar os dados :(');  // <- tratar esse erro
                
        });

}

function getAllCategoriesWithVideos() {
    console.log(url_categories);

    return fetch(`${url_categories}?_embed=videos` ) // fecth = função nativa do browser, que é usada para buscar coisas. essa fetch ela retorna uma promise. (then... etc)
        .then(async (respostaDoservidor) => {

            if(respostaDoservidor.ok){
                const resposta = await respostaDoservidor.json();
                return resposta;
            }
            
            throw new Error('Não foi possível pegar os dados :(');  // <- tratar esse erro
                
        });

}

export default {
    getAllCategoriesWithVideos,
    getAll,
};