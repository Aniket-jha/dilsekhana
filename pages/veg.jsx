import VegItems from '@/src/components/VegMenu/VegItems'
import VegMenuBreadcrub from '@/src/components/VegMenu/VegMenuBreadcrub'
import React from 'react'
import Layout from '@/src/layouts/Layout'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/firebase.config'


const Veg = () => {

    const [repairProductsList, setRepairProductsList] = useState([])

const fetchProducts = async () => {
  try {
    const q = query(collection(db, "Products"),  where("categoryDetails","==","Veg")) 
   
  
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
      <VegMenuBreadcrub />
      <VegItems repairProductsList={repairProductsList} />
        
    </Layout>
  )
}

export default Veg