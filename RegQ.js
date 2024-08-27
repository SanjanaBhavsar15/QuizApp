import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
function RegQ() {
  const [val, setVal] = useState({ Username: "" });
  const [isAlert, setIsAlert] = useState(false);
  const handleChange = (e) => {
    setVal({ ...val, Username: e.target.value });
  };

  const handleReg = () => {
    if (val.Username) {
      localStorage.setItem("val", JSON.stringify(val));
      navigation("/Quiz");
    } else {
      setIsAlert(true);
    }
  };
  let navigation = useNavigate();
  return (
    <>
    <center>
        <h1>Welcome to the To-Do List</h1>
      </center>
      <div>
        {isAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              <strong>This is an error alert — Enter Username!</strong>
            </Alert>
          </Stack>
        )}
      </div>
      <div style={{ marginTop: "10%" }}>
        <center>
          <TextField
            id="filled-basic"
            label="Username"
            style={{ width: "600px" }}
            variant="filled"
            onChange={(e) => handleChange(e)}
          />
        </center>
        <br />
        <center>
          <Button variant="contained" onClick={() => handleReg()}>
            Register
          </Button>
        </center>
      </div>
    </>
  );
}
export default RegQ;
