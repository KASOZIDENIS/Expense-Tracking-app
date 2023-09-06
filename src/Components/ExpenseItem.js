import './ExpenseItem.css';

function ExpenseItem(){
    const ExpenseDate = new Date(23,8,16);
    const ExpenseTitle = 'Car Insurance';
    const ExpenseAmount = 640;
    return(
        <div className="expense-item">
            <div>{ExpenseDate.toISOString()}</div>
            <div classNamelassName="expense-item__description">
                <h1>{ExpenseTitle}</h1> 
                </div>
                <div className="expense-item__price">${ExpenseAmount}</div>
                           
        </div>
    );
}

export default ExpenseItem;