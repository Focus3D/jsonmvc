import mountView from './mountView'
import forEach from 'lodash-es/forEach'
import subscribe from './../controllers/subscribe'

function start(instance) {
  let mount = instance.db.get('/config/ui/mount')
  mountView(mount.root, instance.views[mount.view].component)

  forEach(instance.controllers, (controller, name) => {
    controller.subscription = subscribe(instance.db, controller)
  })
}

export default start
