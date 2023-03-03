import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const enteredData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        props.onAddExpense(enteredData);
        setIsEditing(false);
        // console.log(enteredData);
    }

    const toggleHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={toggleHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChange={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;