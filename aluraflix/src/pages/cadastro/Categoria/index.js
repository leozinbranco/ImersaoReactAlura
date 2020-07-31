import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

export default function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [listaCategorias, setListaCategorias] = useState([]); //precisa do []

    const [values, setValues] = useState(valoresIniciais); //valor inicial

    function setValue(key, value) {
        setValues({
            //key: nome, descricao, cor, etc
            ...values,
            [key]: value, //nome: 'valor'
            //[key] -> fica uma forma dinâmica
        });


    }

    function handleChange(event) { //handler = capturar
        //const { getAttribute, value } = event.target; //aqui estou pegando apenas o VALUE(event.target.value) e o getAttribute(event.target.getAttribute) do objeto
        //console.log(event.target.getAttribute('name'));
        setValue(
            event.target.getAttribute('name'),//getAttribute('nome'), 
            event.target.value//value 
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form
                style={{ background: values.cor }}
                onSubmit={function handleSubmit(event) {
                    event.preventDefault();

                    setListaCategorias([
                        ...listaCategorias,
                        values.nome
                    ]);

                    setValues(valoresIniciais);
                }}>
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
                {listaCategorias.map((listaCategorias, index) => {
                    console.log(listaCategorias)
                    return (
                        <li key={`${listaCategorias}${index}`}>
                            {listaCategorias}

                        </li>
                    );
                })}
            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

