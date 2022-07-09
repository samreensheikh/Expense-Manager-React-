import React, { useState } from "react";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

let expenses=[
    {
      id:'101',
      price:20,
      description:"school fee",
      date:new Date(2022,3,14)
    },
    {
      id:'102',
      price:240,
      description:"tution fee",
      date:new Date(2022,3,6)
    },
    {
      id:'103',
      price:540,
      description:"game fee",
      date:new Date(2022,3,29)
    }
  ]
const App = () =>{
  
  const [expense,setexpense]=useState(expenses);
 
  const saveExpenseDataHandler=(objdata)=>{
    const newdata=[objdata,...expense];
    setexpense(newdata);
    console.log(newdata);
  };

  return(
    <div>
      <NewExpense caldata={saveExpenseDataHandler}/>
      <Expense expense={expense}/>   
    </div>
  );
}

export default App;
