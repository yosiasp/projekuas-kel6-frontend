app.controller('AdminController', function($scope, $timeout, $routeParams, $http) {
    // Using jQuery to change an element's style after the page is loaded
    $scope.$on('$viewContentLoaded', function() {
        // This ensures the DOM is fully loaded before running jQuery
        $('#homeMessage').css('color', 'red');
    });

    // Using jQuery with AngularJS $timeout to trigger after Angular rendering
    $timeout(function() {
        $('#homeMessage').fadeIn();
    }, 500); // Delay to let Angular render first
    
    // Entrance Transition Start (using jQuery for simpler syntax)
    // Trigger the active class to do the transition for fade-in
    $('.fade-in').each(function(index) {
        $(this).delay(150 * index).queue(function(next) { // 150ms delay between transitions of each element 
            $(this).addClass('active');
            next();
        });
    });
    // Entrance Transition End

    const burgerMenu = document.getElementById('burger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const closeButton = document.getElementById('close-button');

    burgerMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
    });

    // Admin Sidebar Navigation
    $('.menu-item').on('click', function () {
        // Highlight selected menu item
        $('.menu-item').removeClass('active');
        $(this).addClass('active');

        // Hide all content containers
        $('.content-container').addClass('hidden');

        // Show the selected content
        const contentId = `#content-${this.id}`;
        $(contentId).removeClass('hidden');
    });

    // Show the Home section by default
    $('#content-home').removeClass('hidden');

    $scope.adminId = $routeParams.id;

     // Function to fetch all contacts
     $scope.getAllContacts = function() {
        $http.get('/api/contacts') // Endpoint to fetch contacts
            .then(function(response) {
                // Success: store the fetched contacts in the $scope.contacts array
                $scope.contacts = response.data.contacts;
            })
            .catch(function(error) {
                // Handle errors
                console.error('Error fetching contacts:', error);
                alert('Failed to fetch contacts. Please try again later.');
            });
    };

    $scope.getAllContacts();

    $scope.products = [];

    $scope.getAllProducts = function() {
        $http.get('/api/products')
            .then(function(response) {
                $scope.products = response.data.products;
            })
            .catch(function(error) {
                console.error('Error fetching products:', error);
            });
    };

    $scope.getAllProducts();

    $scope.orders = [];

    $scope.getOrders = function() {
        $http.get('/api/orders')
            .then(function(response) {
                $scope.orders = response.data.orders;
            })
            .catch(function(error) {
                console.error('Error fetching orders:', error);
            });
    };

    $scope.getOrders();

    $scope.editProduct = function(product) {
        product.editing = true;
        // Store original values in case of cancel
        product.original = {
            name: product.name,
            price: product.price,
            type: product.type,
            gender: product.gender,
            description: product.description,
            stock: product.stock
        };
    };

    $scope.cancelEdit = function(product) {
        // Restore original values
        Object.assign(product, product.original);
        product.editing = false;
        delete product.original;
        delete product.newImg1;
        delete product.newImg2;
    };

    $scope.updateProduct = function(product) {
        var formData = new FormData();
        
        // Append text data
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('type', product.type);
        formData.append('gender', product.gender);
        formData.append('description', product.description);
        formData.append('stock', product.stock);

        // Append files if new ones were selected
        if (product.newImg1) {
            formData.append('img1', product.newImg1);
        }
        if (product.newImg2) {
            formData.append('img2', product.newImg2);
        }

        $http.post('/api/update-product/' + product.id, formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .then(function(response) {
            alert('Product updated successfully!');
            product.editing = false;
            delete product.original;
            delete product.newImg1;
            delete product.newImg2;
            
            // Refresh the products list
            $scope.getAllProducts();
        })
        .catch(function(error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        });
    };

    $scope.deleteProduct = function(product) {
        if (confirm('Are you sure you want to delete this product?')) {
            $http.delete('/api/delete-product/' + product.id)
                .then(function(response) {
                    alert('Product deleted successfully!');
                    // Refresh the products list
                    $scope.getAllProducts();
                })
                .catch(function(error) {
                    console.error('Error deleting product:', error);
                    alert('Failed to delete product. Please try again.');
                });
        }
    };

});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
