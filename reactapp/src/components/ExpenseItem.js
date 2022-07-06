import './ExpenseItem.css'
function ExpenseItem(props) {
        const month = props.date.toLoaleString('en-US', {month: 'long'});
        const day = props.date.toLoaleString('en-US', {day: '2-digit'});
        const year = props.date.getFullYear();
        return (
                <div className='expense-item'>
                        <div>
                                <div>{month}</div>
                                <div>{year}</div>
                                <div>{day}</div>
                        </div>
                        
                        <div className='expense-item__description'>
                                <h2>{props.tittle}</h2>
                                <div className='expense-item__price'>${props.amount}</div>
                        </div>
                </div>
        )
}

export default ExpenseItem;