            {data.map((poster) => (
                <div key={poster.id} className="card">
                {/* <div><img src={poster.images.n.url} alt="#"/></div> */}
                <div className="card-description">
                    <h6>{poster.participants.title_raw}</h6>    
                    <h6>{`Decade: ${poster.decade}`}</h6> 
                    <h6>{`Author: ${poster.person_name}`}</h6> 
                </div>    
                </div>
            ))}