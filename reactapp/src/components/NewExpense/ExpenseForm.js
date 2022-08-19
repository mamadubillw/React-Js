import React from "react";
import { useState } from "react";
import "./ExpenseForm.css"




const ExpenseForm = () =>{
        let [enteredTitle, setEntredTitle] = useState('')
        let [enteredAmount, setEnteredAmount] = useState('')
        let [enteredDate, setEnteredDate] = useState('')

        const titleChangeHandler = (event) =>{
                setEntredTitle(event.target.value)
        }
        const amountChangeHandler = (event) => {
                setEnteredAmount(event.target.value)
        }
        const dateChangeHandler = (event) => {
                setEnteredDate(event.target.value)
        }
        const submitHandler = (event) =>{
                event.preventDefault();

                const expenseData = {
                        title:enteredTitle,
                        amount:enteredAmount,
                        date:new Date(enteredDate)
                }
                console.log(expenseData)
                setEnteredAmount = ('');
                setEnteredDate = ('');
                setEntredTitle = ('');
                
        }
        return <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                 <div className="new-expense__control">
                  <label>Title</label>
                   <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                  <label>Amount</label>
                   <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                  <label>Date</label>
                   <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                 </div>
                 <div className="new-expense__actions"></div>
                 <button type="submit">Add Expense</button>
                </div>
        </form>
}

export default ExpenseForm;