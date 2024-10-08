import CateringBreadcrub from '@/src/components/Catering/CateringBreadcrub'
import CateringItems from '@/src/components/Catering/CateringItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'

const catering = () => {
  return (
    <Layout>
        <CateringBreadcrub />
        <CateringItems />
    </Layout>
  )
}

export default catering