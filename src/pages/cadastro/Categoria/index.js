import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
    const valoresIniciais = {
        titulo: '',
        cor: '',
        descricao: '',
    };

    const { clearForm, handleChange, values } = useForm(valoresIniciais);

    const [listaCategorias, setListaCategorias] = useState([]); // precisa do []

    /*
    useEffect, adiciona a funcionalidade de executar efeitos colaterais através de um componente funcional. */

    // sem o array, ele chama o useEffect a todo momento, a cada atualização nao importa o que seja
    useEffect(() => {
        console.log('alo alo alo');
        const url = 'http://localhost:8080/categorias';
        fetch(url) // fecth = função nativa do browser, que é usada para buscar coisas. essa fetch ela retorna uma promise. (then... etc)
            .then(async (respostaDoservidor) => {
                const resposta = await respostaDoservidor.json();
                setListaCategorias([
                    ...resposta, // para guardar todos os objetos json.
                ]);
            });

        /* setTimeout(() => {
                setListaCategorias([
                    ...listaCategorias,
                    {
                        id: 1,
                        nome: 'Front End',
                        descricao: 'Uma categoria foda',
                        cor: '#6BD1FF',
                    },
                    {
                        id: 2,
                        nome: 'Back End',
                        descricao: 'Outra categoria foda',
                        cor: '#6BD1FF',
                    },
                ]);
            }, 4 * 1000); */
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
        {values.nome}
            </h1>

            <form
                // style={{ background: values.cor }}
                onSubmit={function handleSubmit(event) {
                    event.preventDefault(); // previne o reloading padrao da pagina

                    setListaCategorias([
                        ...listaCategorias,
                        values,
                    ]);

                    clearForm(valoresIniciais);
                }}
            >
                <FormField
                    value={values.nome}
                    onChange={handleChange}
                    type="text"
                    name="nome"
                    label="Nome da Categoria"
                />
                <FormField
                    value={values.descricao}
                    onChange={handleChange}
                    type="text"
                    name="descricao"
                    label="Descrição"
                />

                <FormField
                    value={values.cor}
                    onChange={handleChange}
                    type="color"
                    name="cor"
                    label="Cor"
                />

                <Button>
                    Cadastrar
        </Button>
            </form>

            <ul>

                {listaCategorias.map((listaCategorias) => (
                    //console.log(listaCategorias.titulo),
                    <li key={`${listaCategorias.titulo}`}>
                        {listaCategorias.titulo}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para home
      </Link>
        </PageDefault>
    );
}
