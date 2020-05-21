import React, {useState} from 'react'
import PropTypes from 'prop-types';
import HomeView from './HomeView'

export default function HomeContainer(props) {

  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <HomeView
      count = {count}
      increment = {increment}
      decrement = {decrement}
    />
  )
}



