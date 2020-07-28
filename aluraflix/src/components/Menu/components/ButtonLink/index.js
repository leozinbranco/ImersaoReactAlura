import React from 'react';

function ButtonLink(props){
    //props => {  className: "o que alguem passar" }

    /* props.children pega o conteúdo do componente filho, ou seja, o do Index.js do Menu. O conteúdo que está la dentro vem pra cá */
    
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children} 
        </a>
    );
}

export default ButtonLink;