app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/contactController.js');
                }
            }
        })
        .when('/settings/:id', {
            templateUrl: '/views/settings.html',
            controller: 'SettingsController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/settingsController.js');
                }
            }
        })
        .when('/transaction/:id', {
            templateUrl: '/views/transaction.html',
            controller: 'TransactionController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/transactionController.js');
                }
            }
        })
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/homeController.js');
                }
            }
        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'RegisterController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/registerController.js');
                }
            }
        })
        .when('/adminLogin', {
            templateUrl: '/views/adminLogin.html',
            controller: 'AdminLoginController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/adminLoginController.js');
                }
            }
        })
        .when('/product/:productid', {
            templateUrl: '/views/product.html',
            controller: 'ProductController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productController.js');
                }
            }            
        })
        .when('/product/:productid/:id', {
            templateUrl: '/views/product.html',
            controller: 'ProductController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productController.js');
                }
            }            
        })
        .when('/products', {
            templateUrl: '/views/products.html',
            controller: 'ProductsController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productsController.js');
                }
            }
        })
        .when('/products/:id', {
            templateUrl: '/views/products.html',
            controller: 'ProductsController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productsController.js');
                }
            }
        })
        .when('/products/gender/:gender', {
            templateUrl: '/views/products.html',
            controller: 'ProductsController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productsController.js');
                }
            }
        })
        .when('/products/gender/:gender/:id', {
            templateUrl: '/views/products.html',
            controller: 'ProductsController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/productsController.js');
                }
            }
        })
        .when('/:id', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/homeController.js');
                }
            }
        })
        .when('/contact/:id', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/contactController.js');
                }
            }
        })
        .when('/admin/:id', {
            templateUrl: '/views/admin.html',
            controller: 'AdminController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/adminController.js');
                }
            }            
        })
        .when('/admin/newProduct/:id', {
            templateUrl: '/views/newProduct.html',
            controller: 'NewProductController',
            resolve: {
                load: function($ocLazyLoad) {
                    return $ocLazyLoad.load('/js/newProductController.js');
                }
            }            
        })
        .otherwise({
            redirectTo: '/'
        });

    // Enable HTML5 mode for clean URLs (no hash)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
