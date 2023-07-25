import { ElNotification } from 'element-plus'

//提示
export function toast(msg, type= 'success', dangerouslySetInnerHTML = false) {
  ElNotification({
    message: msg ,
    type,
    dangerouslySetInnerHTML,
    duration:2000
    })
}

