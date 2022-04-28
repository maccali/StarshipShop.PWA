const ErrorHelper = {
  interpreter: (error: any) => {
    if (error == 'Error: Network Error') {
      return 'Erro de conexão verifique se está conectado'
    }
    if (error.status === 500) {
      return 'Ocoreu algum erro de comunicação'
    }
    return false
  }
}

export default ErrorHelper

