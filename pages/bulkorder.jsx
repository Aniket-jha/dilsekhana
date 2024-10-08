import BulkItems from '@/src/components/BulkOrder/BulkItems'
import BulkOrderBreadcrub from '@/src/components/BulkOrder/BulkOrderBreadcrub'
import Layout from '@/src/layouts/Layout'
import React from 'react'

const bulkorder = () => {
  return (

    <Layout>
      <BulkOrderBreadcrub />
        <BulkItems />
    </Layout>
  )
}

export default bulkorder