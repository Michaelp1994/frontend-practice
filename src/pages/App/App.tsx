import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <main>
      This is a collection of front-end website mock ups built to practise
      front-end skills using React and Styled Components.
      <ul>
        <li>
          <Link to="/google">Google</Link>
        </li>
        <li>
          <Link to="/ableton">Ableton</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </main>
  );
};

export default App;
