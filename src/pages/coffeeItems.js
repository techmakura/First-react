import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./coffeeItem.css";
import Navbar from "../components/navbar";

const CoffeeItems = () => {

    const params = useParams();
    const id = params.id; 

    const [state, setState] = useState({});
    const [error, setError] = useState("");

    const getData = async () => {
        const url = `https://api.sampleapis.com/coffee/hot/${id}`;
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
            <div className="image">
                <img src={state.image} height="150px" width="150px" />
            </div>
            <div className="title" >
                {state.title}
            </div>
            <div className="description">
                {state.description}
            </div>
            <ul className="ingredients">
                {state.ingredients?.map((value, index)=>(
                    <li className="ingredient" key={index}>
                        {value}
                    </li>
                ))}
            </ul>
            <Link to={"/coffee"}>
                Back
            </Link>
        </div>
    )
}

export default CoffeeItems;