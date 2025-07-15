import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Coffee = () => {


    const [state, setState] = useState([]);
    const [error, setError] = useState("");

    const getData = async () => {
        const url = "https://api.sampleapis.com/coffee/hot";
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
        <div className="coffee-list-wrapper">
            <Navbar />
            {state.map((value, index)=>(
                <ul>
                    <li>
                        <Link to={`/coffee/${value.id}`} key={index}>
                            <div className="coffee-name">
                                {value.title}
                            </div>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Coffee;