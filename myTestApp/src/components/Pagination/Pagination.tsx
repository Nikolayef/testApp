import React from "react"
import styles from "./Pagination.module.css"

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

class Pagination extends React.Component<PaginationProps> {
  render() {
    const { currentPage, totalItems, itemsPerPage, onPageChange } = this.props
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    if (totalPages <= 1) {
      return null
    }

    const pageNumbers = []
    const maxPagesToShow = 4 // max ... mid ... max
    // const ellipsis = (
    //   <span key='ellipsis' className={styles.ellipsis}>
    //     ...
    //   </span>
    // )

    if (totalPages <= maxPagesToShow + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1) // min
      if (currentPage > 3) {
        pageNumbers.push("...")
      }

      // mid
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 3) {
        start = 2
        end = 4
      }

      if (currentPage >= totalPages - 2) {
        start = totalPages - 3
        end = totalPages - 1
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i)
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...")
      }
      pageNumbers.push(totalPages) // max
    }

    return (
      <div className={styles.pagination}>
        {pageNumbers.map((num, index) =>
          typeof num === "number" ? (
            <button
              key={index}
              onClick={() => onPageChange(num)}
              className={currentPage === num ? styles.active : ""}
            >
              {num}
            </button>
          ) : (
            <span key={index} className={styles.ellipsis}>
              ...
            </span>
          )
        )}
      </div>
    )
  }
}

export default Pagination
