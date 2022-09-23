import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import { useIsDarkMode } from 'state/user/hooks'

const UnderConstruction = () => {
  const isDark = useIsDarkMode()
  return (
    <div className="under-construction">
      {/* dark and light */}

      <img
        src={isDark ? '/cry2/cryon404.png' : '/cry/cryon404.png'}
        alt="under-construction"
        style={{
          height: '300px',
          marginTop: '70px',
        }}
      />
    </div>
  )
}
export default UnderConstruction
