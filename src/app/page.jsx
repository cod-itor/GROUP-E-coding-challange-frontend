import React from 'react'
import QuestionCard from './components/QuestionCard'
import DropDown from './components/DropDown'
import FilterBubble from './components/filterBubble'

export default function page() {
  return (
    <div>
      <QuestionCard/>
      <DropDown/>
          <FilterBubble/>
      
    </div>
  )
}
