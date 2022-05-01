import { BiLeftArrow } from "react-icons/bi"
import ErrorPage from "utils/errorpage"
import Button from "utils/button"


function MyApp() {
  return (
    <>
      <ErrorPage
        statusCode={404}
        message="Parece que entrou em uma página inexistente, volte ao caminho"
        title="404"

      >
        <Button title="Voltar" action={() => {
          history.go(-1);
        }}>
          <BiLeftArrow />
          <span>Voltar</span>
        </Button>
      </ErrorPage >
    </>
  )
}

export default MyApp