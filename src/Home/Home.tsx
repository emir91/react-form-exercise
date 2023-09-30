import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to our platform</h1>
            <p>We're glad to have you here. To continue, please choose one of the following options:</p>

            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    );
}
 
export default Home;