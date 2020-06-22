import React from 'react';

import { FiX, FiEdit, FiSave } from 'react-icons/fi'

import './todoItself.styles.css';

const TodoItself = ({item, handleRemove, handleEdit, i, editTodo, handleEditOut }) => (
    <div className="todoItem">
        {   
            editTodo === item.id ?
            <div className="itself-container">
                <div className="todoText">
                    <input defaultValue={item.text} onChange={(e) => handleEdit(e, i, item)} />
                </div>
                <div className="edit-and-remove">
                    <FiX onClick={() => handleRemove(i)} />
                    <FiSave onClick={() => handleEditOut(i)} />
                </div>
            </div>    
            :
            <div className="itself-container">        
                <div className="todoText">
                    <h3>{item.text}</h3>
                </div>
                <div className="edit-and-remove">
                    <FiX onClick={() => handleRemove(i)} />
                    <FiEdit onClick={(e) => handleEdit(e, i, item)} />
                </div>
            </div>      
        }
    </div>
)

export default TodoItself;