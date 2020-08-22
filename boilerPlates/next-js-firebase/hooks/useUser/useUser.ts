import { useState, useEffect } from "react";
import { factory } from "./factory";

// TODO: 型のために蜜が生じるの辛い😢
import { User } from "firebase";
import { NextRouter } from "next/router";
import { handleRedirect } from "../../modules/handleRedirect/handleRedirect";

export const useUser = (router: NextRouter) => {
  const [user, setUser] = useState<User>(null);
  console.log("useUser: root");

  let fact;

  useEffect(() => {
    console.log("useUser: useEffect");
    if (!fact) {
        fact = factory();
    }

    fact.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        handleRedirect(router, "/Login");
      }
    });
  }, []);

  const login = async () => {
    console.log("useUser: login");
    if(fact){
        const credential = await fact.login();
        setUser(credential.user);
        handleRedirect(router, "/")
    }
  };

  const logout = async () => {
    console.log("useUser: logout");
    if(fact){
        await fact.logout();
        setUser(null);

    }
  };

  return { user, login, logout };
};
