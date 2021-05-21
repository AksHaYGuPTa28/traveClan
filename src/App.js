import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./Components/Table/Table";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bidtable from "./Components/Table/bidTable";

const App = () => {
  useEffect(() => {
    fData();
  }, []);

  const [fetchData, setfetchData] = useState([]);

  console.log(fetchData);

  const fData = () => {
    axios({
      url: "https://intense-tor-76305.herokuapp.com/merchants",
      method: "GET",
    })
      .then((response) => {
        setfetchData(response.data);
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/"
            component={(props) => <Table data={fetchData} />}
            exact
          />
          <Route
            path="/bid"
            component={(props) => <Bidtable data={fetchData} />}
            exact
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
