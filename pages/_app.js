import React, { useLayoutEffect, useState } from 'react'

// External Libs
import '../public/libs/bootstrap/bootstrap.min.css'

// Custom styles
import '../public/custom/css/template.css'

// External Components
import 'react-datepicker/dist/react-datepicker.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Nav from '../components/utils/nav'
import Auth from '../helpers/Auth.ts'
import AuthError from '../components/content/autherror'
import Meta from '../components/utils/meta'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  // const router = useRouter();
  const [allowLoad, setAllowLoad] = useState(false);
  const [allowNav, setAllowNav] = useState(false);
  const [takeOff, setTakeOff] = useState(false);


  const allowEntryPoints = [
    '/',
    '/cart',
  ];

  const prohibitNavigationBars = [

  ];


  useLayoutEffect(() => {
    setTakeOff(false)
    var pathName = window.location.pathname

    if (!allowEntryPoints.includes(pathName)) {
      console.log(`💋👀 Verificando Autenticidade para rota "${window.location.pathname}"`)
      if (!Auth.isAuth()) {
        setAllowLoad(false)
      } else {
        setAllowLoad(true)
      }
    } else {
      console.log(`👌👍 Rota Livre "${window.location.pathname}"`)
      setAllowLoad(true)
    }

    if (!prohibitNavigationBars.includes(pathName)) {
      setAllowNav(true)
    }
    setTakeOff(true)
  }, [])

  return <>
    {takeOff ?
      allowLoad ?
        <>
          {allowNav ? <Nav /> : ''}
          <>
            <Meta />
            < Component {...pageProps} />
          </>
        </> :
        <AuthError />
      : ''}
  </>
}


