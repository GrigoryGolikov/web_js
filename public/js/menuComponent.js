Vue.component('navMenu', {

    template:
        `<ul class="menu">
            <li class="menu--list"><a href="index.html" class="menu--link">Home</a></li>
            <li class="menu--list"><a href="products.html" class="menu--link">Man</a>
                <nav-man></nav-man> 
            </li>
            <li class="menu--list"><a href="products.html" class="menu--link">Women</a>
                <nav-women></nav-women>   
            </li>
            <li class="menu--list"><a href="products.html" class="menu--link">Kids</a>
                <nav-kids></nav-kids>   
            </li>
            <li class="menu--list"><a href="products.html" class="menu--link">Accoseriese</a>
                <nav-accoseriese></nav-Accoseriese>   
            </li>
            <li class="menu--list"><a href="products.html" class="menu--link">Featured</a>
                <nav-featured></nav-Featured>  
            </li>
            <li class="menu--list"><a href="products.html" class="menu--link">Hot Deals</a>
                <nav-hot></nav-hot>  
            </li>
        </ul>`

})

Vue.component("navWomen", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Women</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Dresses</a></li>
                    <li><a class="drop-linc" href="products.html">Tops</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                    <li><a class="drop-linc" href="products.html">Skirts/Shorts</a></li>
                    <li><a class="drop-linc" href="products.html">Accessories </a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Women</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <h3 class="drop-h3">Women</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Women</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})

Vue.component("navMan", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Man</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="#">Blazers</a></li>
                    <li><a class="drop-linc" href="#">Denim</a></li>
                    <li><a class="drop-linc" href="#">Leggings/Pants</a></li>
                    <li><a class="drop-linc" href="#">Skirts/Shorts</a></li>
                    <li><a class="drop-linc" href="#">Accessories </a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Man</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="#">Blazers</a></li>
                    <li><a class="drop-linc" href="#">Denim</a></li>
                    <li><a class="drop-linc" href="#">Leggings/Pants</a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Man</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})

Vue.component("navKids", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Kids</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Tops</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                    <li><a class="drop-linc" href="products.html">Skirts/Shorts</a></li>
                    <li><a class="drop-linc" href="products.html">Accessories </a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Kids</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                </ul>
                <h3 class="drop-h3">Kids</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Kids</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})

Vue.component("navAccoseriese", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Accoseriese</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Dresses</a></li>
                    <li><a class="drop-linc" href="products.html">Tops</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                    <li><a class="drop-linc" href="products.html">Skirts/Shorts</a></li>
                    <li><a class="drop-linc" href="products.html">Accessories </a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Accoseriese</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})
Vue.component("navFeatured", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Featured</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                    <li><a class="drop-linc" href="products.html">Skirts/Shorts</a></li>
                    <li><a class="drop-linc" href="products.html">Accessories </a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Featured</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})

Vue.component("navHot", {
    template:
        `<div class="drop">
            <div class="drop-flex">
                <h3 class="drop-h3">Hot Deals</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Dresses</a></li>
                    <li><a class="drop-linc" href="products.html">Tops</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                </ul>
            </div>
            <div class="drop-flex">
                <h3 class="drop-h3">Hot Deals</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                </ul>
                <img src="img/Layer_42.jpg" alt="super sale">
                <div class="drop-flex-sale">Super<br>sale!</div>
            </div>
        </div>`
})

Vue.component("navBrowse", {
    template:
        `<div class="drop-browse">
            <div class="drop-flex">
                <h3 class="drop-h3">Women</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="products.html">Dresses</a></li>
                    <li><a class="drop-linc" href="products.html">Tops</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                    <li><a class="drop-linc" href="products.html">Denim</a></li>
                    <li><a class="drop-linc" href="products.html">Leggings/Pants</a></li>
                </ul>
                <h3 class="drop-h3">Man</h3>
                <ul class="drop-menu">
                    <li><a class="drop-linc" href="#">Dresses</a></li>
                    <li><a class="drop-linc" href="#">Tops</a></li>
                    <li><a class="drop-linc" href="#">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="#">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Sweaters/Knits</a></li>
                    <li><a class="drop-linc" href="products.html">Jackets/Coats</a></li>
                    <li><a class="drop-linc" href="products.html">Blazers</a></li>
                </ul>
            </div>
        </div>`
})