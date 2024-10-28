import DeseartBreadcrub from '@/src/components/Deseart/DeseartBreadcrub'
import DeseartItems from '@/src/components/Deseart/DeseartItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/firebase.config'

const deseart = () => {
  const [repairProductsList, setRepairProductsList] = useState([])

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "Products"),  where("categoryDetails","==","Dessert")) 
     
    
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
       setRepairProductsList((prev)=>[...prev,{
        id:doc.id,
        ...doc.data()
       }])
     
    
      });
      console.log(repairProductsList)
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
  useEffect(() =>  {
    fetchProducts()
  
  },[])
  console.log (repairProductsList)
  
  return (
    <Layout>
      <DeseartBreadcrub />
      <DeseartItems  repairProductsList={repairProductsList} />
    </Layout>
  )
}

export default deseart