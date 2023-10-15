import IndexCarousel from '@/components/IndexCarousel'
import ProductDetails from '@/components/ProductDetails'
import ProductList from '@/components/ProductList'
let routes = [
    {
    path: '/',
    component: IndexCarousel,
    name: 'index',
    },
    {
    path:'/productBrand/:brand_id',
    component:ProductList,
    name:'productBrand'
    },
    {
    path:'/productDetails/:product_id',
    component:ProductDetails,
    name:'productDetails'
    },
    {
        path:'/productCategory/:category_id',
        component:ProductList,
        name:'productCategory'
    },
    {
        path:'/productSearch/:item/:textSearch',
        component:ProductList,
        name:'productSearch'
    }
]
export default routes
