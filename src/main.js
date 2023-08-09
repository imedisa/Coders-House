import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

defineRule('required', required);
defineRule('email', email);
defineRule('phoneNumber', (param) => {
    const res = /^(\+98|0)?9\d{9}$/g.test(param);
    if (res) {
        return true
    }
    return 'Your phone is not correct'
});

// Configure VeeValidate
configure({
    generateMessage: localize({ en }),
    validateOnInput: true,
});
setLocale('en');

// defineRule('required', required);

app.mount('#app')