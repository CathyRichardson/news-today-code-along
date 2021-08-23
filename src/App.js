import React, { Component } from 'react';
// import axios from 'axios';
import SideBar from './components/shared/SideBar/SideBar';
import HackerNews from './components/HackerNews/HackerNews'
import Reddit from './components/Reddit/Reddit'
import Medium from './components/Medium/Medium'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement, deposit, changeNum } from './redux/reducer';
import { getCharacters } from './redux/reducerTwo';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countInput: 0,
    }
  }

  // componentDidMount(){
  //   axios.get('https://swapi.dev/api/people')
  //   .then((res) => this.props.getCharacters(res.data.results))
  //   .finally(() => this.props.setLoading(false))
  // }

  render() {
    return (
      <HashRouter>
        <div className='App'>
          <SideBar />
          <h1>{this.props.count}</h1>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
          <button onClick={this.props.deposit}>Deposit</button>
          <input onChange={(e) => this.setState({ countInput: e.target.value })} />
          <button onClick={() => this.props.changeNum(this.state.countInput)}>change count</button>
          {
            this.props.loading
              ? <h1>Loading...</h1>
              : (<ul>{this.props.characters.map(char => <li>{char.name}</li>)}</ul>)
          }
          <button onClick={this.props.getCharacters}>get characters</button>
          <Switch>
            <Route path='/hacker-news' component={HackerNews} />
            <Route path='/medium' component={Medium} />
            <Route path='/reddit' component={Reddit} />
          </Switch>
        </div>
      </HashRouter >
    );
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState);
  return {
    count: reduxState.reducer.count,
    dollars: reduxState.reducer.deposit,
    characters: reduxState.reducerTwo.characters,
    loading: reduxState.reducerTwo.loading
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  deposit,
  changeNum,
  getCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
