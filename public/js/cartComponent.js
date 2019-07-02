Vue.component('cart', {
    data() {
        return {
            cartUrl: `/getBasket.json`,
            carts: [],
            imgCart: `https://placehold.it/100x75`,
            cartVisibility: false,
        }
    },
 
    methods: {
        addProduct(product) {
            let find = this.getItem(+product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: find.quantity+1})
                .then(data => {
                    if(data.result){
                        find.quantity++
                    }
                })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result){
                            this.carts.push(prod);
                        }
                    })
            }       
        },
        remProduct(product) {
            let find = this.getItem(+product.id_product);
            if(find.quantity >1){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: find.quantity-1})
                .then(data => {
                    if(data.result){
                        find.quantity--
                        if(this.$root.$refs.cartPage){
                            this.$root.$refs.cartPage.updateProduct(product);
                        }
                    }
                })
            } else {
                
                this.$parent.deleteJson(`/api/cart/${find.id_product}`, {quantity: -1})
                    .then(data => {
                        let index = this.carts.indexOf(find);
                        if (index >= 0) {
                            this.carts.splice(index, 1);
                            if(this.$root.$refs.cartPage){
                                product.quantity = 0;
                                this.$root.$refs.cartPage.updateProduct(product);
            
                            }
    
                        }
                    })
            }     

        },
        clearProduct(product) {
            let find = this.getItem(+product.id_product);
            this.$parent.deleteJson(`/api/cart/${find.id_product}`, {quantity: - find.quantity })
            .then(data => {
                let index = this.carts.indexOf(find);
                if (index >= 0) {
                    this.carts.splice(index, 1);
                }
            })

        },

        updateProduct(item){
            let find = this.getItem(+item.id_product);
            find.quantity =  +item.quantity;
            if(!find.quantity){
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

    mounted() {
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
            <cart-item 
            v-for="item of carts"
            :key="item.id_product"
            :img-cart="imgCart"
            :cart-item="item"
            @remProduct="remProduct"
            ></cart-item>

            <div class="drop-cart-under">
                <p class="drop-cart-total">TOTAL</p>
                <p class="drop-cart-total">{{cartSum()}} руб </p>
            </div>
            <a href="checkout.html">
                <div class="drop-cart-button-pinc">Checkout</div>
            </a>
            <a href="ShoppingCart.html">
                <div class="drop-cart-button">go to cart</div>
            </a>
        </div>    
    </div>`
})

Vue.component("cartItem", {
    props: ['cartItem', 'imgCart'],
    template:

    `<div class="drop-cart-product">
        <div class="drop-cart-div-img">
            <a href="SinglePage.html"> <img class="drop-cart_img"
            :src="cartItem.img"></a>
        </div>
        <div class="drop-cart-details">
            <h3 class="drop-cart-h3">{{cartItem.product_name}}</h3>
            <a href="#" class="starts"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star-half-alt"></i> </a>
            <p class="drop-cart-p">{{cartItem.quantity}}  x {{cartItem.price}} руб</p>
        </div>
        <div class="drop-cart-action-box">
            <a href="#" class="drop-cart-action" @click="$emit('remProduct', cartItem)"><i class="fas fa-times-circle"></i></a>
        </div>
        
    </div>`
})

Vue.component("cartCounter", {
    template:
    `<div class="cart-counter">{{$root.$refs.cart.cartQuantity()}}</div>`
})