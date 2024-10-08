import DeseartBreadcrub from '@/src/components/Deseart/DeseartBreadcrub'
import DeseartItems from '@/src/components/Deseart/DeseartItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'

const deseart = () => {
  return (
    <Layout>
      <DeseartBreadcrub />
      <DeseartItems/>
    </Layout>
  )
}

export default deseart