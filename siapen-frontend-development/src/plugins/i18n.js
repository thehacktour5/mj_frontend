import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  pt: require('../locales/pt-BR.json')
}

const i18n = new VueI18n({
  locale: 'pt',
  messages,
  silentTranslationWarn: true
})

export default i18n
