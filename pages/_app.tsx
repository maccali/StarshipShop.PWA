// import 'tailwindcss/tailwindz.css'
import "../../public/libs/bootstrap/bootstrap.min.css?v=3";
import "../../public/custom/css/template.css?v=3";
import "../../public/custom/css/datepicker.css?v=2";
import "../../public/custom/css/btns.css?v=3";
import 'react-toastify/dist/ReactToastify.minimal.css';

import { AppProps } from "next/app";
import { AuthProvider } from "contexts/AuthContext";
import { RealTimeProvider } from "contexts/RealTimeContext";
import { Toast } from "components/toast";

import Meta from "utils/meta";
import Offline from "utils/offline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <RealTimeProvider>
          <Offline />
          <Meta />
          <Component {...pageProps} />
          <Toast />
        </RealTimeProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
