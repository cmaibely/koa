// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	toolbar: {
		hideOnPageScroll: true,
	  },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'eShop',
	dialog: {
		title: 'eShop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/account/',
    	url: 'account.html',
    	name: 'account',
  		},
		{
		path: '/info1/',
    	url: 'info1.html',
    	name: 'info1',
  		},
		{
		path: '/info2/',
    	url: 'info2.html',
    	name: 'info2',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationFull = myApp.notification.create({
        icon: '<i class="material-icons">shopping_cart</i>',
        title: 'eShop',
        subtitle: 'Add to Cart',
        text: 'Your product was added successfully',
        closeTimeout: 5000,
      });


$$(document).on('click','#add-cart', function () {
	console.log('add');
	notificationFull.open();
});


























 

