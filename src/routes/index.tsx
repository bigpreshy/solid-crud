import "../assets/css/style.css";
import { type VoidComponent } from "solid-js";
import { A } from "solid-start";
import Blog from '../components/Blog'

const Home: VoidComponent = () => {
  return (
    <main>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="bg-mode p-4">
              <h1 class="h4 mb-4">Latest blogs</h1>
              <Blog />
            

            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;
