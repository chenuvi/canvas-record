export function canvasEvent(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth - 60
  canvas.height = 400
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0, canvas.width,canvas.height)
  console.log('ctx: ', ctx);

  let drawColor = 'black'
  let drawWidth = '2'
  


  canvas.addEventListener('mousedown', () => {

  })

  canvas.addEventListener('mouseup', () => {

  })


}
