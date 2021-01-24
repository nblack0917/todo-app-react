import React, { useState } from 'react'


let cardStyle = {
    backgroundColor: "silver",
    color: "dimgray",
    padding: "20px 10px",
    margin: "20px",
    listStyle: 'none',
    borderRadius: "10px",
    display: "block",
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
let  urgencyStyle = {
    fontSize: "0.6em"
}

function TodoCard(props) {
    const {title, clickToRemove, index} = props
    const [urgencyValue, setUrgency] = useState(true)

    const handleUrgency = (e) => {
        let urgency = e.target.value;
        // e.currentTarget.value = urgency;
        console.log(e.currentTarget.value)
        setUrgency(!urgencyValue);
        urgencyStyle = {
            fontSize: "0.6em",
            display: "none"
        }

        if (e.currentTarget.value === "low") {
            cardStyle = {
                backgroundColor: "silver",
                color: "green",
                padding: "20px 10px",
                margin: "20px",
                listStyle: 'none',
                borderRadius: "10px",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between"
            }
        } else if (e.currentTarget.value === "medium") {
            cardStyle = {
                backgroundColor: "silver",
                color: "yellow",
                padding: "20px 10px",
                margin: "20px",
                listStyle: 'none',
                borderRadius: "10px",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between"
            }
        } else if (e.currentTarget.value === "high") {
            cardStyle = {
                backgroundColor: "silver",
                color: "red",
                padding: "20px 10px",
                margin: "20px",
                listStyle: 'none',
                borderRadius: "10px",
                display: "block",
                alignItems: "center",
                justifyContent: "space-between"
            }
        }
    }

    return (
        <li style={cardStyle} value=""> {title}
            <div style={urgencyStyle} >
                <label>Urgency</label>
                    <input type="radio" value="low" name="urgency" onClick={handleUrgency}/> Low
                    <input type="radio" value="medium" name="urgency" onClick={handleUrgency}/> Medium
                    <input type="radio" value="high" name="urgency" onClick={handleUrgency}/> High
            </div>
            <button style={ buttonStyle } onClick={() => {clickToRemove(index)}}>Remove</button>
        </li>
    )
}

export default TodoCard;