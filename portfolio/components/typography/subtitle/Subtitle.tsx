import React from 'react'


interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subtitle({ children, className }: Readonly<SubtitleProps>) {
  return (
    <h2 className={`${className} text-3xl`}>{ children }</h2>
  )
}
