import React, { useState } from "react";
import NewsItems from "./components/NewsItems";
import Header from "./components/header";
import EgImage1 from "./assets/Image.jpg";
import EgImage2 from "./assets/Image2.jpg"
import EgImage3 from "./assets/Image3.jpg";
import EgImage4 from "./assets/Image4.jpg"

function App() {
  const [todos, setTodos] = useState(0);
  const handleSubmit = (newId) => {

    setTodos( newId );
    console.log(todos)
  };



  const turtles = [
    {
      title: "Heading",
      paraText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consectetur sollicitudin. Suspendisse a sapien risus. Proin sed mauris non nunc commodo molestie id eu ipsum. Maecenas nisl lorem, laoreet eu iaculis non, pulvinar id nulla. In condimentum pharetra erat sed finibus. Nullam quis ullamcorper leo, sed sollicitudin nunc",
      id: 0,
      imgUrl: EgImage1
    },
    {
      title: "Heading",
      paraText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consectetur sollicitudin. Suspendisse a sapien risus. Proin sed mauris non nunc commodo molestie id eu ipsum. Maecenas nisl lorem, laoreet eu iaculis non, pulvinar id nulla. In condimentum pharetra erat sed finibus. Nullam quis ullamcorper leo, sed sollicitudin nunc",
      id: 1,
      imgUrl: EgImage2
    },
    {
      title: "Heading",
      paraText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consectetur sollicitudin. Suspendisse a sapien risus. Proin sed mauris non nunc commodo molestie id eu ipsum. Maecenas nisl lorem, laoreet eu iaculis non, pulvinar id nulla. In condimentum pharetra erat sed finibus. Nullam quis ullamcorper leo, sed sollicitudin nunc",
      id: 2,
      imgUrl: EgImage3
    },
    {
      title: "Heading",
      paraText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim consectetur sollicitudin. Suspendisse a sapien risus. Proin sed mauris non nunc commodo molestie id eu ipsum. Maecenas nisl lorem, laoreet eu iaculis non, pulvinar id nulla. In condimentum pharetra erat sed finibus. Nullam quis ullamcorper leo, sed sollicitudin nunc",
      id: 3,
      imgUrl: EgImage4
    },
  ]

  const displayTurtles = turtles.map((turtle, index) =>
    <div key={turtle.id + index}>
      <button onClick={() => handleSubmit(turtle.id)}>Bookmark</button>
      <NewsItems title={turtle.title} paraText={turtle.paraText} imageUrl={turtle.imgUrl} id={index} />

    </div>
  );


  const bookmarks =
      <div>
        <NewsItems title={turtles[todos].title} paraText={turtles[todos].paraText} imageUrl={turtles[todos].imgUrl} />
      </div>
  ;
  return (

    <div>
      <script src="http://localhost:8097"></script>
      <Header title="News" />
      {displayTurtles}
      <h2>Bookmarks</h2>
      {bookmarks}
    </div>
  );
}

export default App;