import React from 'react'

const Icon = ({ children, styles }) => {
  return (
    <div
      style={{ styles }}>
        {children}
    </div>
  )
}

export default Icon