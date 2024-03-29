import React from 'react'

const Header = () => {
  return (
    <section class="header" id="header">
    <div class="intro py-md-5 py-4">
      <div class="container py-md-5 py-4">
        <div class="row">
          <div class="col-md">
            <div class="divider-shape"></div>
            <h1 class="my-5">We are the best at Building brands!</h1>
            <a href="#" class="btn btn-lg btn-main">Get Started</a>
          </div>
          <div class="col-md"></div>
        </div>
      </div>
  
    </div>
    <div class="intro-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-md-0 mb-2">
            <div class="card shadow-sm">
              <div class="card-body">
                <i class="ri-bar-chart-grouped-line ri-3x mb-5"></i>
                <h3 class="card-title">Card title</h3>
                <div class="divider-shape"></div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-md-0 mb-2">
            <div class="card shadow-sm">
              <div class="card-body">
                <i class="ri-pie-chart-2-fill ri-3x mb-5"></i>
                <h3 class="card-title">Card title</h3>
                <div class="divider-shape"></div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-md-0 mb-2">
            <div class="card shadow-sm">
              <div class="card-body">
                <i class="ri-rocket-fill ri-3x mb-5"></i>
                <h3 class="card-title">Card title</h3>
                <div class="divider-shape"></div>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header