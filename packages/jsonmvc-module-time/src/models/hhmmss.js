import padZero from './../fns/padZero'

const model = {
  path: '/time/hhmmss',
  args: {
    ms: '/time/ms'
  },
  fn: args => {
    let x = new Date(args.ms)
    let hh = padZero(x.getHours())
    let mm = padZero(x.getMinutes())
    let ss = padZero(x.getSeconds())

    return `${hh}:${mm}:${ss}`
  }
}

export default model
