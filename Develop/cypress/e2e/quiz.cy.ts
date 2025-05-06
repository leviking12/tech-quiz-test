// cypress/e2e/quiz.cy.ts
describe('Quiz App End-to-End', () => {
    const questionsMock = [
      {
        question: 'What is 2+2?',
        answers: [
          { text: '4', isCorrect: true  },
          { text: '3', isCorrect: false },
        ],
      },
      {
        question: 'Capital of France?',
        answers: [
          { text: 'Paris',  isCorrect: true  },
          { text: 'London', isCorrect: false },
        ],
      },
    ]
  
    it('runs through the full quiz flow', () => {
      // stub the API however it’s actually called
      cy.intercept('GET', '**/api/questions/random', questionsMock)
  
      cy.visit('/')
      cy.contains('Start Quiz').click()
  
      // instead of waiting on an alias, just wait for the UI to update
      cy.contains('What is 2+2?', {timeout: 10000})
        .should('be.visible')
  
      // answer the first question
      cy.get('button').contains('1').click()
  
      cy.contains('Capital of France?')
        .should('be.visible')
  
      // answer the second
      cy.get('button').contains('1').click()
  
      // final score
      cy.contains('Quiz Completed').should('be.visible')
      cy.contains(`Your score: 2/2`).should('be.visible')
    })
  })
  