import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Review } from "./types"

interface FetchedData {
  [key: string]: {
    name: string
    review: string
    date: string
  }
}

export const fetchReviews = createAsyncThunk<{
  ru: Review[]
  en: Review[]
}>("reviews/fetchReviews", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("../../data.json")
    if (!response.ok) {
      throw new Error("Server error!")
    }
    const data: { ru: FetchedData; en: FetchedData } = await response.json()

    const reviewsArrayRu = Object.keys(data.ru).map((key) => ({
      id: key,
      ...data.ru[key],
    }))
    const reviewsArrayEn = Object.keys(data.en).map((key) => ({
      id: key,
      ...data.en[key],
    }))

    return { ru: reviewsArrayRu, en: reviewsArrayEn }
  } catch (error: unknown) {
    return rejectWithValue(error instanceof Error && error?.message)
  }
})
