import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const Posters = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect (() => {
            setLoading(true);
        axios({
            method:"GET",
            url:"https://api.collection.cooperhewitt.org/rest/?per_page=100&method=cooperhewitt.search.objects&access_token=797ff896a5130139487d67a3bb49aa0f&query=poster"
        }).then(res=> {
            console.log(res.data)
            setData(res.data)
        }).catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])

    return (
        <div className="posters-container">
            {loading && (
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div>
            )}



        </div>
    )
};

export default Posters;