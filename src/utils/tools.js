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

export const updateListItem = (list, comparatorFn, updaterFn) => list.map(item => {
  if (comparatorFn(item)) {
    item = {
      ...item,
      ...updaterFn(item)
    }
  }
  return item
})


export const getCartTotalPrice = (cartList) => {
  const total = cartList.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + ((Number(quantity) * Number(product.price)))
  }, 0)

  return formatCurrency(total)
}

export const getCartTotalCount = (cartList) => {
  return cartList.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + Number(quantity)
  }, 0)
}


export const getOrderTotalPrice = (orderItems) => {
  const total = orderItems.reduce((acc, curr) => {
    const { quantity, price } = curr
    return acc + Number(price)
  }, 0)

  return formatCurrency(total)
}

export const getOrderTotalCount = (orderItems) => {
  return orderItems.reduce((acc, curr) => {
    const { quantity } = curr
    return acc + Number(quantity)
  }, 0)
}
