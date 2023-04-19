import { useState } from "react"

// Defiinge a function that is a component, declare the props parameter so I can use props in my component
export default function Searchform (props) {
    // const [formData, setFormData] = useState({
    //     searchTerm: ""
    // })

    //handleChange - updates formData when we type into form
    // const handleChange = (event) => {
    //use the event object to detect key and value to update
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        // event.preventDefault();

        //pass the search term to postersearch prop, which is apps getPoster function
    //     props.postersearch(formData.searchTerm);
    // }

    //The component must return some JSX
    return (
      <div>
         {/* <form onSubmit={handleSubmit}>
           <input 
          type="text" 
          onChange={handleChange}
          value={formData.searchTerm}
          name="searchTerm"
          />
          <input 
          type="submit" value="submit" />
        </form> */}
      </div>
    );
  }