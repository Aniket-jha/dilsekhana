import DetailsInfo from '@/src/components/Detail/DetailsInfo'
import { db } from '@/src/firebase.config'
import Layout from '@/src/layouts/Layout'
import React from 'react'
import {useState,useEffect} from 'react'
import { getDoc,doc } from "firebase/firestore";
import { useRouter } from 'next/router';
const Details = () => {
    const router = useRouter();
    const { id } = router.query;
   
    console.log(id) 
        const [repairOrder, setRepairOrder] = useState({})
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [openModel, setOpenModel] = useState(false);
    const [assetContent, setAssetContent] = useState([]);
    const [categoryDetails, setCategoryDetails] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [stockDetails, setStockDetails] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    
    const fetchProducts = async () => {
        const docRef = doc(db, "Products", id);
        const docSnap = await getDoc(docRef);
      
        if (docSnap.exists()) {
          const data = docSnap.data()
          setRepairOrder(docSnap.data())
          setName(data?.name)
          setPrice(data?.price)
          setImage(data?.image)
          setDescription(data?.description)
          setOpenModel(data?.openModel)
          setAssetContent(data?.assetContent)
          setCategoryDetails(data?.categoryDetails)
          setQuantity(data?.quantity)
          setStockDetails(data?.stockStatus)
          setImageUrl(data?.imageUrl)
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    //   console.log(name)
      useEffect(() => {
            fetchProducts()
      }, [])
  return (
    <Layout>
    <DetailsInfo repairOrder={repairOrder}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        price={price}
        setPrice={setPrice}
        openModel={openModel}
        setOpenModel={setOpenModel}
        assetContent={assetContent}
        categoryDetails={categoryDetails}
        setCategoryDetails={setCategoryDetails}
        quantity={quantity}
        setQuantity={setQuantity}
        stockDetails={stockDetails}
        setStockDetails={setStockDetails}
        imageUrl={imageUrl}
         />
    </Layout>
  )
}

export default Details