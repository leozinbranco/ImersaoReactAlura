import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

    export default function FormField({type, name ,value, onChange, label, as}) {
        
        const fieldID = `id_${name}`;   
        const tag = type === 'textarea' ? 'textarea': 'input';
        // if(type === textara) {tag = textarea} else {tag = input}
        //as = qual vai ser o tipo dele? input?
        return (

            <div>
                <label
                htmlFor={fieldID}
                >
                    {label}: 
                        <Input
                        as={tag} 
                        id={fieldID}
                        type={type}
                        value={value}//ou values[nome]
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>


        );
    }

    
    FormField.defaultTypes = {
        type: 'text',  //fica esperando um texto do Type. 
        value: '',
        onChange: () => {},//<-- isso significa function, que é o valor padrão(func)
        as: 'input'
    };
    FormField.propTypes = {
        type: PropTypes.string,
        name: PropTypes.string.isRequired ,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        as: PropTypes.string.isRequired,
    };
