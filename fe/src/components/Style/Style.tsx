import * as React from "react";

interface Props {
  style: string;
}

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

export const Style = (props: Props) => {
  return <style jsx>{props.style}</style>;
};
