import MD5 from "crypto-js/md5";

const MarvelHelper = {
  getHash: (
    publicKey: string,
    privateKey: string,
    ts: string,
  ) => {

    const stringForCripto = `${ts}${privateKey}${publicKey}`

    return MD5(stringForCripto).toString()
  },
  httpsTransform: (url: string) => {
    return url.replace(/^http:\/\//i, 'https://');
  }
}

export default MarvelHelper