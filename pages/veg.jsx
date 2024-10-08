import VegItems from '@/src/components/VegMenu/VegItems'
import VegMenuBreadcrub from '@/src/components/VegMenu/VegMenuBreadcrub'
import Layout from '@/src/layouts/Layout'


const Veg = () => {
  return (
    <Layout>
      <VegMenuBreadcrub />
      <VegItems />
        
    </Layout>
  )
}

export default Veg