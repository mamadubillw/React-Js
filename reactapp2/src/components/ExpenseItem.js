import ExpenseDate from "./ExpenseDate"
import { useState } from "react"
function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    const clickHandler = () =>{
        setTitle('upadted')
        console.log(title)
    }
      
    return(
       <div className="expense-item">
        <ExpenseDate date={props.date}/>
   
        <div className="expense-item_description">
            <h2>{title}</h2>
            <div className="expense-item_price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
       </div>
    )
}

export default ExpenseItem