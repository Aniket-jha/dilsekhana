import CateringBreadcrub from '@/src/components/Catering/CateringBreadcrub'
import CateringItems from '@/src/components/Catering/CateringItems'
import Layout from '@/src/layouts/Layout'
import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/firebase.config'

const catering = () => {
  
  const [repairProductsList, setRepairProductsList] = useState([])

  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "Products"),  where("categoryDetails","==","Catreen")) 
     
    
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
        <CateringBreadcrub />
        <CateringItems  repairProductsList={repairProductsList}  />
    </Layout>
  )
}

export default catering