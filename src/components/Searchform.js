import { useState } from "react";

// Defining a function that is a component, declaring the props parameter so it can be used in my component
const SearchForm = (props) => {
    //State to hold the data of our form
    const [formData, setFormData] = useState({ searchTerm: "" })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //distructure search term to postersearch prop, which is apps getPoster function
        props.postersearch(formData.searchTerm);
    }

    //The component must return some JSX
    return (
      <div>
         <form onSubmit={handleSubmit} >
           <input 
            type="text" 
            onChange={handleChange}
            value={formData.searchTerm}
            // placeholder="Search"
            name="searchTerm"
          />
          <input 
          type="submit" value="Search" />
        </form>
      </div>
    );
  };

  export default SearchForm;