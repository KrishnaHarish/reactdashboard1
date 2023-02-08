import * as React from "react";
import * as ReactDOM from "react-dom/client";
import axios from "axios";
import Button from "@mui/material/Button";

function MyApp() {
  const [response, setResponse] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://onfise.com/procom/v1/api/procomAPI.php")
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Button variant="contained">Hello World</Button>
      <p>{response}</p>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
