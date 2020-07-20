setTimeout(function() {
  console.log('老铁，我是被 setTimeout 派发的')
}, 0)

setImmediate(function() {
  console.log('老铁，我是被 setImmediate 派发的')
})