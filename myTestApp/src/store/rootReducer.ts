import { combineReducers } from "@reduxjs/toolkit"
import reviewReducer from "./reviewReducer"

const rootReducer = combineReducers({
  reviews: reviewReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
