import { useEffect, useState } from "react";
// We need to import useState hooks because it is provided by react.

const Counter = () => {
    // let counter = 1;
    // let username = "";
    // let state = {
    //     "username":"",
    //     "password":"",
    //     "email":"",
    // }

    // const [counter, setCounter] = useState(5);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");


    // Declaring the variable

    // Counter is variable where we will store the state
    // setCounter is a function we will use to change the value of counter, it is also known as setter. 

    // const handleIncreaseCounter = (event) => {
    //     // counter++;
    //     setCounter(counter + 1);
    // }

    // const handleDecreaseCounter = (event) => {
    //     setCounter(counter - 1);
    // }

    // const handleInputChange = (event) => {
    //     const usernameValue = event.target.value;
    //     setUsername(usernameValue);
    // }

    // const handlePasswordChange = (event) => {
    //     const passwordValue = event.target.value;        
    //     setPassword(passwordValue);
    // }

    // const handleEmailChange = (event) => {
    //     const emailValue = event.target.value;        
    //     setEmail(emailValue);
    // }

    const [apiData, setApiData] = useState([]);

    const [state, setState] = useState({
        "email":"",
        "password":"",
        "username":"",
        "phone":"",
        "gender":""
    })

    const handleStateChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        const newState = {...state, [name]:value}
        setState(newState);
    }

    const getData = async () => {
    const url = "https://api.restful-api.dev/objects";

        try {
            const response = await fetch(url);

            console.log("response: " + response);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div>
            {/* <div>Counter value: {counter} </div>
            
            <button 
                onClick={handleIncreaseCounter}>
                    Increase
            </button>

            <button 
                onClick={handleDecreaseCounter}>
                    Decrease
            </button> */}

            <div>
                <div>Username typed: {state.username}</div>
                <div>password typed: {state.password}</div>
                <div>Email typed: {state.email}</div>
                <div>phone typed: {state.phone}</div>
                <div>gender typed: {state.gender}</div>
                
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                    onChange={handleStateChange} 
                />
            </div>

            <div>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    onChange={handleStateChange} 
                />
            </div>

            <div>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Enter your email" 
                    onChange={handleStateChange} 
                />
            </div>

            <div>
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Enter your phone" 
                    onChange={handleStateChange} 
                />
            </div>

            <div>
                <input 
                    type="text" 
                    name="gender" 
                    placeholder="Enter your gender" 
                    onChange={handleStateChange} 
                />
            </div>

            <div>
                Male:
                <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    onChange={handleStateChange} 
                />
                Female;
                <input
                    type="radio" 
                    name="gender" 
                    value="female" 
                    onChange={handleStateChange} 
                />
            </div>

        </div>
    )
}

export default Counter;
