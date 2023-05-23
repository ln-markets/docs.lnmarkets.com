import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTelegram, faTwitter)

export default ({ app, options, router }) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
