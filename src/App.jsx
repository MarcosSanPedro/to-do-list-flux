// App.js
import { TodoListProvider } from './context/TodoListContext';
import TodoList from './components/TodoList';


function App() {
  return (
    <TodoListProvider>
      <div className="App">
        <h1 className="text-3xl font-semibold text-center my-4">Todo List</h1>
        <TodoList />
      </div>
    </TodoListProvider>
  );
}

export default App;
