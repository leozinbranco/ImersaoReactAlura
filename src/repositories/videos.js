import config from '../config';

const url_videos = `${config.url_backend}/videos`;

function create(objDoVideo) {
    console.log(url_videos);

    return fetch(`${url_videos}?_embed=videos`,{
        method: 'POST',// fazer delete.. rs 
        headers: {
            'Content-type':'application/json', 
        },
        body: JSON.stringify(objDoVideo),
    }) // fecth = função nativa do browser, que é usada para buscar coisas. essa fetch ela retorna uma promise. (then... etc)
        .then(async (respostaDoservidor) => {

            if(respostaDoservidor.ok){
                const resposta = await respostaDoservidor.json();
                return resposta;
            }
            
            throw new Error('Não foi possível cadastrar os dados :(');  // <- tratar esse erro
                
        });

}

export default {
    create,
};