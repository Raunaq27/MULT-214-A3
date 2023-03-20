import React from "react";
import NewsItems from "./components/NewsItems";
import Header from "./components/header";

function App() {
  return (<div>
    <Header title="News"/>
    <NewsItems title="Heading" imageUrl="eg.jpg" paraText="lorum impsum" id="1"/>
  </div>
  );
}


export default App;