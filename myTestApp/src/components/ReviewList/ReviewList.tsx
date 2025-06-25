import React from "react"
import { connect } from "react-redux"
import { type RootState } from "../../store/rootReducer"
import { fetchReviews } from "../../store/apiUser"
import { setCurrentPage } from "../../store/reviewReducer"
import ReviewItem from "../ReviewItem/ReviewItem"
import Pagination from "../Pagination/Pagination"
import { type Reviews } from "../../store/types"
import styles from "./ReviewList.module.css"

interface StateProps {
  reviews: Reviews
  currentPage: number
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
  language: "en" | "ru"
}

interface DispatchProps {
  fetchReviews: () => void
  setCurrentPage: (page: number) => void
}

type ReviewListProps = StateProps & DispatchProps

class ReviewList extends React.Component<ReviewListProps> {
  private readonly REVIEWS_PER_PAGE = 10

  componentDidMount() {
    if (this.props.status === "idle") {
      this.props.fetchReviews()
    }
  }

  handlePageChange = (page: number) => {
    this.props.setCurrentPage(page)
  }

  render() {
    const { reviews, currentPage, status, error, language } = this.props

    if (status === "loading") {
      return <div>Загрузка отзывов...</div>
    }

    if (status === "failed") {
      return <div>Ошибка: {error}</div>
    }

    const indexOfLastReview = currentPage * this.REVIEWS_PER_PAGE
    const indexOfFirstReview = indexOfLastReview - this.REVIEWS_PER_PAGE
    const currentReviews = reviews[language].slice(
      indexOfFirstReview,
      indexOfLastReview
    )

    return (
      <div className={styles.reviewList}>
        {currentReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalItems={reviews[language].length}
          itemsPerPage={this.REVIEWS_PER_PAGE}
          onPageChange={this.handlePageChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  reviews: state.reviews.reviews,
  currentPage: state.reviews.currentPage,
  status: state.reviews.status,
  error: state.reviews.error,
  language: state.reviews.language,
})

const mapDispatchToProps = {
  fetchReviews,
  setCurrentPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)
