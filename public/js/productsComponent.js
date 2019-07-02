Vue.component('products', {
    props: ['amount'],
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
            error: false,
            errorText: "",

        }
    },
    mounted() {
       
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },

    methods: {
        filter(textFilter) {

            const regexp = new RegExp(textFilter, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name))

        },
    },

    template:
        `<div class="container products-flex">
            <error v-if="error"         
            :error-text = "errorText"
            ></error>
            <product-item
            v-for="product of filtered.slice(0, amount)"
            :key="product.id_product"
            :product-item = "product"
            ></product-item>   
        </div>`,
})

Vue.component("productItem", {
    props: ['productItem', 'imgProduct'],
    template:
        `<div class="products_block">
            <a href="SinglePage.html"> <img class="product_img" :src="productItem.img" alt="productItem.product_name"></a>
            <div class="product-text-box">
                <a href="SinglePage.html" class="product-text">
                {{productItem.product_name}}
                </a>
                <p class="products_text_pink">{{productItem.price}} руб.</p>
            </div>
            <a class="product-add"  @click="$root.$refs.cart.addProduct(productItem)"><img src="img/cart_b.svg" alt="cart">Add to Cart</a>

        </div>`,

})

