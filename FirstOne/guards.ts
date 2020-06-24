import { setMaxListeners } from "cluster"

function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'Response header'
  result = 'Result'
}

class MyError {
  header = 'Error header'
  msg = 'Error msg'
}

function hanlde(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.msg
    }
  }
}

// ========================================

type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
  //.....
}

setAlertType('success')
setAlertType('warning')
// setAlertType('default')