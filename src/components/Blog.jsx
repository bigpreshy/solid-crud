import { For, createResource } from "solid-js";
import solidimage from "../assets/images/solid.jpg";

const getBlogs = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/6a1613c7646f4a908158592cfdb448aa/blog"
  );
  return response.json();
};

function Blog() {
  const [blog] = createResource(getBlogs);
  return (
    <Show when={blog()}>
      <For each={blog()}>
        {(eachblog) => (
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
                    {eachblog.tag}
                  </a>
                  <h5>
                    <a
                      href="blog-details.html"
                      class="btn-link stretched-link text-reset fw-bold"
                    >
                      {eachblog.title}
                    </a>
                  </h5>
                  <div class="d-none d-sm-inline-block">
                    <p class="mb-2">{eachblog.text}</p>

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
        )}
      </For>
    </Show>
  );
}
export default Blog;
