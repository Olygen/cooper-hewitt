import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

export default function PosterDetails (props) {
    const apiKey = process.env.REACT_APP_API_KEY;
    //Grabbing the poster id from the URL Params
    const { id } = useParams(); 
    // Using this two variables to create URL. objects.getInfo method is used
    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getInfo&access_token=${apiKey}&id=${id}`

    const [poster, setPoster] = useState(null)
    const [refresh, setRefresh] = useState(false)

    //function to fetch poster data
    const getPoster = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setPoster(data.object)
        } catch (error) {
            console.log(error)
        }
    }
  //to evoce previous function once:
  useEffect(() => {
    getPoster()
  }, [refresh])

  const handleClick = () => {
    setRefresh(!refresh)
  }
  // loaded function for when data is fetched
  const loaded = () => {
    if (!poster.title_raw) {
      return (
        <div className="posters-details">
        <Link to={`https://collection.cooperhewitt.org/objects/${poster.id}/`}>
        <p>Link to CooperHewitt page for the poster</p>
      </Link>
      </div>
      );
    }
  
    return (
      <div className="posters-details">
        <h1>{poster.title_raw}</h1>
        <h2>{`Decade: ${poster.decade}`}</h2>
        <h3>{`Author: ${poster.participants[0].person_name}`}</h3>
        <h4>{`Medium: ${poster.medium}`}</h4>
        <Link to={`https://collection.cooperhewitt.org/objects/${poster.id}/`}>
          <p>Link to CooperHewitt page for the poster</p>
        </Link>
        <img src={poster.images[0].b.url} alt="big" />
        <img src={poster.images[0].n.url} alt="average" />
        <img src={poster.images[0].z.url} alt="#" />
        <img src={poster.images[0].d.url} alt="#" />
        <img src={poster.images[0].sq.url} alt="squared from big" />
      </div>
    );
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return poster ? loaded() : loading()

}
