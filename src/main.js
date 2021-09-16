import VueAutoHeightInput from './App.vue'
export default {
    install: (app) => {
        app.component('autoheight-input', VueAutoHeightInput);
    },

}
export { VueAutoHeightInput as AutoheightInput}
