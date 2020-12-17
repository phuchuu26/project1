<header class="header header-1">
            <div class="header-top header-1--top">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-lg-left text-center">
                            <!-- Contact Info Start -->
                            <ul class="contact-info contact-info--1">   
                                <li class="contact-info__list"><i class="fa fa-envelope-open"></i><a href="mailto:demo@company.com">demo@company.com</a></li>  
                                <li class="contact-info__list"><i class="fa fa-phone"></i><a href="#">+88 123 456 7899</a></li>
                            </ul>
                            <!-- Contact Info End -->
                        </div>
                        <div class="col-lg-6 text-right">
                            <!-- Header Top Nav Start -->
                            <div class="header-top__nav header-top__nav--1 d-flex justify-content-lg-end justify-content-center">
                                <div class="user-info header-top__nav--item">
                                    <div class="dropdown header-top__dropdown">
                                        <a class="dropdown-toggle" id="userID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            My Account
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="userID">
                                            <a class="dropdown-item" href="#">My Account</a>
                                            <a class="dropdown-item" href="#">Checkout</a>
                                            <a class="dropdown-item" href="#">Sign In</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="currency-selector header-top__nav--item">
                                    <div class="dropdown header-top__dropdown">
                                        
                                        <a class="dropdown-toggle" id="currencyID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Currency: </span>
                                            USD
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="currencyID">
                                            <a class="dropdown-item" href="#">USD</a>
                                            <a class="dropdown-item" href="#">EURO</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="language-selector header-top__nav--item">
                                    <div class="dropdown header-top__dropdown">
                                        <a class="dropdown-toggle" id="languageID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language: </span>
                                            <img src="{{asset('page/img/1.jpg')}}" alt="English"> ENGLISH
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="languageID">
                                            <a class="dropdown-item" href="#"><img src="{{asset('page/img/1.jpg')}}" alt="English"> English</a>
                                            <a class="dropdown-item" href="#"><img src="{{asset('page/img/2.jpg')}}" alt="Français"> Français</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Header Top Nav End -->                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-middle header-1--middle brand-bg d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 tex-xl-left text-center">
                            <!-- Logo Start -->
                            <a href="{{route('p.home')}}" class="logo-box">
                                <img src="{{asset('page/img/logo-white.png')}}" alt="logo">
                            </a>
                            <!-- Logo End -->
                        </div>
                        <div class="col-xl-5 col-lg-7 d-none d-lg-block">
                            <nav class="main-navigation">
                                <!-- Mainmenu Start -->
                                <ul class="mainmenu">
                                    <li class="mainmenu__item active menu-item-has-children">
                                        <a href="{{route('p.home')}}" class="mainmenu__link">Home</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <a href="{{route('p.home')}}">Home 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Home 2</a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">Home 3</a>
                                            </li>
                                            <li>
                                                <a href="index-4.html">Home 4</a>
                                            </li>
                                            <li>
                                                <a href="index-5.html">Home 5</a>
                                            </li>
                                            <li>
                                                <a href="index-6.html">Home 6</a>
                                            </li>
                                            <li>
                                                <a href="index-7.html">Home 7</a>
                                            </li>
                                            <li>
                                                <a href="index-8.html">Home 8</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mainmenu__item menu-item-has-children">
                                        <a href="shop.html" class="mainmenu__link">Shop</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children">
                                                <a href="shop.html">Shop Gird</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                                                    <li><a href="shop-fullwidth-4-column.html">Shop 4 Column</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="shop-list.html">Shop List</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    <li><a href="shop-list.html">Shop List Full Width</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="single-product.html">Single Product</a>
                                                <ul class="sub-menu">
                                                    <li><a href="single-product.html">Tab Style 1</a></li>
                                                    <li><a href="single-product-tab-style-2.html">Tab Style 2</a></li>
                                                    <li><a href="single-product-tab-style-3.html">Tab Style 3</a></li>
                                                    <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                                    <li><a href="single-product-slider-box.html">Slider Box</a></li>
                                                    <li><a href="single-product-slider-full-width.html">Slider Full Width</a></li>
                                                    <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                    <li><a href="single-product-group.html">Group Product</a></li>
                                                    <li><a href="single-product-variable.html">Variable Product</a></li>
                                                    <li><a href="single-product-affiliate.html">Affiliate Product</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mainmenu__item">
                                        <a href="portfolio.html" class="mainmenu__link">Portfolio</a>
                                    </li>
                                    <li class="mainmenu__item">
                                        <a href="blog.html" class="mainmenu__link">Blog</a>
                                    </li>
                                    <li class="mainmenu__item menu-item-has-children">
                                        <a href="#" class="mainmenu__link">Features</a>
                                        <ul class="megamenu three-column">
                                            <li>
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li>
                                                        <a href="about-us.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-us-2.html">About Us 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-2.html">Contact 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="services.html">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="services-2.html">Services 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Faq</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404</a>
                                                    </li>
                                                    <li>
                                                        <a href="login-register.html">Login & Registration</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">Blog Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-3-column.html">Blog 3 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-4-column.html">Blog 4 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-image.html">Image Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-gallery.html">Gallery Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-audio.html">Audio Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-video.html">Video Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shop</a>
                                                <ul>
                                                    <li>
                                                        <a href="cart.html">Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">Compare</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">My Account</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <!-- Mainmenu End -->
                            </nav>
                        </div>
                    <div class="row">
                        <div class="col-xl-9 col-lg-4">
                            <!-- Search Form Start -->
                            <form action="#" class="search-form search-form--1">
                                <div class="search-form__group search-form__group--select">
                                    <select name="category" id="searchCategory" class="search-form__select">
                                        <option value="all">All Categories</option>
                                        <optgroup label="Books, Magazines">
                                            <option>Bedroom</option>
                                            <option>Kitchen</option>
                                            <option>Livingroom</option>
                                        </optgroup>
                                        <optgroup label="Electronics">
                                            <option>Fridge</option>
                                            <option>Laptops, Desktops</option>
                                            <option>Mobiles, Tablets</option>
                                        </optgroup>
                                        <optgroup label="Furniture">
                                            <option>Accessories</option>
                                            <option>Men</option>
                                            <option>Women</option>
                                        </optgroup>
                                        <option value="3">Home, Garden</option>
                                        <option value="3">Kids, Baby</option>
                                        <option value="3">Sport</option>
                                    </select>
                                </div>
                                <input type="text" class="search-form__input" placeholder="Tìm kiếm...">
                                <button class="search-form__submit hover-scheme-2">
                                    <i class="fa fa-search"></i>
                                </button>


                            </form>


                            <!-- Search Form End -->
                        </div>

                        <div class="col-xl-3 col-lg-2">
                                <!-- Header Cart Start -->
                                <div class="mini-cart mini-cart--1">
                                    <a class="mini-cart__dropdown-toggle" id="cartDropdown">
                                        <i class="fa fa-shopping-bag mini-cart__icon"></i>
                                        <sub class="mini-cart__count">0</sub>
                                    </a>
                                    <div class="mini-cart__dropdown-menu">
                                        <div class="mini-cart__content">
                                            <div class="mini-cart__item">
                                                <div class="mini-cart__item--single">
                                                    <div class="mini-cart__item--image">
                                                        <img src="{{asset('page/img/electronics-4-150x167.jpg')}}" alt="product">
                                                    </div>
                                                    <div class="mini-cart__item--content">
                                                        <h4><a href="single-product.html">Odio tortor consequat</a> </h4>
                                                        <p>Qty: 1</p>
                                                        <p>&dollar;100.00</p>
                                                    </div>
                                                    <a class="mini-cart__item--remove" href=""><i class="fa fa-times"></i></a>
                                                </div>
                                                <div class="mini-cart__item--single">
                                                    <div class="mini-cart__item--image">
                                                        <img src="{{asset('page/img/furniture-6-150x167.jpg')}}" alt="product">
                                                    </div>
                                                    <div class="mini-cart__item--content">
                                                        <h4><a href="single-product.html">Integer eget augue</a> </h4>
                                                        <p>Qty: 1</p>
                                                        <p>&dollar;100.00</p>
                                                    </div>
                                                    <a class="mini-cart__item--remove" href=""><i class="fa fa-times"></i></a>
                                                </div>
                                            </div>
                                            <div class="mini-cart__total">
                                                <h4>
                                                    <span class="mini-cart__total--title">Subtotal</span>
                                                    <span class="mini-cart__total--ammount">$0.00</span>
                                                </h4>
                                            </div>
                                            <div class="mini-cart__btn">
                                                <a href="cart.html" class="btn btn-small btn-icon btn-style-1 color-1">View Cart <i class="fa fa-angle-right"></i></a>
                                                <a href="checkout.html" class="btn btn-small btn-icon btn-style-1 color-1">Checkout <i class="fa fa-angle-right"></i></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- Header Cart End -->
                            </div>                        
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-flex d-lg-none">
                            <!-- Main Mobile Menu Start -->
                            <div class="mobile-menu"></div>
                            <!-- Main Mobile Menu End -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom header-1--bottom">
                <div class="container">
                    <div class="row custom-row align-items-end">
                        <div class="col-lg-3">
                            <!-- Category Nav Start -->
                            <div class="category-nav">
                                <h2 class="category-nav__title primary-bg " id="js-cat-nav-title"><i class="fa fa-bars"></i> <span>Categories</span></h2>

                                @yield('hide')

                                <ul class="category-nav__menu hide-in-default" id="js-cat-nav">
                                    <li class="category-nav__menu__item has-children">
                                        <a href="shop.html"><i class="fa fa-coffee"></i> Fashion</a>
                                        <div class="category-nav__submenu">
                                            <div class="category-nav__submenu--inner">
                                                <ul>
                                                    <li><a href="shop.html">Health &amp; Beauties</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-nav__menu__item has-children">
                                        <a href="shop.html"><i class="fa fa-lightbulb-o"></i> Electronics</a>
                                        <div class="category-nav__submenu mega-menu three-column">
                                            <div class="category-nav__submenu--inner">
                                                <h3 class="category-nav__submenu__title">Television</h3>
                                                <ul>
                                                    <li><a href="shop.html">LED TV</a></li>
                                                    <li><a href="shop.html">LCD TV</a></li>
                                                    <li><a href="shop.html">Curved TV</a></li>
                                                    <li><a href="shop.html">Plasma TV</a></li>
                                                </ul>
                                            </div>
                                            <div class="category-nav__submenu--inner">
                                                <h3 class="category-nav__submenu__title">Refrigerator</h3>
                                                <ul>
                                                    <li><a href="shop.html">LG</a></li>
                                                    <li><a href="shop.html">Samsung</a></li>
                                                    <li><a href="shop.html">Toshiba</a></li>
                                                    <li><a href="shop.html">Panasonic</a></li>
                                                </ul>
                                            </div>
                                            <div class="category-nav__submenu--inner">
                                                <h3 class="category-nav__submenu__title">Air Conditioners</h3>
                                                <ul>
                                                    <li><a href="shop.html">Samsung</a></li>
                                                    <li><a href="shop.html">Panasonic</a></li>
                                                    <li><a href="shop.html">Sanaky</a></li>
                                                    <li><a href="shop.html">Toshiba</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html"><i class="fa fa-tree"></i> Baby</a>
                                    </li>
                                    <li class="category-nav__menu__item has-children">
                                        <a href="shop.html"><i class="fa fa-mobile"></i> Mobile</a>
                                        <div class="category-nav__submenu">
                                            <div class="category-nav__submenu--inner">
                                                <ul>
                                                    <li><a href="shop.html">Apple</a></li>
                                                    <li><a href="shop.html">Samsung</a></li>
                                                    <li><a href="shop.html">Nokia</a></li>
                                                    <li><a href="shop.html">Walton</a></li>
                                                    <li><a href="shop.html">Sony</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html"><i class="fa fa-shield"></i> Furniture</a>
                                        <div class="category-nav__submenu">
                                            <div class="category-nav__submenu--inner">
                                                <ul>
                                                    <li><a href="shop.html">Apple</a></li>
                                                    <li><a href="shop.html">Samsung</a></li>
                                                    <li><a href="shop.html">LG</a></li>
                                                    <li><a href="shop.html">Sony</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html"><i class="fa fa-plane"></i> Sport</a>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html"><i class="fa fa-gift"></i> Gift, Parties</a>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html"><i class="fa fa-cog"></i> Accessories</a>
                                    </li>
                                    <li class="category-nav__menu__item hidden-lg-menu-item">
                                        <a href="shop.html"><i class="fa fa-tv"></i> Toshiba</a>
                                    </li>
                                    <li class="category-nav__menu__item hidden-lg-menu-item">
                                        <a href="shop.html"><i class="fa fa-tv"></i> Samsung</a>
                                    </li>
                                    <li class="category-nav__menu__item hidden-menu-item">
                                        <a href="shop.html"><i class="fa fa-cube"></i> Jewlery &amp; watches</a>
                                    </li>
                                    <li class="category-nav__menu__item">
                                        <a href="shop.html" class="js-expand-hidden-menu"> More Categories</a>
                                    </li>
                                </ul>
                            </div> 
                            <!-- Category Nav End -->
                            <div class="category-mobile-menu"></div>
                        </div>
                        <div class="col-lg-8 col-md-10">
                            <div class="corporate corporate--1">
                                <div class="corporate__single">
                                    <div class="corporate__icon">
                                        <i class="fa fa-refresh"></i>
                                    </div>
                                    <div class="corporate__content">
                                        <h3 class="corporate__title">Free Return</h3>
                                        <p class="corporate__text">30 days money back guarantee!</p>
                                    </div>
                                </div>
                                <div class="corporate__single">
                                    <div class="corporate__icon">
                                        <i class="fa fa-paper-plane-o"></i>
                                    </div>
                                    <div class="corporate__content">
                                        <h3 class="corporate__title">FREE SHIPPING</h3>
                                        <p class="corporate__text">Free shipping on all order</p>
                                    </div>
                                </div>
                                <div class="corporate__single">
                                    <div class="corporate__icon">
                                        <i class="fa fa-support"></i>
                                    </div>
                                    <div class="corporate__content">
                                        <h3 class="corporate__title">SUPPORT 24/7</h3>
                                        <p class="corporate__text">We support online 24hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-2 align-self-start">
                            <!-- Header Cart Start -->
                            <div class="mini-cart mini-cart--1">
                                <a class="mini-cart__dropdown-toggle" id="cartDropdown">
                                    <i class="fa fa-shopping-bag mini-cart__icon"></i>
                                    <sub class="mini-cart__count">0</sub>
                                </a>
                                <div class="mini-cart__dropdown-menu">
                                    <div class="mini-cart__content">
                                        <div class="mini-cart__item">
                                            <div class="mini-cart__item--single">
                                                <div class="mini-cart__item--image">
                                                    <img src="{{asset('page/img/electronics-4-150x167.jpg')}}" alt="product">
                                                </div>
                                                <div class="mini-cart__item--content">
                                                    <h4><a href="single-product.html">Odio tortor consequat</a> </h4>
                                                    <p>Qty: 1</p>
                                                    <p>&dollar;100.00</p>
                                                </div>
                                                <a class="mini-cart__item--remove" href=""><i class="fa fa-times"></i></a>
                                            </div>
                                            <div class="mini-cart__item--single">
                                                <div class="mini-cart__item--image">
                                                    <img src="{{asset('page/img/furniture-6-150x167.jpg')}}" alt="product">
                                                </div>
                                                <div class="mini-cart__item--content">
                                                    <h4><a href="single-product.html">Integer eget augue</a> </h4>
                                                    <p>Qty: 1</p>
                                                    <p>&dollar;100.00</p>
                                                </div>
                                                <a class="mini-cart__item--remove" href=""><i class="fa fa-times"></i></a>
                                            </div>
                                        </div>
                                        <div class="mini-cart__total">
                                            <h4>
                                                <span class="mini-cart__total--title">Subtotal</span>
                                                <span class="mini-cart__total--ammount">$0.00</span>
                                            </h4>
                                        </div>
                                        <div class="mini-cart__btn">
                                            <a href="cart.html" class="btn btn-small btn-icon btn-style-1 color-1">View Cart <i class="fa fa-angle-right"></i></a>
                                            <a href="checkout.html" class="btn btn-small btn-icon btn-style-1 color-1">Checkout <i class="fa fa-angle-right"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <!-- Header Cart End -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sticky Header Start -->
            <div class="fixed-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <!-- Sticky Logo Start -->
                            <a class="sticky-logo" href="{{route('p.home')}}">
                                <img src="{{asset('page/img/logo-white.png')}}" alt="logo">
                            </a>
                            <!-- Sticky Logo End -->
                        </div>
                        <div class="col-lg-9">
                            <!-- Sticky Mainmenu Start -->
                            <nav class="sticky-navigation">
                                <ul class="mainmenu sticky-menu">
                                    <li class="mainmenu__item active menu-item-has-children sticky-has-child">
                                        <a href="{{route('p.home')}}" class="mainmenu__link">Home</a>
                                        <ul class="sub-menu hidden-sub">
                                            <li>
                                                <a href="{{route('p.home')}}">Home 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Home 2</a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">Home 3</a>
                                            </li>
                                            <li>
                                                <a href="index-4.html">Home 4</a>
                                            </li>
                                            <li>
                                                <a href="index-5.html">Home 5</a>
                                            </li>
                                            <li>
                                                <a href="index-6.html">Home 6</a>
                                            </li>
                                            <li>
                                                <a href="index-7.html">Home 7</a>
                                            </li>
                                            <li>
                                                <a href="index-8.html">Home 8</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mainmenu__item menu-item-has-children sticky-has-child sticky-has-child">
                                        <a href="shop.html" class="mainmenu__link">Shop</a>
                                        <ul class="sub-menu hidden-sub">
                                            <li class="menu-item-has-children sticky-has-child">
                                                <a href="shop.html">Shop Gird</a>
                                                <ul class="sub-menu hidden-sub">
                                                    <li><a href="shop.html">Shop Left Sidebar</a></li>
                                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                                                    <li><a href="shop-fullwidth-4-column.html">Shop 4 Column</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children sticky-has-child">
                                                <a href="shop-list.html">Shop List</a>
                                                <ul class="sub-menu hidden-sub">
                                                    <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    <li><a href="shop-list.html">Shop List Full Width</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children sticky-has-child">
                                                <a href="single-product.html">Single Product</a>
                                                <ul class="sub-menu hidden-sub">
                                                    <li><a href="single-product.html">Tab Style 1</a></li>
                                                    <li><a href="single-product-tab-style-2.html">Tab Style 2</a></li>
                                                    <li><a href="single-product-tab-style-3.html">Tab Style 3</a></li>
                                                    <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                    <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                                    <li><a href="single-product-slider-box.html">Slider Box</a></li>
                                                    <li><a href="single-product-slider-full-width.html">Slider Full Width</a></li>
                                                    <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                    <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                    <li><a href="single-product-group.html">Group Product</a></li>
                                                    <li><a href="single-product-variable.html">Variable Product</a></li>
                                                    <li><a href="single-product-affiliate.html">Affiliate Product</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mainmenu__item">
                                        <a href="portfolio.html" class="mainmenu__link">Portfolio</a>
                                    </li>
                                    <li class="mainmenu__item">
                                        <a href="blog.html" class="mainmenu__link">Blog</a>
                                    </li>
                                    <li class="mainmenu__item menu-item-has-children sticky-has-child">
                                        <a href="#" class="mainmenu__link">Features</a>
                                        <ul class="megamenu three-column hidden-sub">
                                            <li>
                                                <a href="#" class="megamenu__heading">Pages</a>
                                                <ul class="hidden-sub">
                                                    <li>
                                                        <a href="about-us.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-us-2.html">About Us 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-2.html">Contact 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="services.html">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="services-2.html">Services 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">Faq</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404</a>
                                                    </li>
                                                    <li>
                                                        <a href="login-register.html">Login & Registration</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="megamenu__heading">Blog</a>
                                                <ul class="hidden-sub">
                                                    <li>
                                                        <a href="blog.html">Blog Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-3-column.html">Blog 3 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-4-column.html">Blog 4 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-image.html">Image Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-gallery.html">Gallery Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-audio.html">Audio Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-video.html">Video Format</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-blog-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" class="megamenu__heading">Shop</a>
                                                <ul class="hidden-sub">
                                                    <li>
                                                        <a href="cart.html">Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="compare.html">Compare</a>
                                                    </li>
                                                    <li>
                                                        <a href="my-account.html">My Account</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <div class="sticky-mobile-menu">
                                    <span class="sticky-menu-btn"></span>
                                </div>
                            </nav>
                            <!-- Sticky Mainmenu End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sticky Header End -->

        </header>
        <!-- Header Area End Here -->