const Auth = {
  isAuth: () => {
    try {
      var token = localStorage.getItem('token')
      var end_date = localStorage.getItem('end_date')

      if ((Date.now() / 1000) > Number(end_date)) {
        Auth.resetToken();
        return false
      }

      return (token)
    } catch (err) {
      Auth.resetToken();
      return false
    }
  },

  saveToken: (token: string, expires_in: string) => {

    var end_date = (Date.now() / 1000) + Number(expires_in)

    localStorage.setItem('token', token)
    localStorage.setItem('expires_in', expires_in)
    localStorage.setItem('end_date', String(end_date))
  },

  resetToken: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expires_in')
    localStorage.removeItem('end_date')
  },

  getToken: () => {
    if (typeof localStorage === 'undefined') {
      return false
    }
    return {
      token: localStorage.getItem('token'),
      expires_in: localStorage.getItem('expires_in'),
      end_date: localStorage.getItem('end_date')
    }
  }
}

export default Auth

