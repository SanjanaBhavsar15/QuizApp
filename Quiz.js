import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Alert ,Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";
function Quiz() {
  const [ans, setAns] = useState({});
  const [val, setVal] = useState();
  const [isAlert,setIsAlert]=useState(false)
  let data = [
    {
      Id: 1,
      Question: "which of the following is camel case?",
      Options: ["setVal", "SetVal", "set_val"],
      CorrectAns: "setVal",
    },
    {
      Id: 2,
      Question: "which type of language is Javascript?",
      Options: ["Statically Typed", "Dynamically Typed", "None of the above"],
      CorrectAns: "Dynamically Typed",
    },
    {
      Id: 3,
      Question: "Which of the following css has highest priority?",
      Options: ["Id selector", "Class selector", "Inline"],
      CorrectAns: "Inline",
    },
    {
      Id: 4,
      Question: "What is the correct command to create a new React project?",
      Options: [
        "npx create-react-app myReactApp",
        "npx create-react-app",
        "npm create-react-app",
      ],
      CorrectAns: "npx create-react-app myReactApp",
    },
    {
      Id: 5,
      Question: "Inside which HTML element do we put the JavaScript?",
      Options: ["<js>", "<javascript>", "<script>"],
      CorrectAns: "<script>",
    },
  ];

  const handleSubmit = () => {
    // Check if all questions have been answered
    let allAnswered = true;
    data.forEach((val) => {
      if (!ans[val.Id]) {
        allAnswered = false;
      }
    });

    if (!allAnswered) {
      setIsAlert(true)
      setTimeout(() => {
        setIsAlert(false)
      }, 3000);
     return;
    }

    console.log(ans);
    let score = 0;
    data.forEach((val) => {
      if (val.CorrectAns === ans[val.Id]) {
        score++;
      }
    });
    console.log(score);
    localStorage.setItem("score", score);
    navigate("/ResultQ");
  };


  const handleRadiobutton = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setVal(e.target.value, e.target.name);
    setAns({ ...ans, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  return (
    <>
      {isAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              <strong>Please answer all the questions before submitting!</strong>
            </Alert>
          </Stack>
        )}
      <div style={{ width: "90%", marginLeft: "5%" }}>
        {data.map((a) => (
          <div style={{ marginLeft: "1%", marginRight: "1%" }}>
            <h5>
              {a.Id}.Que:-{a.Question}
            </h5>
            <h6>
              Options:-
              {a.Options.map((op) => (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    onChange={(e) => {
                      handleRadiobutton(e);
                    }}
                    name={a.Id}
                    value={op}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {op}
                  </label>
                </div>
              ))}
            </h6>
            <hr />
          </div>
        ))}
        <center>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </center>
      </div>
    </>
  );
}
export default Quiz;
