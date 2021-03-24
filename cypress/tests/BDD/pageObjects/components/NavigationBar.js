export default class NavigationBar {

    static selectors = {
        navigationBar: '[data-target="#navbarNav"]', 
        searchButton: '#navbarNav'
    }

    static pressSearchButton() {
        cy.get(this.selectors.searchButton).click()
    }
    
}