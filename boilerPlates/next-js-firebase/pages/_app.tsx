import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useUser } from "../hooks/useUser/useUser";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { login, user } = useUser(router);

  useEffect(() => {
    console.log(login, user)
  })

  return (
    <div className="_app">
      <Header />
      <Component {...pageProps} user={user} login={login} />
      <Footer />
    </div>
  );
};

// export const getInitialProps: Get = async () => {

//   console.log(user);

//   return {
//     props: {
//       login: login,
//     },
//   };
// };

export default MyApp;
