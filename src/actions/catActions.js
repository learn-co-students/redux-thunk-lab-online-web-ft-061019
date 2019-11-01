export function fetchCats(){
    return (dispatch) => {
        dispatch( { type: 'LOADING_CATS' })
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch( { type: 'ADD_CATS', cats: responseJSON.images })
        })
    }
  }
  
    /*
step 1: 
export const fetchCats = () => {
  return (dispatch) => {
 
  }
}
step 2: 

The first thing we want to do in this function is send a dispatch to indicate we're loading (fetching) the cats:

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
  }
}

step 3: Then, we call fetch(), dispatching the returned data:

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
  }
}
*/ 