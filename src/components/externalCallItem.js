import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ExternalCallItem = () => {
    let params = useParams();
    let id = parseInt(params.id);

    console.log("id: " + id);
    const [state, setState] = useState({});

    const getData = async () => {
        const url = `https://api.restful-api.dev/objects/${id}`;
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
            console.error("error aayo haii " + error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="card">
            <div className="card-title">{state.name}</div>
            <div className="card-details">
                <div className="card-color">{state.data?.color}</div>
                <div className="card-capacity">{state.data?.capacity}</div>
            </div>
        </div>
    )
}

export default ExternalCallItem;