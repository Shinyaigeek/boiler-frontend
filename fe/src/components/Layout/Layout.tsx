import * as React from "react";
import { Header } from "../Header/Header";

interface Props {
  children: React.ReactChild;
}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
