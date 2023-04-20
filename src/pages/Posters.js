import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posters = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect (() => {
            setLoading(true);
        axios({
            method:"GET",
               url:`https://api.collection.cooperhewitt.org/rest/?per_page=100&method=cooperhewitt.search.objects&access_token=${apiKey}&query=poster`
        }).then(res=> {
            console.log(res.data.objects)
            setData(res.data.objects)
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

            {data
            .filter(poster => poster.images[0]?.n?.url || poster.images[0]?.b?.url || poster.images[0]?.z?.url || poster.images[0]?.d?.url || poster.images[0]?.sq?.url)
            .map((poster) => (
                <div key={poster.id} className="card">

                    <Link to={`/details/${poster.id}`}>
                        {poster.images[0]?.n?.url ? (
                        <div><img src={poster.images[0].n.url} alt="#"/></div>        
                    ) : poster.images[0]?.b?.url ? (
                        <div><img src={poster.images[0].b.url} alt="#"/></div>
                    ) : poster.images[0]?.z?.url ? (
                        <div><img src={poster.images[0].z.url} alt="#"/></div>
                    ) : poster.images[0]?.d?.url ? (
                        <div><img src={poster.images[0].d.url} alt="#"/></div>
                    ) : poster.images[0]?.sq?.url ? (
                        <div><img src={poster.images[0].sq.url} alt="#"/></div>
                    ) : null}
                    </Link>

                <div className="card-description">
                    <h3>{poster.title_raw}</h3>
                    <h6>{`Decade: ${poster.decade}`}</h6> 
                    {poster.participants[0]?.person_name ? (
                        <h6>{`Author: ${poster.participants[0].person_name}`}</h6>
                    ) : (
                        <h6>No name</h6>
                    )}
                </div>    
                </div>
            ))}

        </div>
    )
};

export default Posters;