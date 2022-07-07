import React from "react";
import './Comment.css'

function Comment(props){
        function Maiusculas(texto){
                return texto.toUpperCase()
        }
      return(   <>
                <section className="comment">
                        <p className="title">{Maiusculas(props.titulo)}</p>
                        <p className="text">Texto Commentario</p>
                        <p className="author">Autor: {props.author}</p>
                </section>
        </>
      )
}
export default Comment