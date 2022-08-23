import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home(){
    return(
        <div className="Home">
            <Navbar/>

            <section>
                <img src="../images/stars.png" id="stars" />
            </section>
        </div>

    );
}

export default Home;