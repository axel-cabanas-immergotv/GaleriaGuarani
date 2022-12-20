import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

export default function Home () {
    

    return (
        <div>
            <div className="loading-transition p-relative" style={{overflow: 'hidden'}}>
                <Header/>
                <Main/>
            </div>
        </div>
        
    );
}