// import 'tailwindcss/tailwindz.css'
import "./../public/custom/css/template.css?v=3";
import "./../public/libs/bootstrap/bootstrap.min.css?v=3";
// import 'react-toastify/dist/ReactToastify.minimal.css';

import { AppProps } from "next/app";


import Meta from "../components/utils/meta";
import Nav from "../components/utils/nav";
// import Offline from "../components/utils/offline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Nav />
      <Meta />
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
