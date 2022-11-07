export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    payload:{
        id:new Date().getTime().toString(),
        data:data,
    }
  };
};

export const deleteTodo = () => {

  return {
    type: 'DELETE_TODO',
    
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id,
  };
};
