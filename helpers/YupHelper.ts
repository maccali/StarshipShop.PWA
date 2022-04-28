import * as yup from "yup";

const YupHelper = {
  errorTreatment: (error: { inner: yup.ValidationError[]; }) => {

    type ErrorsFace = {
      field: string,
      message: string,
    }

    var errors: ErrorsFace[] = []

    error.inner.map((itemError: yup.ValidationError) => {
      console.log(itemError)
      var nodeError = {
        field: itemError.path,
        message: itemError.message
      }
      errors.push(nodeError)
    })

    return errors;
  },


}

export default YupHelper