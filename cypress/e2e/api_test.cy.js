describe('Тестирование приложения', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080', {
      onBeforeLoad(window) {
        window.localStorage.removeItem('vue-devtools');
      }
    });
  });


  it('Проверка функции логина', () => {
    cy.get('#username').type('testuser');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.url().should('include', '/dashboard');
  });

  it('Проверка функции регистрации', () => {
    cy.get('#new-username').type('newuser');
    cy.get('#new-email').type('newuser@example.com');
    cy.get('#new-password').type('newpassword');
    cy.get('#register-button').click();
    cy.contains('Регистрация успешна').should('be.visible');
  });

  it('Проверка функции поиска', () => {
    cy.get('#search-input').type('search query');
    cy.get('#search-button').click();
    cy.contains('Результаты поиска').should('be.visible');
  });

  it('Проверка функции добавления в корзину', () => {
    cy.get('.product-item').first().find('button').click();
    cy.contains('Ваш товар Product 1 добавлен в корзину').should('be.visible');
  });

  it('Проверка функции просмотра корзины', () => {
    cy.get('#cart').click();
    cy.contains('Корзина пуста').should('be.visible');
  });

  it('Проверка функции выхода', () => {
    cy.visit('http://localhost:8080/dashboard'); 
    cy.get('#logout-button').click();
    cy.url().should('include', '/');
    cy.get('.logout-message', { timeout: 10000 }).should('be.visible');
  });
  
  

  it('Проверка функции добавления товара в корзину с уведомлением', () => {
    cy.get('.product-item').first().find('button').click(); 
    cy.contains('Ваш товар Product 1 добавлен в корзину', { force: true }).should('be.visible');
    cy.get('#cart').click();
    cy.contains('Ваш товар Product 1 добавлен в корзину').should('be.visible');
  });
  

  it('Проверка функции поиска с результатами', () => {
    cy.get('#search-input').type('Product 1');
    cy.get('#search-button').click();
    cy.contains('Результаты поиска для: Product 1').should('be.visible');
  });

  it('Проверка отображения сообщения об ошибке при неверном логине', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpassword');
    cy.get('#login-button').click();
    cy.contains('Неправильный логин или пароль').should('be.visible');
  });
  
  it('Проверка функции выхода из аккаунта', () => {
    cy.visit('http://localhost:8080/dashboard');
    cy.get('#logout-button', { timeout: 10000 }).click();
    cy.url().should('include', '/'); 
    cy.contains('Вы успешно вышли из системы').should('be.visible');
  });
  
    
  
});
