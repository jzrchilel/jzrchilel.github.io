import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;
  color: #ffb142;
  &:hover {
    color: #ccae62;
    border-color: #ccae62;
  }
`
const StyledList = styled.ul`
  padding: 0;
  list-style: square;
`
const StyledItem = styled.li``
const TextCurly = styled.i`
  font-weight: 300;
`

export default () => (
  <>
    <p>
      Hi, I’m Jezer, a Software Developer currently residing in Guadalajara, Mexico. 
      Part of <StyledLink href="https://www.epam.com/">Epam Systems</StyledLink> team.
    </p>
    <p>
      I started to coding when I was in college. 
      I still remeber my first System.out.println("Hello world"); in Java, 
      since then I have tried to learn everthing that I could. 
      I have developed from Android and iOS apps to arduino cards.<br />
      I started coding with Java, then moved to PHP and now 
      I have a strong focus in JavaScript. 
      For the past 3 years I've been building User Interfaces for web products 
      using React and Redux as the manager state. Also coding in the server 
      side with Node.js mainly using Express framework.
    </p>
    <p>
      I speak Spanish and English. In my spare time I enjoy listening to music, reading books, 
      watching movies with my wife and exploring new places with her.
    </p>
    <h3>What I’m doing now</h3>
    <StyledList>
      <StyledItem>Working full time as JavaScript Developer.</StyledItem>
      <StyledItem>Reading <TextCurly>"Clean Architecture - Robert C. Martin."</TextCurly></StyledItem>
      <StyledItem>
        Reading <TextCurly>"Agile Software Development, Principles, Patterns, and Practices - Robert C. Martin."</TextCurly>
      </StyledItem>
      <StyledItem>Remembering Java and catching up with the new features.</StyledItem>
      <StyledItem>Learning to play clarinet.</StyledItem>
    </StyledList>
    <p>
      You can find me on {' '}
      <StyledLink href="https://twitter.com/isaac_jzr" target="_blank" rel="noopener noreferrer">Twitter</StyledLink>,{' '}
      <StyledLink href="https://github.com/jzrchilel" target="_blank" rel="noopener noreferrer">Github</StyledLink>,{' '}
      <StyledLink href="https://www.linkedin.com/in/jezer-chilel/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </StyledLink>,{' '}
      <StyledLink href="https://stackoverflow.com/users/2946824/jezer?tab=profile" target="_blank" rel="noopener noreferrer">
        Stack Overflow
      </StyledLink> {' '}
      or reach me via {' '}
      <StyledLink href="mailto:jezer.chilel@gmail.com" target="_blank" rel="noopener noreferrer">
        email
      </StyledLink>.
    </p>
  </>
)
