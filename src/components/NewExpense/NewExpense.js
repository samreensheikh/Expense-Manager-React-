import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(objdata)=>{
        const expenseData={
            ...objdata,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.caldata(expenseData);
     };

    return(
        <div className='new-expense'>
            <ExpenseForm caldata={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;