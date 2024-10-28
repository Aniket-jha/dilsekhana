import React from 'react'
import Bestsellermenuitems from './Bestsellermenuitems'

const Bestselleritems = ({repairProductsList}) => {
  return (
    <section className="lunch-section gap " style={{ background: "#fcfcfc" }}>
        <div className="px-8 row">
          <div >
            <h2 className="hading" data-aos="fade-up" data-aos-delay={300} data-aos-duration={400}>
                See also category Lunch
            </h2>
          </div>
          {repairProductsList?.length !==0 && repairProductsList?.map((item) =>
                <Bestsellermenuitems item={item} />
            )}
           
        </div>
      </section>
  )
}

export default Bestselleritems