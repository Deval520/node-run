function print() {
  let args = Array.prototype.slice.apply(arguments)
  args.unshift("[v2] print:")
  return console.log.apply(console,args)
}
exports.print = print
