import React from 'react';

import { FiX, FiEdit, FiSave } from 'react-icons/fi'

import './todoItself.styles.css';

const TodoItself = ({item, handleRemove, handleEdit, i, editTodo, handleEditOut }) => (
    <div className="todoItem">
        {   
            editTodo === item.id ?
            <div className="itself-container">
                <div className="todoText">
                    <h3>
                    <input defaultValue={item.text} onChange={(e) => handleEdit(e, i, item)} />
                    </h3>
                </div>
                <div className="edit-and-remove">
                    <FiSave className="icons" onClick={() => handleEditOut(i)} />
                    <FiX className="icons"  onClick={() => handleRemove(i)} />
                </div>
            </div>    
            :
            <div className="itself-container">        
                <div className="todoText">
                    <h3>{item.text}</h3>
                </div>
                <div className="edit-and-remove">
                    <FiEdit className="icons" onClick={(e) => handleEdit(e, i, item)} />
                    <FiX className="icons" onClick={() => handleRemove(i)} />
                </div>
            </div>      
        }
    </div>
)

export default TodoItself;