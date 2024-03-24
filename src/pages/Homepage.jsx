import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>

      <Link to="/app">Go to the app</Link>
      {/* <a href=""></a> if we use "a" element, this will cause a reload */}
    </div>
  );
}

export default Homepage;
