import { useEffect, useState } from "react";
import "./externalcall.css";

const ExternalCall = () => {

    const [state, setState] = useState([]);
    const [error, setError] = useState("");

    const getData = async () => {
        const url = "https://api.restful-api.dev/objects";
        // Storing url in variable

        try {
            const response = await fetch(url);
            // Fetch function is used to make api call.
            // Await is used to handle asynchronouscall

            console.log("response: " + response);
            
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            // Store the response of api in our state hoooks
            setState(json);
            console.log(json);
        } 
        catch (error) {
            setError(error.message);
            console.error("error aayo haii " + error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {state.length > 0 ? 
            state.map((value, index)=>(
                <div className="card" key={index}>
                    <div className="card-title">
                        {value.name}
                    </div>
                    {value.data?
                        (<div className="card-details">
                            <div className="card-color">{value.data.color}</div>
                            <div className="card-capacity">{value.data.capacity}</div>
                        </div>)
                    :
                    <></>}
                </div>
            )) 
            :(<>
            <div>{error}</div>
                </>) 
            }
        </>
    )
}

export default ExternalCall;