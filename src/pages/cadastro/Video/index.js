import React, {useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
    const history = useHistory(); //<- também é um hooks
    const [categorias, setCategorias] = useState([]);
    
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
            //console.log(categoriasFromServer);
            setCategorias(categoriasFromServer);
        });
    }, []);
    console.log(categorias);
    


    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault(); //<- evitar o reload

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                console.log('categoriaEscolhida', categoriaEscolhida)

                videoRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida, 
                })
                .then(() => { //then é feito para o javascript esperar a interação com o banco de dados, idempendente do tempo que demore 
                    console.log('Cadastrou com sucesso');
                    history.push('/'); 
                })
                .catch((err) =>{
                    console.log(err);
                }) 
            }}
            >
                <FormField
                    value={values.titulo}
                    onChange={handleChange}
                    name="titulo"
                    label="Título do vídeo"
                />
                <FormField
                    value={values.url}
                    onChange={handleChange}
                    name="url"
                    label="URL"
                />
                <FormField
                    value={values.categoria}
                    onChange={handleChange}
                    name="categoria"
                    label="Categoria"
                    suggestions={categoryTitles}
                />

                <Button>
                    Cadastrar
                </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

