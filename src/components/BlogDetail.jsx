import { useParams } from "@solidjs/router"
import { createResource } from "solid-js"

const getBlog = async (_id) => {
  const response = await fetch('https://crudcrud.com/api/64b773f6659a41b69d678369943f3c5f/blog/' + _id)

  return response.json()
}

export default function BlogDetail() {
  const params = useParams();

  const [blogdetail] = createResource(params._id, getBlog);

  console.log(blogdetail);

  return (
    <div class="my-7">
      <Show when={blogdetail()}>
        <div class="">
          <div class="">
            <h2 class="">{blogdetail.title}</h2>

            <h2>{blogdetail.body}</h2>
           
          </div>

        </div>
      </Show>
    </div>
  )
}