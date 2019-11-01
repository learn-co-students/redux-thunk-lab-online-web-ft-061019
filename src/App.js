import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList'
import fetchCats from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    console.log("App Props", this.props)
    if (this.props.loading) {
      return (
        <div>
          <h1>CatBook</h1>
          <h2>Loading up cat pics...</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h1>CatBook</h1>
          <CatList catPics={this.props.catPics} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { 
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

