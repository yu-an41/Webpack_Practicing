import React from 'react'
import hello, {name, city, country} from '../modules/testModule'

function ModuleImport() {
  return (
    <div>{hello()}! I am {name.first} {name.last} located in {city}, {country}</div>
  )
}

export default ModuleImport