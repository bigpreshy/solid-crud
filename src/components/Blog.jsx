import solidimage from '../assets/images/solid.jpg'
function Blog() {
  return (
    <>
      <div class="card bg-transparent border-0">
        <div class="row g-3">
          <div class="col-4">
            <img class="rounded" src={solidimage} alt="" />
          </div>
          <div class="col-8">
            <a
              href="#"
              class="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold"
            >
             Tech
            </a>
            <h5>
              <a
                href="blog-details.html"
                class="btn-link stretched-link text-reset fw-bold"
              >
                What is Solidjs? 
              </a>
            </h5>
            <div class="d-none d-sm-inline-block">
              <p class="mb-2">
              SolidJS is an exciting framework for web development that has been gaining traction in recent years. It has been created by Misko Hevery, the creator of Angular. 
.
              </p>

              <a class="small text-secondary" href="#!">
                {" "}
                <i class="bi bi-calendar-date pe-1"></i> Jan 22, 2022
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4" />
    </>
  );
}
export default Blog;
