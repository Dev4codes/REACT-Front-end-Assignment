import React from 'react'
import './card.css'
import data from './Object'

export default function Card({ input }) {

  console.log(input)

  let filterData = data.filter(ele => ele.title.includes(input.toLowerCase()))
  console.log(filterData)
  return (
    <>
      <div className='cart-cont'>

        {
          filterData.length === 0 ?
            data.map((ele) => {

              return (

                <div className='cart'>
                        <div className='cart-img'>
                              <img src={ele.image} alt="not available" />  </div>
                  <div className='details'>
                    <div className='title'>{ele.title}</div>
                    <div className='price'>Rs. {ele.price}</div>

                  </div>
                         <div className='addbutton' ><button >Add to Cart</button> </div>
                </div>

              )
            }
            )
            : filterData.map((ele) => {
              return (
                <div className='cart'>
                  <div className='cart-img'>
                    <img src={ele.image} alt="image will be available Soon" />  </div>
                  <div className='details'>
                    <div className='title'>{ele.title}</div>
                    <div className='price'>Rs. {ele.price}</div>

                  </div>
                  <div className='addbutton' ><button >Add to cart</button> </div>
                </div>


              )
            })
        }
      </div>



    </>
  )
}
