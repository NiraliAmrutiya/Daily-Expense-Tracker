import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault(); 
        // we can preventDefault request being sent, 
        //since the request is not sent page will not reload as we can stay on the page without sending request anywhere

        const ExpenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        // console.log(ExpenseData);
        props.onSaveExpenseData(ExpenseData);
        //it would clear or reset the form once after you submit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }    

    //by using value attribute in <input> it is two-way binding
    //which means we do not only just listen to change the input to update our state 
    //but we also feed the state back into the input so that when we change state we also change input
    return ( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2014-02-12' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onChange}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>        
        </form>
    );
};

export default ExpenseForm;