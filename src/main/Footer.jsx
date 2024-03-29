import React from 'react'

const Footer = () => {
  return (
    <section class="footer-bar pt-4" id="footer-bar">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-3">
          Copyright &copy; 2020, Cloc Digital.
        </div>
        <div class="col-md-6 d-md-flex justify-content-end">
          <ul class="list-unstyled">
            <li class="d-sm-inline ps-2 mb-md-0 mb-2"><a href="#">Disclaimer</a></li>
            <li class="d-sm-inline ps-2 mb-md-0 mb-2"><a href="#">Privacy</a></li>
            <li class="d-sm-inline ps-2 mb-md-0 mb-2"><a href="#">Terms of Services</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer