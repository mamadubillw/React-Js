import React from "react";
import './index.css'
import Comment from './components/Comment'
function App(){
       
        return(
                <>
                <h1>Comentarios</h1>
                <Comment  titulo = "Comentario um" author = "Mamadu_Bilo"/>
                <Comment  titulo = "Comentario dois" author = "Joao Ribeiro"/>
                <Comment  titulo = "Comentario tres" author = "Bubacar"/>
                </>
        )
}
export default App