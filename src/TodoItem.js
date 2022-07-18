import React from 'react'

const TodoItem = (props) => {
    console.log(props);
    
    return (
        <div className='todo-item' style={{ margin: 20, display: 'flex' }}>
            <input
                type='checkbox'
                style={{ margin: '25px 10px', width: '40px', height: '30px' }}
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={{ color: 'black', fontSize: 25 }}>
                {props.item.text}
            </p>

            <br />
        </div>
    )
}

export default TodoItem;