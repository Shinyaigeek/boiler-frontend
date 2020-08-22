import * as React from "react";

import { Style } from "../Style/Style"

export const Header = () => {
  return (
    <>
      <header>
          hello
      </header>
      <Style style={`
        header {
            color: white;
            background: black
        }
      `} />
    </>
  );
};
