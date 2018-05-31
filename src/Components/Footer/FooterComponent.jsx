import React from 'react';

function FooterComponent() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 widget">
              <h3 className="widget-title">Contact</h3>
              <div className="widget-body">
                <p>(443) 538-3280<br />
                  <a href="mailto:tconchie@gmail.com">tconchie@gmail.com</a>
                  <br />
                  <br />
                  Boulder, CO
                </p>
              </div>
            </div>
            <div className="col-md-3 widget">
              <h3 className="widget-title">Connect with me</h3>
              <div className="widget-body">
                <p className="follow-me-icons">
                  <a className="icon" href="https://www.github.com/tom-con"><i className="fa fa-github-square fa-2" /></a>
                  <a className="icon" href="https://www.linkedin.com/in/tconchie"><i className="fa fa-linkedin-square fa-2" /></a>
                  <a className="icon" href="https://www.facebook.com/tconchie"><i className="fa fa-facebook-official fa-2" /></a>
                  <a className="icon" href="https://www.flickr.com/photos/tconchie/"><i className="fa fa-flickr fa-2" /></a>
                  <a className="icon" href="https://www.twitter.com/javascirpt/"><i className="fa fa-twitter-square fa-2" /></a>
                </p>
              </div>
            </div>
            <a href="https://www.codewars.com/users/tomcon/">
              <img src="https://www.codewars.com/users/tomcon/badges/large" alt="Tom Conchie's codewars badge" />
            </a>
          </div>
        </div>
      </footer>
      <footer id="underfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 widget">
              <div className="widget-body">
                <p className="text-right">
                    Copyright &copy; 2017, Tom Conchie<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
