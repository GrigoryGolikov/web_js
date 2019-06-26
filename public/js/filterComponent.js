Vue.component('filter-products', {
    data() {
        return {
            textFilter: "",
        }
    },


    template:
    `<form action="#" method="post" class="search-form"  @submit.prevent="$root.$refs.products.filter(textFilter) ">
        <input class="header-left-input" type="text" v-model="textFilter" placeholder="Search for Item...">
        <button class="header-left-submit" type="submit"><i class="fas fa-search"></i></button>
    </form>`

})

