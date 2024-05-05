import React from 'react'
import SubHeaderText from '../typography/header/SubHeaderText'
import Subtitle from '../typography/subtitle/Subtitle'
import AboutInfo from './AboutInfo'

export default function AboutMe() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <SubHeaderText>About</SubHeaderText>
        <SubHeaderText>*</SubHeaderText>
        <SubHeaderText>Me</SubHeaderText>
      </div>
      <div className="flex justify-between px-10 pb-20">
        <Subtitle>Based in Nigeria</Subtitle>
        <Subtitle>Detailed-oriented</Subtitle>
        <Subtitle>curious</Subtitle>
      </div>
      <AboutInfo />
    </div>
  )
}
