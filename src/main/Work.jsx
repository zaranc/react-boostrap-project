import React from 'react'

const Work = () => {
  return (
    <section class="work py-md-5 py-4" id="work">
    <div class="container py-md-5 py-4">
      <div class="row">
        <div class="col-6">
          <div class="divider-shape"></div>
          <h2>Our Works</h2>
          <p>This is how we work.</p>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-center">
          <a href="#" class='btn btn-main'>View All</a>
        </div>
      </div>
      <div>
        <div class="row">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Work