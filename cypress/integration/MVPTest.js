describe("MVP tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const textInput = () => cy.get('input[id="name-input"]');
    const textInput2 = () => cy.get('input[id="special-text"]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const peppers = () => cy.get('input[name=peppers]');
    const onions = () => cy.get('input[name=onions]');
    const mushrooms = () => cy.get('input[name=mushrooms]');
    const orderBtn = () => cy.get(`button[id="order-button"]`);

    it("Basic test to make sure it's working", () => {
        expect(1+1).to.equal(2)
    })

    it("Test #1: Test that you can add text to the box", () => {
        cy.get('a[id="order-pizza"]').click()
        textInput()
            .should("exist")
            .should("have.value", "")
            .type("Added text")
            .should("have.value", "Added text");
    })

    it("Test #2: Test that you can select multiple toppings", () => {
        cy.get('a[id="order-pizza"]').click()
        cy.get('input[type="checkbox"]').check()
        
    })

    it("Test #3: Test that you can submit the form", () => {
        cy.get('a[id="order-pizza"]').click()
        orderBtn().should("be.disabled")
        textInput().type("Max Christ")
        orderBtn().should("not.be.disabled");
        orderBtn().click()
    })
})