import {useState} from 'react';
/*
Hooks: Hooks são funções que permitem a você “ligar-se” aos recursos de 
state e ciclo de vida do React a partir de componentes funcionais. Hooks 
não funcionam dentro de classes — eles permitem que você use React sem
classes.
React fornece alguns Hooks internos como useState. Você também pode criar
os seus próprios Hooks para reutilizar o comportamento de state entre componentes
diferentes. 

Hooks são funções JavaScript, mas eles impões duas regras adicionais:

Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops, condições ou funções aninhadas.
Apenas chame Hooks de componentes funcionais. Não chame Hooks de funções JavaScript comuns. (Há apenas um outro lugar válido para se chamar Hooks — dentro dos seus próprios Hooks customizados. Iremos aprender sobre eles em breve.)

Um exemplo de hook próprio, é quando usamos useEffect e/ou useState em um função/componente, dentro de sua própria lógica.
e o nome de uma função começa com ”use” e chama outros Hooks, consideramos que é um Hook customizado.   

Outros Hooks:
Existem alguns Hooks internos menos utilizados que você pode achar úteis. Por exemplo, useContext permite
subscrever-se para o context do React sem adicionar aninhamento.E useReducer permite gerenciar state local
de componentes complexos com um reducer

*/
export default function useForm(valoresIniciais) { //podemos usar para qualquer formulario, basicamente

    const [values, setValues] = useState(valoresIniciais); // valor inicial

    function setValue(key, value) {
        setValues({
            // key: titulo, descricao, cor, etc
            ...values,
            [key]: value, // nome: 'valor'
            // [key] -> fica uma forma dinâmica
        });
    }

    function handleChange(event) { // handler = capturar
        // const { getAttribute, value } = event.target; //aqui estou pegando apenas o VALUE(event.target.value) e o getAttribute(event.target.getAttribute) do objeto
        // console.log(event.target.getAttribute('name'));
        setValue(
            event.target.getAttribute('name'), // getAttribute('nome'), (pegar o props "nome", e pegando o valor dele )
            event.target.value, // value
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }
    return {
        values,
        handleChange,
        clearForm,
    };

}
