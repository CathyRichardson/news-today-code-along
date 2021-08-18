import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import { connect } from 'react-redux';

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true }
  }
  render() {
    const articles = this.state.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.state.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

const mapStateToProps = ({ count, name }) => {
  return {
    count: count,
    name: name
  }
}

export default connect(mapStateToProps)(Medium);

const styles = {
  logo: { width: '250px' }
}