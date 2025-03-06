import React from "react";
import Card from "./components/Card"; 
import { AVAILABLE_PLACES } from "./data"; 

function App() {
    return (
        <div className="container mt-5">
            <div className="row">
                {AVAILABLE_PLACES.map((place) => (
                    <div key={place.id} className="col-md-4">
                        {/* Pass the button text along with the other props */}
                        <Card 
                            title={place.title} 
                            image={place.image} 
                            button={place.button} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
