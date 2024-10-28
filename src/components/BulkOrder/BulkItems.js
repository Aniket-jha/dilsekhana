import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import BulkOrderItems from './BulkOrderItems';

const BulkItems = ({repairProductsList}) => {
    
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
        
        {repairProductsList?.length !==0 && repairProductsList?.map(
              (item) =>
                <BulkOrderItems  item={item} />
            )}
         
        </div>
      </section>
  )
}

export default BulkItems