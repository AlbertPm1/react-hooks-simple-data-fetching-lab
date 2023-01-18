// create your App component here
import React,{useState, useEffect} from 'react';

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    //sending a fetch request
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setImage(data.message)
    })
    //show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".
  }, [])
  if (image) return <img src={image} alt="A Random Dog"></img>
  //Display a <p> tag with the text of "Loading..."
  return <p>Loading ...</p>
};
export default App