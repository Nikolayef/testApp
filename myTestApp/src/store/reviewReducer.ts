import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type ReviewState } from "./types"
import { fetchReviews } from "./apiUser"

const initialState: ReviewState = {
  reviews: { ru: [], en: [] },
  currentPage: 1,
  status: "idle",
  error: null,
  language: "ru",
}

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setLenguage(state, action: PayloadAction<"en" | "ru">) {
      state.language = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.reviews = action.payload
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })
  },
})

export const { setCurrentPage, setLenguage } = reviewSlice.actions
export default reviewSlice.reducer
