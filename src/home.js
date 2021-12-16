import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:9000/user/successful", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homePage">
      <h2>{data.message}</h2>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/signin");
        }}
      >
        logout
      </Button>
    </div>
  );
}
