import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LearningCircle/Home/Home";
import axios from "axios";
import Create from "./Pages/LearningCircle/Create/Create";
import Join from "./Pages/LearningCircle/Join/Join.jsx";

function App() {
  //Home Page state Variables
  const [districts, setDistricts] = useState("");
  const [colleges, setColleges] = useState("");

  const [district, setDistrict] = useState("");
  const [college, setCollege] = useState("");

  const [interests, setInterests] = useState("");
  const [interest, setInterest] = useState("");

  //Routing States
  const [code, setCode] = useState("");

  //Create Page State Variables
  const [create, setCreate] = useState({
    code: "",
    lead: {
      name: "",
      email: "",
      discord_id: "",
      karma: "",
    },
    passcode: "",
    college: college,
    phone: "",
    interest: interest,
  });

  //Join page State Variable
  const [join, setJoin] = useState({
    code: "",
    name: "",
    email: "",
    discord_id: "",
    karma: "",
    college: "",
    phone: "",
  });

  useEffect(() => {
    if (!districts) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/districts`)
        .then(function (response) {
          setDistricts(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (!interests) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/interests`)
        .then(function (response) {
          setInterests(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (district) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/colleges/${district}`)
        .then(function (response) {
          setColleges(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [district, college]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCode={setCode}
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                colleges={colleges}
                setCollege={setCollege}
                college={college}
                interests={interests}
                setInterest={setInterest}
                interest={interest}
              />
            }
          />
          <Route
            path="/create"
            element={
              <Create
                interest={interest}
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                setInterest={setInterest}
                interests={interests}
                college={college}
                setCollege={setCollege}
                colleges={colleges}
                create={create}
                setCreate={setCreate}
              />
            }
          />

          <Route
            path="/join"
            element={
              <Join
                code={code}
                join={join}
                setJoin={setJoin}
                districts={districts}
                district={district}
                setDistrict={setDistrict}
                college={college}
                setCollege={setCollege}
                colleges={colleges}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
