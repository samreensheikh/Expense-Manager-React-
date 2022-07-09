import React, { useState } from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from './Card/Card';

 const ExpenseItem= (props) =>{

    const [description,setdescription]= useState(props.description);
    const[newt,sett]=useState("samreen");
    const TitleHandler=(event)=>{
        sett(event.target.value);/// collected value--field
                                  //newt---- collected value store
    }

    const clickHandler=()=>{
        setdescription( newt);
          // newt value goes to decription  n chnge tht onclick  
    }
    


    return(
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)}/>  
            <div className="expense-item__description">
                <h2>{description}</h2>  
                <div className="expense-item__price">${props.price}</div>
                {/* <input type='text' placeholder="Enter Title" ></input>
                <button >Click Me</button>               */}

                <input type='text' placeholder="Enter Title" value={newt} onChange={TitleHandler}></input>
                <button onClick={ clickHandler }>Click Me</button>                
            </div>
        </Card>


    );
}
export default ExpenseItem;