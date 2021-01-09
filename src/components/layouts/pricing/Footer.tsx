import React from 'react';

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="bootstrap-logo.svg" alt="" width="24" height="19" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Cool stuff</a></li>
              <li><a className="link-secondary" href="#">Random feature</a></li>
              <li><a className="link-secondary" href="#">Team feature</a></li>
              <li><a className="link-secondary" href="#">Stuff for developers</a></li>
              <li><a className="link-secondary" href="#">Another one</a></li>
              <li><a className="link-secondary" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Resource</a></li>
              <li><a className="link-secondary" href="#">Resource name</a></li>
              <li><a className="link-secondary" href="#">Another resource</a></li>
              <li><a className="link-secondary" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Team</a></li>
              <li><a className="link-secondary" href="#">Locations</a></li>
              <li><a className="link-secondary" href="#">Privacy</a></li>
              <li><a className="link-secondary" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
