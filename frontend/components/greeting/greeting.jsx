import React from 'react';
import { Link } from 'react-router';

import SearchContainer from '../search/search_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let header;
    let login;
    let currentUser = this.props.currentUser
    if (currentUser) {
      header = (
        <ul id="user-dropdown-btn">
          <img src={ currentUser.image_url }
               alt={`Hello ${currentUser}`} />

          <button className="session-link"
                  onClick={ this.logout }>
            Log Out
          </button>
        </ul>
      );

      login = (<div></div>)
    } else {
      header = (
        <nav className="session-link">
          <Link to='/signup'>Sign Up</Link>
        </nav>
      );
      login = (<Link to='/login'>Log In</Link>)
    }

    return(
      <div className="header">
        <header className="header-fixed">
          <Link to='/'><h1>HappyMe</h1></Link>
          <SearchContainer />
          { header }
        </header>

        <section>
          <article className="nav">
            <nav className="feature-pages">
              <Link to='/'>
                <i className="fa fa-beer" aria-hidden="true"></i>
                Beers
              </Link>
              <Link to='/'>
                <i className="fa fa-glass" aria-hidden="true"></i>
                Cocktails
              </Link>
              <Link to='/'>
                <i className="fa fa-heart" aria-hidden="true"></i>
                Oysters
              </Link>
              <Link to='/'>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                Food
              </Link>
            </nav>
            { login }
          </article>
        </section>
      </div>
    )
  }
}

export default Greeting;
