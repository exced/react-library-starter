import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  height: 100vh;
  background: #00c6ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
`

const Title = styled.h1`
  text-align: center;
  display: inline-block;
  margin: auto;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

const HelloWorld = () => (
  <Background>
    <Title>Hello World</Title>
  </Background>
)

export default HelloWorld