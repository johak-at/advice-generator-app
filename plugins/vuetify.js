// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
    dark: false,
    colors: {
        primary: '#E4003A',
        secondary: '#005577',
        accent: '#F7A823',
        error: '#E4003A',
        info: '#005577',
        warning: '#F7A823'
    }
}
const myCustomDarkTheme = {
    dark: true,
    colors: {
        primary: '#E4003A',
        secondary: '#005577',
        accent: '#F7A823',
        error: '#E4003A',
        info: '#005577',
        warning: '#F7A823'
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'myCustomDarkTheme',
            themes: {
                myCustomLightTheme,
                myCustomDarkTheme
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
