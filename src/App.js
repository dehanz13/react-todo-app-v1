import "./App.css";
import TodoList from "./components/todoApp/TodoList";
// import NotesAppList from "./components/notesApp/notesAppList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      {/* <NotesAppList /> */}
    </div>
  );
}

export default App;
