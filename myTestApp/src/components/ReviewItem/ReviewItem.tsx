import React from "react"
import { type Review } from "../../store/types"
import { formatClientName } from "../../utils"
import styles from "./ReviewItem.module.css"

interface ReviewItemProps {
  review: Review
}

class ReviewItem extends React.Component<ReviewItemProps> {
  render() {
    const { name, review, date } = this.props.review
    return (
      <div className={styles.reviewItem}>
        <div className={styles.header}>
          <span className={styles.name}>{formatClientName(name)}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <p className={styles.text}>{review}</p>
      </div>
    )
  }
}

export default ReviewItem
