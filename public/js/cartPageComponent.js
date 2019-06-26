Vue.component('cartPage', {
    data() {
        return {
            cartUrl: `/getBasket.json`,
            carts: [],
            imgCart: `https://placehold.it/100x75`,
            cartVisibility: false,
        }
    },

    methods: {

        clearProduct(product) {
            let find = this.getItem(+product.id_product);
            this.$parent.deleteJson(`/api/cart/${find.id_product}`, { quantity: - find.quantity })
                .then(data => {
                    let index = this.carts.indexOf(find);
                    if (index >= 0) {
                        this.carts.splice(index, 1);
                        product.quantity = 0;
                        this.$root.$refs.cart.updateProduct(product);
                    }
                })

        },

        changeProduct(product) {
            if (product.quantity < 1) {
                product.quantity = 1;
            } 
            console.log(1)
            this.$parent.putJson(`/api/cart/${product.id_product}`, { quantity: product.quantity })
                .then(data => {
                    if (data.result) {
                        this.$root.$refs.cart.updateProduct(product);
                    }
                })

        },

        updateProduct(item) {
            let find = this.getItem(+item.id_product);
            find.quantity = +item.quantity;
            if (!find.quantity) {
                let index = this.carts.indexOf(find);
                if (index >= 0) {
                    this.carts.splice(index, 1);
                }
            }
        },

        cartSum() {
            let sum = 0;
            for (let item of this.carts) {
                sum += item.price * item.quantity;
            }
            return sum;
        },
        cartQuantity() {
            let sum = 0;
            for (let item of this.carts) {
                sum += item.quantity;
            }
            return sum;
        },

        getItem(id) {
            return this.carts.find(el => el.id_product === id);
        },
    },

    created() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.carts.push(el);
                }
            });
    },

    template:
        `<div>   
            <p v-if="!cartQuantity()" class="drop-cart-total drop-cart-clean">Корзина пуста</p>
            <div v-else>
                <cart-page-item 
                v-for="item of carts"
                :key="item.id_product"
                :img-cart="imgCart"
                :cart-item="item"
                @clearProduct="clearProduct"
                @changeProduct="changeProduct"
                ></cart-page-item>
            </div>    

        </div>`

})

Vue.component("cartPageItem", {
    props: ['cartItem', 'imgCart'],

    methods: {
        cartSum() {
            return this.cartItem.price * this.cartItem.quantity;
        },
    },
    template:
        ` <section class="products-cart-box" v-else>
        <div class="products-cart-left">
            <div class="products-cart-div-img">
                <a href="SinglePage.html"> <img class="products-cart_img" :src="cartItem.img"></a>
            </div>
            <div class="products-cart-details">
                <a href="SinglePage.html">
                    <h3 class="products-cart-h3">{{cartItem.product_name}}</h3>
                </a>
                <p class="products-cart-ph">Color: <span class="products-cart-p">Red</span></p>
                <p class="products-cart-ph">Size: <span class="products-cart-p">Xll</span></p>
            </div>
        </div>
        <div class="products-cart-right">
            <div class="products-cart-price products-cart-width">{{cartItem.price}} руб.</div>
            <div class="products-cart-width">
                <input class="products-cart-quantity-border" type="number" min="1" max="100" value="1" v-model="cartItem.quantity" @input="$emit('changeProduct', cartItem)">
            </div>
            <div class="products-cart-shipping products-cart-width">FREE</div>
            <div class="products-cart-subtotal products-cart-width">{{cartSum()}}</div>
            <a class="products-cart-action products-cart-width" @click="$emit('clearProduct', cartItem)"><i class="fas fa-times-circle"></i></a>
        </div>

    </section>  `
})

/*Vue.component('cartPageCounter', function (resolve, reject) {
    setTimeout(function () {
      // Передаём определение компонента в коллбэк resolve
      resolve({
        template: `<div class="cart-counter">{{$root.$refs.cart.cartQuantity()}}</div>`
      })
    }, 3000)
})*/

Vue.component("subTotal", {
    template:
        ` <span class="sending-subtotal-price"> {{$root.$refs.cartPage.cartSum()}} руб</span>`
})

Vue.component("grandTotal", {
    template:
        ` <span class="sending-grand-price">{{$root.$refs.cartPage.cartSum()}} руб</span>`
})

