const initialState = [
  {
    id: 1,
    todo: "Recolectar flores",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  return state;
};

let todos = todoReducer();

const newTodo = { id: 2, todo: "Hacer fideo", done: false };


todos = todoReducer(todos, )
