import React, { useState } from 'react'
import './style.css';
import { useEffect } from 'react';

// get the local storage data
const getLocalStorageData = () => {
    const lists = localStorage.getItem("lists");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [inputItems, setInputItems] = useState(getLocalStorageData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    // add item function
    const addItemsInTodoList = () => {
        if (!inputData) {
            alert("plz fill the data");
        } else if (inputData && toggleButton) {
            setInputItems(
                inputItems.map((currElem) => {
                    if (currElem.id === isEditItem) {
                        return { ...currElem, name: inputData };
                    }
                    return currElem;
                })
            );

            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            // ...prevdata, newData to add
            setInputItems([...inputItems, myNewInputData]);
            setInputData("");
        }
    }

    //edit the items
    const editItem = (id) => {
        const editedItems = inputItems.find((currElem) => {
            return currElem.id === id;
        });

        setInputData(editedItems.name);
        setIsEditItem(id);
        setToggleButton(true);
    };

    // delete items
    const deleteItem = (id) => {
        const updatedItems = inputItems.filter((currElem) => {
            return currElem.id !== id;
        });
        setInputItems(updatedItems);
    };

    // remove all/ delete all items
    const removeAll = () => {
        setInputItems([]);
    }

    // add allData items into Local Storage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(inputItems));
    }, [inputItems])

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./Images/todo-list-icon.png' alt='todoLogo' />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder='Add Item'
                            className='form-control' value={inputData} onChange={(event) => setInputData(event.target.value)}
                        />
                        {
                            toggleButton ? <i className="fa-solid fa-edit add-btn" onClick={addItemsInTodoList}></i> : <i className="fa-solid fa-plus add-btn" onClick={addItemsInTodoList}></i>
                        }

                    </div>

                    {/* show our items */}
                    <div className='showItems'>
                        {
                            inputItems.map((currElem) => {
                                return (
                                    <div key={currElem.id} className='eachItem'>
                                        <h3>{currElem.name}</h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-edit" onClick={() => editItem(currElem.id)}></i>
                                            <i className="far fa-trash-alt" onClick={() => deleteItem(currElem.id)}></i>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    {/* remove all button */}
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo