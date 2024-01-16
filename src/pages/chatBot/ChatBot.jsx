import { useState } from "react";
import { useDarkMode } from "../../hooks/darkmodeHook/UseDarkMode";
import styles from "./ChatBot.module.css";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_KEY = import.meta.env.VITE_API_KEY;

const questions = [
  "general",
  "coffees",
  "ice-creams",
  "tables",
  "dishes",
  "drinks",
];

const getPromps = (question, input) => {
  let prompt;
  switch (question) {
    case "general":
      prompt = input;
      break;
    case "coffees":
      prompt = `Answer question related to these coffees only: Coffees
      {
        "title": "Americano",
        "price": $3,
      },
      {
        "title": "Cappucino",
        "price": $2,
      },
      {
        "title": "Cold Brew",
        "price": $3,
      },
      {
        "title": "Iced Coffee",
        "price": $4,
      },
      {
        "title": "Latte",
        "price": $5,
      },
      {
        "title": "Black",
        "price": $7,
      },
      {
        "title": "Expresso",
        "price": $9,
      },
      {
        "title": "Cortado",
        "price": $10,
      },
      {
        "title": "Frappuccino",
        "price": $13,
      },
      {
        "title": "Macchiato",
        "price": $10,
      },
        "title": "Breve",
        "price": $9,
      },
      {
        "title": "Red eye",
        "price": $12,
      }: ${input}, else say: I only answer questions related to coffees in the menu!`;
      break;
    case "ice-creams":
      prompt = `Answer questions related to these ice-creams only: Ice-creams
        {
          "title": "Waffle cone",
          "price": $4,
        },
        {
          "title": "Chocolate strawberry",
          "price": $2,
        },
        {
          "title": "Green ice-cream",
          "price": $3,
        },
        {
          "title": "White ice-cream",
          "price": $2,
        },
        {
          "title": "Chocolate Vanilla",
          "price": $5,
        },
        {
          "title": "Pink ice-cream",
          "price": $2,
        },
        {
          "title": "Cherry ice-cream",
          "price": $4,
        },
        {
          "title": "Waffle ice-cream",
          "price": $9,
        },
        {
          "title": "Neapolitan ice-cream",
          "price": $9,
        },
        {
        
          "title": "Milk ice-cream",
          "price": $5,
        },
        {
          "title": "Vanilla and chocolate",
          "price": $5,
        }: ${input}, else say: I only answer questions related to ice-creams in the menu! `;
      break;
    case "tables":
      prompt = `Answer questions related to these tables only: Tables
          {
            "status": "Standart table",
          },
          {
            "status": "Vip table",
          }: ${input}, else say: I only answer questions related to tables!`;
      break;
    case "dishes":
      prompt = `Answer questions related to these dishes only: Dishes
      {
        title: "Egg",
      },
      {
        title: "Hamburger",
      },
      {
        title: "Nuggets",
      },
      {
        title: "Sushi-Platter",
      },
      {
        title: "Fresh Salad",
      },
      {
        title: "Spaghetti",
      },
      {
        id: 3,
        title: "Dessert"
      },
      {
        title: "Samosa",
      }: ${input}, else say: I only answer questions related to dishes in the menu!`;
      break;
    case "drinks":
      prompt = `Answer questions related to these dishes only:   Drinks 
      {
        title: "Black coffee",
      },
      {
        title: "Coke",
      },
      {
        title: "Water",
      },
      {
        title: "Fanta",
      },
      {
        title: "Cappuccino",
      },
      {
        title: "Americano",
      },
      {
        title: "Red Eye",
      },
      {
        title: "Expresso",
      }: ${input}, else say: I only answer questions related to drinks in the menu!`;
      break;
    default:
      prompt = input;
  }
  return prompt;
};

export const ChatBot = () => {
  const [darkMode] = useDarkMode();
  const [userText, setUserText] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [questionType, setQuestionType] = useState("general");
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userText.trim() !== "") {
      try {
        setSpinner(true);
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "AI Assistant",
              },
              {
                role: "user",
                content: getPromps(questionType, userText),
              },
            ],
          }),
        });
        const data = await response.json();
        setSpinner(false);
        setGptResponse(data.choices[0].message.content);
        console.log(data.choices[0].message.content);
      } catch (error) {
        setSpinner(false);
        console.error(error);
      }
    } else {
      handleOpenSnackBar();
    }
  };
  return (
    <>
      <section
        style={{
          backgroundColor: darkMode ? "#003566" : "#fefae0",
          transition: ".3s ease",
        }}
        className={styles.chatBot_section}
      >
        <h1
          style={{
            fontSize: "30px",
            textAlign: "center",
            color: darkMode ? "white" : "brown",
          }}
        >
          AI Chatbot
        </h1>
        <div className={styles.question_btns}>
          {questions.map((question) => (
            <Button
              variant="contained"
              key={question}
              sx={{
                margin: "10px",
                border: questionType === question ? "2px solid red" : "",
              }}
              onClick={() => setQuestionType(question)}
            >
              {question}
            </Button>
          ))}
        </div>
        <h2
          style={{ color: darkMode ? "white" : "brown", textAlign: "center" }}
        >
          Question type: {questionType}
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            value={userText}
            sx={{
              backgroundColor: "white",
              width: "100%",
              maxWidth: "500px",
              margin: "20px",
            }}
            onChange={(e) => setUserText(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ height: "55px", margin: "20px" }}
          >
            Submit
          </Button>
        </form>
        {spinner ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="success" />
          </Box>
        ) : (
          gptResponse && (
            <div className={styles.gpt_container}>
              <div className={styles.response_container}>
                <h3 style={{ color: "white" }}>{gptResponse}</h3>
              </div>
            </div>
          )
        )}
        <Snackbar
          open={snackBar}
          autoHideDuration={4000}
          onClose={() => handleCloseSnackBar()}
        >
          <Alert
            onClose={() => handleCloseSnackBar()}
            severity="error"
            sx={{ width: "100%" }}
          >
            Ask a question before submitting!
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};
