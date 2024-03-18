import { Week } from "../../src/app/core/model/fit-track/week";

describe('Fit Track', () => {
  const urlWeeks = 'http://localhost:8080/weeks';

  beforeEach(() => {
    cy.intercept('GET', urlWeeks, { fixture: 'weeks' }).as('getWeeks');

    cy.visit('/fit-track');
  });

  describe('Create new fitness tracking data', () => {

    it('should submit request when new week is added and display addition if successful', () => {
      /** Given */
      cy.intercept('POST', urlWeeks, { fixture: 'new-week' }).as('addWeek');
      cy.get('#running').click();

      let tableLength = 2;
      cy.get('#week-volume-table').find('tr').should('have.length', tableLength);

      /** When */
      cy.get('#btn-add-week').click();
      cy.get('#block').invoke('val', 1);
      cy.get('#week').invoke('val', 1);

      cy.get('#modal-add-week-next').click();
      cy.get('#modal-add-week-next').click();
      cy.get('#modal-add-week-next').click();
      cy.get('#volume').invoke('val', 8);

      cy.get('#modal-add-week-next').click();

      /** Then */
      cy.wait('@addWeek').then((interception) => {
        // @ts-ignore
        assert.isNotNull(interception.response.body, 'Week added successfully');
      });

      // cy.get('#week-volume-table').find('tr').should('have.length', ++tableLength);
      // TODO :: Verify append w/o reload

    })
  })

  describe('Read previous fitness tracking data', () => {

    it('should fetch historical week data and display when page is loaded', () => {
      /** Given */
      cy.wait('@getWeeks').then((interception) => {
        // @ts-ignore
        const week: Week = interception.response.body._embedded.weeks[0];
        assert.isNotNull(week.running.volume, 'Weeks retrieved successfully')
      });

      /** When */
      cy.get('#running').click();

      /** Then */
      cy.fixture('weeks.json').then((data: any) => {
        const week: Week =  data._embedded.weeks[0];
        cy.get('#total-miles').should('have.text', week.running.volume);
      })
      });
    })
  })

/** What should the fit-track page do? */
/**
 * Retrieve previous data (READ)
 *    >> When I load, I want a call to be made to 'backend', if backend fails, display this...
 *    >> When I load, I want a call to be made to 'backend', if backend success, display that... ~ implement later...
 * Allow you to add new data (CREATE)
 *    >> When I click to add and input info, send request to backend, if success then show this
 *    >> When I click to add and input info, send request to backend, if fail then show that... ~ implement later...
 * Allow you to update old data (UPDATE / DELETE) ~ implement later...
 */
