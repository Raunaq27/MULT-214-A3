import React, {useState} from "react";
import NewsItems from "./components/NewsItems";
import Header from "./components/header";
import EgImage1 from "./assets/Image.jpg";
import EgImage2 from "./assets/Image2.jpg"

function App() {
  const turtles = [
    {
        name: "Leonardo",
        nickName: "Leo",
        weapon: "Katana",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Donatello",
        nickName: "Don",
        weapon: "Bo staff",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Michelangelo",
        nickName: "Mikey",
        weapon: "Nunchucks",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
    },
    {
        name: "Raphael",
        nickName: "Raph",
        weapon: "Sai",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
    }
]

const displayTurtles = turtles.map((turtle, index) => 
        <div key={turtle.name + index}>
           <NewsItems title={turtle.name} imageUrl={turtle.imgUrl} id={index}/>
        </div>);

  return (
    
  <div>
    <script src="http://localhost:8097"></script>
    <Header title="News" />
    <NewsItems 
    title="Heading" 
    imageUrl={EgImage1} 
    paraText="lLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu ligula, 
    dapibus et imperdiet a, interdum ac velit. Aenean euismod elit augue, vel pretium ipsum 
    aliquam vel. Curabitur molestie, odio nec ultricies ultricies, tellus magna faucibus elit,
     sit amet scelerisque magna eros id felis. Pellentesque at est finibus," id="1" />
      <NewsItems 
    title="Heading" 
    imageUrl={EgImage2} 
    paraText="lLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu ligula, 
    dapibus et imperdiet a, interdum ac velit. Aenean euismod elit augue, vel pretium ipsum 
    aliquam vel. Curabitur molestie, odio nec ultricies ultricies, tellus magna faucibus elit,
     sit amet scelerisque magna eros id felis. Pellentesque at est finibus," id="2" />
    {displayTurtles}
  </div>
  );
}

export default App;