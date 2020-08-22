import * as React from "react";

import { render } from "react-dom";
import { Routing } from "../Routing/Routing";

const App = () => {
  return (
    <div className="content">
      <Routing />
    </div>
  );
};

render(<App />, document.getElementById("app"));
