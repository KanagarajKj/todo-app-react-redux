const initialState = {
    list:[],
};

const todoReducers = (state=initialState, action)=> {
    switch (action.type) {
      case 'ADD_TODO':
        const { id, data } = action.payload;

        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };

      case 'REMOVE_TODO':
        const filteredList = state.list.filter((item) => item.id !== action.id);

        return {
          ...state,
          list: filteredList,
        };

      case 'DELETE_TODO':

        return {
          ...state,
          list: [],
        };
      default:
        return state;
    }
}

export default todoReducers;