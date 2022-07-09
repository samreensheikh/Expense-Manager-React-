import React, { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm=(props)=>{

    const [desc,setdesc]=useState('');
    const [price,setprice]=useState('');
    const [date,setdate]=useState('');

    const TitleHandler=(event)=>{
        setdesc(event.target.value);
    }; 

    const PriceHandler=(event)=>{
       setprice(event.target.value);
    };

    const DateHandler=(event)=>{
        setdate(event.target.value);
    };

    const SubmitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            description:desc,
            price:price,
            date:new Date(date)
        }
        console.log(expenseData);
        props.caldata(expenseData);

        setdate('');
        setdesc('');
        setprice('');



    };

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type='text' onChange={TitleHandler}/>
                 </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type='number' min="0.01" step="0.01" onChange={PriceHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' onChange={DateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>




    );
}
export default ExpenseForm;
