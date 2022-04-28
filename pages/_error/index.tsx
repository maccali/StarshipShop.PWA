import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from '../../components/utils/button'
import ErrorPage from '../../components/utils/errorpage';

type ErrorFace = {
  statusCode: number
}

function Error({ statusCode }: ErrorFace) {

  var message = ''

  if (statusCode == 404) {
    message = 'This page does not exist'
  } else {
    message = 'Some error occurred'
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <ErrorPage
        statusCode={statusCode}
        message={message}
        title="Erro"
      >
        <Button title="Go Back" action={() => goBack()} >
          <AiOutlineArrowLeft />
          <span>Go Back</span>
        </Button>
      </ErrorPage>
    </>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
