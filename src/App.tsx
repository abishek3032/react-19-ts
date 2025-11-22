import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import { useRoutes } from 'react-router'
import ProductDetails from './components/ProductDetails'
import Layout from './components/Layout'
const App = () => {
  const routes = useRoutes([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/product',
          element:<Product/>,
          children:[
            {
              path:':productname',
              element:<ProductDetails/>
            }
          ]
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'*',
          element:"404"
        }
      ]
    }
  ])
  return (
    <>
      {routes}      
    </>
  )
}
export default App
