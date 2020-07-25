export const initialTodoState = {
    task: 'Learn about reducers',
    completed: false,
    id: '1'
}

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "TOGGLE_COMPLETED":
            return state.map((todo, index) =>
        (index === action.index)
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
        case "ADD_TODO":
            return [
                ...state,
                {
                task: action.task,
                completed: false,
                id: Date.now()
                }
            ];
            case "REMOVE_TODOS":
                return state.filter(( task, index) => task.completed === false);
        default:
            return state;
    }
    
};