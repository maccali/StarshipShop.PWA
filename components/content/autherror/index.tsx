import { IoIosKey } from "react-icons/io";

import Button from '../../utils/button'
import PageError from '../../utils/errorpage'


function AuthError() {

  function toLogin() {
    window.location.href = '/'
  }

  return (
    <>
      <PageError
        statusCode={401}
        message="Você não tem Acesso Aqui"
        title="Autenticação"
      >
        <Button title="Entrar No Sistema" action={() => toLogin()} pos>
          <span>Entrar no Sistema</span>
          <IoIosKey />
        </Button>
      </PageError>
    </>
  )
}

export default AuthError
