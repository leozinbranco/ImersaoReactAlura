import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
//import dadosIniciais from '../../data/dados_iniciais.json';
//import url from '../../config';
//import Menu from '../../components/Menu'
//import Footer from '../../components/Footer'
import categoriasRepository from '../../repositories/categorias';


function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);  //<-  ([]), a props e o state passados dentro do efeito sempre terão seus valores iniciais.

  useEffect(() => {
    categoriasRepository.getAllCategoriesWithVideos()// <- pegar os dados da api  
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos)
        setDadosIniciais(categoriasComVideos)   //depois, setar dados iniciais vindos da API no state
      })
      .catch((err) => {
        console.log(err.message);     //se der erro, log no erro.
      });


  }, []); // , []    <-- no useEffect é necessário para ele não ficar fazendo várias requests a cada segundo, isso conta ao React que o seu efeito não depende de nenhum valor das props ou state
  //COMENTAR TUDO = ALT+SHIFT+A
  return (

    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}
    </PageDefault>
  );


}

export default Home;
