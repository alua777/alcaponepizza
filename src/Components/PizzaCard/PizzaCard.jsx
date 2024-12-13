import React from 'react'
import './PizzaCard.scss'
import pizza from './../../Assets/pizza.jpg'
export default function PizzaCard() {
  return (
    <div className='pcard'>
        <div className='pcard_container'>
            <div className='pcard_container_container'>
                <div className='pcard_title'>Caprio</div>
                <div className='pcard_description'>paradajkový pretlak, mozzarella syr, šunka, kukurica</div>
            </div>
            
            <div className='pcard_price'>€7.20</div>
        </div>
        <div className='pcard_img'>
            <img src={pizza} alt="" />
        </div>
    </div>
  )
}
