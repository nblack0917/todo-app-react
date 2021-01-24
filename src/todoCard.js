import React from 'react'

const cardStyle = {
    backgroundColor: "silver",
    color: "dimgray",
    padding: "20px 10px",
    margin: "20px",
    listStyle: 'none',
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}

const buttonStyle = {
    backgroundColor: "#61DAFB",
    color: "white",
    fontSize: "14px",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "10px 20px",
    cursor: "pointer"
}

function TodoCard(props) {
    const {title, clickToRemove, index} = props
    return (
        <li style={cardStyle}>{title}
            <button style={ buttonStyle } onClick={() => {clickToRemove(index)}}>Remove</button>
        </li>
    )
}

export default TodoCard;