
const model = {
  path: '/time/mm',
  args: {
    ms: '/time/ms'
  },
  fn: args => args.ms - (args.ms % (60 * 1000))
}

export default model
