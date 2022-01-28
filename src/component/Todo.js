import React, { useState } from 'react';
import todo from './images/todo.png'
import './Todo.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const delItem = (id) => {
        const updatedItems = items.filter((element, index) => {
            return index != id;
        });

        setItems(updatedItems);
    }

     function remAllButton(){
        return setItems([]);
    } 


    return (
        <div className="main-div">
            <div className='child-div'>
                <figure className='mt-4'>
                    <h3>Topics To-Do</h3>
                    <img src={todo} height="100px" width="100px" ></img>
                    <figcaption>Add your topics here !!</figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text" placeholder='Add Items'
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)}
                    ></input>
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>

                <div className='showItems'>
                    {
                        items.map((element, index) => {

                            return (
                                <div className='eachItem' key={index}>
                                    <h3 className='eachSingleItem'>{element} <i class="fa fa-trash trash-btn" aria-hidden="true" onClick={() =>{delItem(index)}}></i></h3>
                                </div>
                            )

                        })
                    }
                </div>

                {/* End Button to delete all list */}
                
                {items.length!=0 ? <div className='showItems'>
                        <button className='removeButton' onClick ={remAllButton}>Remove ToDo List</button>
                    </div>: null }
                        
                
                

            </div>
        </div>
    );
}

export default Todo;
