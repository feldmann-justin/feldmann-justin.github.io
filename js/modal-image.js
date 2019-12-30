Vue.component('modal-img', {
    props: ['image'],
    template: '<img :src="image.url" :alt="image.alt" :height="image.height" :width="image.width">'
})