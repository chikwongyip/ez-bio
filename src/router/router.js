import IndexCarousel from '@/components/IndexCarousel'
import ProductDetails from '@/components/ProductDetails'
import ProductList from '@/components/ProductList'
let routes = [
    {
    path: '/',
    component: IndexCarousel,
    name: 'index'
    },
    {
    path:'/productList',
    component:ProductList,
    name:'productList'
    },
    {
    path:'/productDetails/:product_id/:brand_id/:category_id',
    component:ProductDetails,
    name:'productDetails'
    }
]
export default routes
