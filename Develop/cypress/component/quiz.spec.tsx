import React from 'react'
import Quiz from '../../client/src/components/Quiz'
import { mount } from 'cypress/react18'

describe('Quiz Component Test', () => {
  const questionsMock = [
    {
      question: 'What is 2+2?',
      answers: [
        { text: '4', isCorrect: true },
        { text: '3', isCorrect: false },
      ],
    },
    {
      question: 'Capital of France?',
      answers: [
        { text: 'Paris', isCorrect: true },
        { text: 'London', isCorrect: false },
      ],
    },
  ]

  beforeEach(() => {
    cy.stub(window, 'fetch').callsFake(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(questionsMock),
      } as any)
    )
  })

  it('shows Start button initially', () => {
    mount(<Quiz />)
    cy.contains('Start Quiz').should('be.visible')
  })

  it('loads questions and displays first question', () => {
    mount(<Quiz />)
    cy.contains('Start Quiz').click()
    cy.contains('What is 2+2?').should('be.visible')
    cy.get('button').contains('1').click()
    cy.contains('Capital of France?').should('be.visible')
  })

  it('completes quiz and shows final score', () => {
    mount(<Quiz />)
    cy.contains('Start Quiz').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()
    cy.contains('Quiz Completed').should('be.visible')
    cy.contains('Your score: 2/2').should('be.visible')
  })
})
