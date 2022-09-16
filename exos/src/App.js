import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";


function App(){
       const expenses = [
              {
                     id: 'e1',
                     title: 'Toilett Paper',
                     amount: 94.12,
                     date: new Date(2020, 21, 10)
                 },
                 {
                     id: 'e2',
                     title: 'Car Insurance',
                     amount: 94.12,
                     date: new Date(2010, 5, 12)
                 },
                 {
                     id: 'e3',
                     title: 'New TV',
                     amount: 94.12,
                     date: new Date(2022, 5, 11)
                 }
       ]  
       
       return(
              <div>
                     
                     <Expenses items = {expenses}/>
                     <ExpenseItem />
                     
              </div>
       )
              


}

export default  App