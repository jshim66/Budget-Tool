import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import './expense.css';


const Expense = () => {

  // Initialise the states
  let expense_list = [
    {
      type: 'food',
      detail: 'chicken',
      amount: '10'
    },
    {
      type: 'clothing',
      detail: 'shoes',
      amount: '50'
    },
  ];
  const [expense, setExpense] = useState([]);
  const [userInput, setUserInput] = useState({type: '', detail: '', amount: ''});

  // Push the completed answers object into
  // the state array, then reset the answers state

  const handleChange = (ev) => {
    setUserInput({ ...userInput, [ev.target.name]: ev.target.value });
  }
  const handleSelect = (ev) => {
    setUserInput({ ...userInput, ['type']: ev});
    document.getElementById("menu").innerHTML = ev;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    //alert(JSON.stringify(expense));
    addExpense(userInput); 
    ev.target.reset();
  }

  const deleteItem = (id) => {
    setExpense(expense.filter(data => data.id !== id));
     };


  const addExpense = (userInput) => {
    alert(userInput.type);
    /*
    if(userInput.type == ''){
      alert('hi');
    }
    if(userInput.type || userInput.detail || userInput.amount == ''){
      alert('error');
    }
    
    
    */
    //else{
      let copy = [...expense];
    
      copy = [...copy, { id: expense.length + 1, type: userInput.type , detail: userInput.detail, amount: userInput.amount}];
      setExpense(copy);
      //alert(expense[0])
      setUserInput({type: '', detail: '', amount: ''});
      //alert(JSON.stringify(expense));
    //}
      
    
   
    
    
    
  }

  

  
/*
      
            <input className = "item_box" name = "type"type = "text" placeholder='Enter item here...' onChange={handleChange}></input>

  */
  return (
    <div className = "layout">
      <form onSubmit={handleSubmit}>
        <div className = "input_area">
            <div>
              <DropdownButton
              id = "menu"
              title="Type"
              variant="secondary"
              name = "type"
              onSelect={handleSelect}
                >
                  <Dropdown.Item eventKey = "Food">Food</Dropdown.Item>
                  <Dropdown.Item eventKey = "Clothes">Clothes</Dropdown.Item>
                  <Dropdown.Item eventKey = "Bills">Bills</Dropdown.Item>
                  <Dropdown.Item eventKey = "Groceries">Groceries</Dropdown.Item>
                  <Dropdown.Item eventKey = "Entertainment">Entertainment</Dropdown.Item>
              </DropdownButton>
            </div>
            <input className = "item_box" name = "detail"type = "text" placeholder='Enter item here...' onChange={handleChange}></input>
            <input className = "amount_box"name = "amount"type = "text" placeholder='Amount' onChange={handleChange}></input>
            <button> submit </button>
        </div>
      </form>
      
      <div className = "e_list">
        {expense.map(data => (
            <div className = "e_list_elements">
              <p> {data.type}</p>
              <p> {data.detail}</p>
              <p> {data.amount}</p>
              <button onClick={() =>deleteItem(data.id)}> trash </button>
            </div>
        ))}
      </div>
      
    
    </div>
  )
}

export default Expense