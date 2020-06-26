import React, {useState} from 'react'

export const AddTransaction = () => {
    const [state, setState] = useState("");
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value = {state} onChange = {(e) => {setState(e.target.value)}} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
              (negative - expense, positive - income)</label>
                    <input type="number" value = {amount} onChange = {(e) => {setAmount(e.target.value)}} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
