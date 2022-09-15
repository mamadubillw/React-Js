function ExpenseItem(props){
    return(
        <div className="date">
            {props.date}
            <div className="title"><h2>{props.title}</h2></div>
            <div className="amount">{props.amount}</div>
        </div>
    )
}

export default ExpenseItem;