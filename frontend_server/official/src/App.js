import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import ClientsPage from './pages/ClientsPage';
import HelpPage from './pages/HelpPage';
import Mars from './pages/Mars';
import Profilepage from './pages/Profilepage';
// import getDataFromDb from './api'


 function App() {
  const [skillsData] = useState([
    {
      sTitle: "ReactJs",
      sRating: 5
    },
    {
      sTitle: "NextJs",
      sRating: 4
    },
    {
      sTitle: "ExpressJs",
      sRating: 3
    },
    {
      sTitle: "NodeJs",
      sRating: 4
    },
    {
      sTitle: "HTML/CSS",
      sRating: 5
    },
    {
      sTitle: "JavaScript",
      sRating: 5
    },
    {
      sTitle: "C++",
      sRating: 3
    },
    {
      sTitle: "C",
      sRating: 3
    },
    {
      sTitle: "Redux",
      sRating: 4
    },
    {
      sTitle: "RTK Query",
      sRating: 5
    },
    {
      sTitle: "Material-Ui",
      sRating: 5
    },
  ])
  const [projectsData] = useState([
    {
      pName:'janSevaFoundation',
      pLink:'https://jan-seva-foundation.github.io/official/'
    },
    {
      pName:'Prime Video App',
      pLink:'https://zerowillreborn.github.io/Prime-Video/'
    },
    {
      pName:'Smart Coders',
      pLink:'https://github.com/zeroWillreborn/smarter_codes_club'
    },
    {
      pName:'Uber Clone Build',
      pLink:'https://zerowillreborn.github.io/uber-clone/'
    },
    {
      pName:'Amazon Prime Video',
      pLink:'https://zerowillreborn.github.io/amazonPrime/'
    },
    {
      pName:'Twitter-V2 Clone',
      pLink:'https://twitter-v2.herokuapp.com/'
    },
    {
      pName:'E-chat Application',
      pLink:'https://echat-application-react.herokuapp.com/'
    },
  ])
  const [reviews, setReviews] = useState([])
  const [supportCount, setSupportCount] = useState(0)
  async function getD() {
    let da= await fetch('http://localhost:3001/api/achal/getData')
    let data = await da.json()
    setSupportCount(data.resp2[0].supportCount);
    setReviews(data.resp)
  }
   useEffect(() => {
      getD()
      return()=>{
        getD()
      }
   },[])
   
  return (
    <div className="app">
      <Routes>
        <Route exact path={'/'} element={<Mars/>} />
          <Route path={'/profile/achal'} element={<Profilepage supportCount={supportCount} skillsData={skillsData} projectsData={projectsData}/>} />
          <Route path={'/instant/help'} element={<HelpPage/>} />
          <Route path={'/dear/clients'} element={<ClientsPage reviews={reviews} setReviews={setReviews}/>} />
          <Route path={'*'} element={<Navigate to="/"/>} />
    </Routes>
    </div>
  );
}

export default App;
