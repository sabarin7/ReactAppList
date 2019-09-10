
//  Action - type & payload
function requestAddIncr() {
    // debugger
    return {
        type: 'INCR',
    }
}


//  Action - type & payload
function requestAddDec() {
    return {
        type: 'DEC',
        
    }
}

// Add To Cart - Action Creato

export const  incAction = () => {
    // debugger
  return (dispatch => {
        dispatch(requestAddIncr());
    })  

}

export const  decAction = () => {
    // debugger
    return (dispatch => {
          dispatch(requestAddDec());
      })  
  
  }