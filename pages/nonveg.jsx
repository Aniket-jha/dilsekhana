import NonvegBreadcrub from '@/src/components/Nonveg/NonvegBreadcrub'
import NonvegItems from '@/src/components/Nonveg/NonvegItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'

function nonveg() {
  return (
    <Layout>
      <NonvegBreadcrub />
      <NonvegItems />
    </Layout>
  )
}

export default nonveg