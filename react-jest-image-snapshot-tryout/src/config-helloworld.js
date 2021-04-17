const HELLO='world'

function forceExit(){
  expect(true).toBe(false)
  process.exit(-1)

}

module.exports={
  HELLO,
  forceExit
}