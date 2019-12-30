Vue.component('modal-body-section', {
    props: ['images'],
    template: `<div class="row text-center">
                    <div class="col-sm">
                        <modal-img v-for="image in images" v-bind:key="image.url" v-bind:image="image"></modal-img>
                    </div>
                </div>`
});