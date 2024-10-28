import React from 'react'
import VegMenuItems from './VegMenuItems';

const VegItems = ({repairProductsList}) => {

   
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
        
            {repairProductsList?.length !==0 && repairProductsList?.map(
              (item) =>
                <VegMenuItems  item={item} />
            )}
         
        </div>
      </section>
  )
}

export default VegItems