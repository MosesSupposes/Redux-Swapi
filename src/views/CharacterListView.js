import React, { Component } from "react"
import { connect } from "react-redux"

import { CharacterList } from "../components"
import { fetchCharacters  } from '../actions'

class CharacterListView extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchCharacters()
  }

  render() {
    if (this.props.fetching) {
      <h2>Fetching Star Wars Characters...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}

function mapDispatchToProps() {
  return {
    fetchCharacters
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps()
)(CharacterListView)