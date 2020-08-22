import { NextRouter } from "next/router";

interface Props {
  router: NextRouter;
  path: "string";
  as?: "string";
}

export const handleRedirect = (router: NextRouter, path: string, as?:string) => {
  as
    ? router.push(path, as)
    : router.push(path);
};
