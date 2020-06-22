import React from 'react';

import './search-bar.styles.css';

import TodoItself from '../todoItself/todoItself.component';

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            todosInput: '',
            todosItems: [],
            editTodo: '',
            editedText: '',
        };
    }

    handleTodoInput = event =>{
        this.setState({todosInput: event.target.value});
    }

    handleTodoSubmit = event =>{
        event.preventDefault();
        if(this.state.todosInput === ''){
            return;
        }
        else {
            const newItem = {
                text: this.state.todosInput,
                id: Date.now()
            };
            this.setState(state => ({
                todosItems: state.todosItems.concat(newItem),
                todosInput: ''
            }));
        }
    }

    hadleTodoRemove = (itemIndex) => {
        const updatedItems = this.state.todosItems.filter((item, i) => {
            return i !== itemIndex;
        })

        this.setState({todosItems: updatedItems})
    }

    handleTodoEditIn = (event,i, item) =>{
        this.setState({editTodo: item.id})

        if(event.target.value !== undefined){
            this.setState({editedText: event.target.value});
        }else{
            this.setState({editedText: this.state.todosItems[i].text})
        }
        
    }

    handleEditOut = (i) =>{
        this.setState({editTodo: ''})
        
        let editedArray = [...this.state.todosItems]
        editedArray[i].text = this.state.editedText;

        this.setState({todosItems: editedArray});
    }

    render(){
        const { handleTodoInput, handleTodoSubmit, hadleTodoRemove, handleTodoEditIn, handleEditOut } = this
        const { todosInput, todosItems, editTodo } = this.state;
        return (
            <div className="container">
                <div className="search-title-container">
                    <h1 className="title">Today's list</h1>
                    <label className="label">What you have todo?</label>
                    <div className="text-and-button">
                        <input onChange={handleTodoInput}value={todosInput} className="input"type="text" />
                        <button onClick={handleTodoSubmit}>Add it!</button>
                    </div>
                </div>
                <div className="itemsContainer">
                    {
                    todosItems.map((item, i) => (
                            <TodoItself 
                                i={i}
                                key={item.id} 
                                item={item} 
                                handleRemove={hadleTodoRemove}
                                handleEdit={handleTodoEditIn}
                                handleEditOut={handleEditOut}
                                editTodo={editTodo}
                            />
                        ))
                    }  
                </div>  
            </div>
        )
    }
}

export default SearchBar;