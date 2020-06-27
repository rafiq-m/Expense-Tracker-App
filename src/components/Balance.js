import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const Balance = () => {

    function sum(total, value){
        return total + value
    }
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce(sum, 0).toFixed(2);

    return (
        <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
        </>
    );
}
