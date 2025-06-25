export interface Review {
  id: string
  name: string
  review: string
  date: string
}

export interface Reviews {
  ru: Review[]
  en: Review[]
}

export interface ReviewState {
  reviews: Reviews
  currentPage: number
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
  language: "ru" | "en"
}
