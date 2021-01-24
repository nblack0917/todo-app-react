import React from 'react'


function TodoList() {
    return (
        <div>
            <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem} />
        </div>
    )
}

export default TodoList
