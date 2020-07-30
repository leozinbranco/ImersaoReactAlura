import React from 'react';



    export default function FormField({type, name ,value, onChange, label}) {
    
        return (

            <div>
                <label>
                    {label}: 
                        <input
                        type={type}
                        value={value}//ou values[nome]
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>


        );
    }

