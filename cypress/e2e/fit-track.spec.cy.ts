describe('Fit Track', () => {
  beforeEach(() => {
    cy.visit('/fit-track');
  });

  it('should add new week to historical weeks list', () => {

    // TODO :: mock out backend??

    // Given:
    const tableLength = 2;
    cy.get('#week-volume-table').find('tr').should('have.length', tableLength)


    cy.get('#btn-add-week').click();
    cy.get('#modal-basic-title').should('have.css', 'display', 'block');

    cy.get('#block').invoke('val', 1);
    cy.get('#week').invoke('val', 1);
    cy.get('#volume').invoke('val', 9);

    // When:
    cy.get('#btn-submit-week').click();

    // Then:
    cy.get('#week-volume-table').find('tr').should('have.length', tableLength + 1);

  });

})
