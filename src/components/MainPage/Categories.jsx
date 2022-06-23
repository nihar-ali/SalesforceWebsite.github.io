import React from "react"

const Categories = () => {
  const data = [
    
    
    {
      
      cateName: "Salesforce",
    },
    {
      
      cateName: "Module",
    },
    {
      
      cateName: "SuperBadges",
    },
    
    {
      
      cateName: "Trails",
    },
    {
      
      cateName: "Reports Dashboards",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
