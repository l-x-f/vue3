const layer = window.layer

export const Message = (message, callback) => {
  layer.msg(
    message,
    {
      offset: '15vh',
      time: 1500,
      anim: 5
    },
    callback
  )
}
