
import React from 'react'
import Layout from '@/src/layouts/Layout'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/src/firebase.config'
import Bestselleritems from '@/src/components/Bestseller/Bestselleritems'


const Bestseller = () => {

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
    <>
      <Bestselleritems repairProductsList={repairProductsList} />
      </>
  )
}

export default Bestseller