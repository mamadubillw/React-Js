import ExpenseItem from "./components/ExpenseItem";
//import Expenses from "./components/Expenses";
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

    return (
        <div>
        <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
        </ExpenseItem>

        <ExpenseItem 
        title={expenses[1].title}
         amount={expenses[1].amount}
         date={expenses[1].date}>
        </ExpenseItem>
        
        <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
        </ExpenseItem>
        </div>
    )
}
export default App;