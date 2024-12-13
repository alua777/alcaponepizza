import React from 'react'
import './Menu.scss'
import PizzaCard from '../PizzaCard/PizzaCard'
import Filter from '../Filter/Filter'

export default function () {
  return (
    <div className='menu'>
        <div className='menu_filter'>
            <Filter/>
        </div>

        <div className='menu_list'>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
        
    </div>
  )
}
