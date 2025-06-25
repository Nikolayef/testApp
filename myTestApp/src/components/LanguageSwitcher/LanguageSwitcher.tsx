import React from "react"
import styles from "./LanguageSwitcher.module.css"
import type { RootState } from "../../store/rootReducer"
import { setLenguage } from "../../store/reviewReducer"
import { connect } from "react-redux"

type Language = "en" | "ru"

interface StateProps {
  language: Language
}

interface DispatchProps {
  setLenguage: (language: Language) => void
}

type LanguageSwitcherProps = StateProps & DispatchProps

class LanguageSwitcher extends React.Component<LanguageSwitcherProps> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as Language

    this.props.setLenguage(newLanguage)
  }

  render() {
    return (
      <div className={styles.switcher}>
        <select
          value={this.props.language}
          onChange={this.handleLanguageChange}
        >
          <option value='ru'>RU</option>
          <option value='en'>EN</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  language: state.reviews.language,
})

const mapDispatchToProps = {
  setLenguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
