import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SearchResults = ({ poster }) => {

    const loaded = () => {

        return (
            <div className="posters-container">
                {/* {loading && (
                    <div>
                        {" "}
                        <h1>Loading...</h1>
                    </div>
                )} */}

                {poster
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
                ))
                }

            </div>
        )
    }
    const loading = () => {
        return <h1>No Posters to Display</h1>;
    };

    //Ternary operator will determine which functions JSX we will return
    return poster ? loaded() : loading();

};

export default SearchResults;

