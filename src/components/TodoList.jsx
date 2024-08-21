import { useFetch } from "../hooks/useFetch";
import { TodoListItem } from "./TodoListItem";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./TodoList.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

export function TodoList() {
  const baseURL = "https://dummyjson.com/todos";
  const [todo, setTodo] = useFetch(baseURL, [], (result) => result.todos);

  const todoClickHandler = (todoID) => {
    setTodo((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <Grid>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul>
                {todo.map((currTodo) => (
                  <Item
                    className="item-box"
                    key={currTodo.id}
                    style={{
                      margin: "2px",
                      padding: "10px 20px",
                      fontSize: "16px",
                    }}
                  >
                    <TodoListItem
                      key={currTodo.id}
                      id={currTodo.id}
                      text={currTodo.todo}
                      isCompleted={currTodo.completed}
                      onClick={todoClickHandler}
                    />
                  </Item>
                ))}
              </ul>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
