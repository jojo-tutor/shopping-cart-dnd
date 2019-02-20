export const makeCancelable = (promise) => {
  let hasCanceled = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled ? reject({ isCanceled: true }) : resolve(val)
    )
    promise.catch((error) =>
      hasCanceled ? reject({ isCanceled: true }) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true
    },
  }
}

export const formatCurrency = (number, numberFormat) => {
  numberFormat = numberFormat || {
    locale: 'en-ph',
    options: {
      style: 'currency',
      currency: 'Php'
    }
  }

  return new Intl.NumberFormat(
    numberFormat.locale,
    numberFormat.options
  ).format(Number(number))
}