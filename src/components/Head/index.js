import React from 'react'
import { useEffect } from 'react'

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + 'Sistema de Chamados'
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '')
  }, [props])

  return <></>
}

export default Head