function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) message = "Something wnet wrong";
      else message = error.response.message;

      console.log(message);

      return Promise.reject(error);
    }
  }
}
