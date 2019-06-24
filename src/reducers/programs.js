const programReducer = (state=[], action) => {
    switch (action.type) {
      case "SET_PROGRAM":
        {
          return action.payload
        }
      case "DELETE_PROGRAM":
          {
             return state.filter(program=>{
                  if(program._id!==action.payload._id)
                  return program;
              })
          }
      default:
        return state
  
    }
  }
  
  export default programReducer