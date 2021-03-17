const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;
const WooCommerce = new WooCommerceRestApi({
    url: 'https://yourdomain.com',
    consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXX',
    consumerSecret: 'cs_XXXXXXXXXXXXXXXXX',
    version: 'wc/v3'
});
for (var i = 0; i < 7; i++) {

    WooCommerce.get('products', params = {
        'page': i + 1,
        'per_page': 100
    })
        .then((response) => {
            let products = response.data;
            products.map(function (x) {
                if (x.description.includes('endurance')) {
                    //do something with the match.
                    console.log('Found Match: ' + x.sku);
                };
            })
        })
        .catch((r) => {
            console.log(error.response.data);
        })
    // console.time('Runtime');
    // console.timeEnd('Runtime');
}
