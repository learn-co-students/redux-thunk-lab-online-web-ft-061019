export const catsReducer = (
   state = {
      cats: [],
      loading: false
    }, action) => {
   console.log("Initial Reducer State: ", state)
   console.log("Reducer Action: ", action)
   switch (action.type) {
      case 'LOADING_CATS':
         return {
            cats: [...state.cats],
            loading: true
         }
      case 'ADD_CATS':
         return {
            ...state,
            cats: action.cats,
            loading: false
         }
      default:
         return state
   }
}

export default catsReducer