import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App'
import components from '@/components/UI'

library.add(faInstagram, faTwitter, faYoutube)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
