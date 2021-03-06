const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  beforeEach(() => adventure.randomAttack());
  afterEach(() => console.log(adventure.specialists));
  afterAll(() => console.log(`O sobrevivente foi: ${adventure.specialists[0].nome}`));

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
