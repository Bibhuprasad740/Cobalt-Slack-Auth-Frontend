import axios from "axios";
import classes from "./App.module.css";
import { useState } from "react";
const BASE_URL = "http://localhost:8080/oauth/signin";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const authorizeSlackHandler = async () => {
    try {
      const response = await axios.get(BASE_URL);

      if (response.data.ok) {
        setIsAuthorized(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.app}>
      {isAuthorized && <p>You are connected to slack!</p>}
      {!isAuthorized && (
        <a
          className={classes.button}
          href={BASE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Authorize Slack
        </a>
      )}
    </div>
  );
  // <button onClick={authorizeSlackHandler}>Authorize Slack</button>
}

export default App;
