import React from 'react'
import DeseartMenuItems from './DeseartMenuItems';

const DeseartItems = ({repairProductsList}) => {
    
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
        
        {repairProductsList?.length !==0 && repairProductsList?.map(
              (item) =>
                <DeseartMenuItems  item={item} />
            )}
         
        </div>
      </section>
  )
}

export default DeseartItems