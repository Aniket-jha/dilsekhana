import NonvegBreadcrub from '@/src/components/Nonveg/NonvegBreadcrub'
import NonvegItems from '@/src/components/Nonveg/NonvegItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/firebase.config'


const nonveg = () => {

  const [repairProductsList, setRepairProductsList] = useState([])

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "Products"),  where("categoryDetails","==","Non-Veg")) 
     
    
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
      <NonvegBreadcrub />
      <NonvegItems repairProductsList={repairProductsList}  />
    </Layout>
  )
}

export default nonveg