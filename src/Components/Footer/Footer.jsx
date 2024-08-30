import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <p>Talent Trek on all social platforms</p>

            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter to stay updated on the latest job listings and industry news.</p>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="copyright">Copyright 2023 Recruitment Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;