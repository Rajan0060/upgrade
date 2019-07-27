import React from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import searchbar from './component/searchbar';
function App() {
  return (
    <div className="App">
      <Toolbar />
      <div></div>
      <main style={{marginTop: '0',padding:'0',marginInlineStart:'200px',style:'bold'}}>
        <div className="paragraph">
        <h1>Rick and Morty</h1>
        <p1>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block ‘Adult Swim’. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons.</p1>
        <br />
        <br />
        <p2>Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has been acclaimed by critics for its originality, creativity and humor.</p2>
        </div>
      </main>
      </div>
  );
}
export default App;
