import "../assets/css/style.css";
import { type VoidComponent } from "solid-js";
import { A, Router, Route, Routes } from "@solidjs/router";
import Blog from '../components/Blog';
import BlogDetail from '../components/BlogDetail';


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
      <Router>
      <Routes>
        <Route path='/blog/:_id' component={BlogDetail}/>       
      </Routes>
      </Router>
    </main>
  );
};

export default Home;
