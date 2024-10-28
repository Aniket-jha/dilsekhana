import React from 'react'
import NonvegMenuItems from './NonvegMenuItems';


const NonvegItems = ({repairProductsList}) => {
    
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
        
        {repairProductsList?.length !==0 && repairProductsList?.map(
              (item) =>
                <NonvegMenuItems  item={item} />
            )}
         
        </div>
      </section>
  )
}

export default NonvegItems