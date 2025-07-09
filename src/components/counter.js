import { useState } from "react";
// We need to import useState hooks because it is provided by react.

const Counter = () => {
    // let counter = 1;
    // let username = "";
    let state = {
        "username":"",
        "password":"",
        "email":"",
    }

    const [counter, setCounter] = useState(5);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Declaring the variable

    // Counter is variable where we will store the state
    // setCounter is a function we will use to change the value of counter, it is also known as setter. 

    const handleIncreaseCounter = (event) => {
        // counter++;
        setCounter(counter + 1);
    }

    const handleDecreaseCounter = (event) => {
        setCounter(counter - 1);
    }

    const handleInputChange = (event) => {
        const usernameValue = event.target.value;

        setUsername(usernameValue);

        state = { ...state, username: usernameValue}
        console.log("state: ", state);
    }

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        state = { ...state, password: passwordValue}
        console.log("state: ", state);
        setPassword(passwordValue);
    }

    return(
        <div>
            <div>Counter value: {counter} </div>
            
            <button 
                onClick={handleIncreaseCounter}>
                    Increase
            </button>

            <button 
                onClick={handleDecreaseCounter}>
                    Decrease
            </button>

            <div>
                <div>Username typed: {username}</div>
                <div>password typed: {password}</div>
                
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                    onChange={handleInputChange} 
                />
            </div>

            <div>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    onChange={handlePasswordChange} 
                />
            </div>

            <h6>React provides us inbuilt function called react hooks. 
            useState = This react hooks is used to manage the state</h6>

        </div>
    )
}

export default Counter;
