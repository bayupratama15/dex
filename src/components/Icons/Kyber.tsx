import React, { CSSProperties } from 'react'

const Kyber = ({ size = 24, style, color = '#31CB9E' }: { size?: number; style?: CSSProperties; color?: string }) => {
  return <img src="./cry/cry.ico" width={size} height={size} style={style} />
}

export default Kyber
