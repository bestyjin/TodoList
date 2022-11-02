import { useState } from "react";
import "./App.css";
import { DarkModeContextProvider } from "./components/context/DarkModeContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeContextProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeContextProvider>
  );
}

export default App;
