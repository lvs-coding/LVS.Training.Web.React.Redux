// State argument is not application state, only the state this
// reducer is responsible for
// state = null is used when the app launch and no books has been selected, state is
// set to null by default to avoid the reducer returns a "not defined" because it's not
// allowed and would raise an error
// Important this has to be a pure function NEVER change the state here with something
// like state.title = book.title
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state // returns current state
}