import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "./Card/Card";

const Expense=(props)=>{
    return(
        <Card className="expenses">{
            
            props.expense.map(
                expenseobj =>(
            <ExpenseItem key={expenseobj.id} date={ expenseobj.date} description={ expenseobj.description} price={ expenseobj.price} />
            )
          )
        }

            {/* <ExpenseItem date={props.expense[0].date} description={props.expense[0].description} price={props.expense[0].price}/>
            <ExpenseItem date={props.expense[1].date} description={props.expense[1].description} price={props.expense[1].price}/>
            <ExpenseItem date={props.expense[2].date} description={props.expense[2].description} price={props.expense[2].price}/> */}

        </Card>

    );
}
export default Expense;