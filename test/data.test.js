/* eslint-disable */
const data = require('../src/scripts/data/data.json');

test('verifying tasbihaat data to be an array', () => {
  expect(Array.isArray(data)).toBe(true);
});

data.forEach((tasbih) => {
  test(`verifying tabih with id ${tasbih.id} to be a valid object`, () => {
    expect(typeof tasbih.id).toBe('number');
    expect(typeof tasbih.content).toBe('string');
    expect(Array.isArray(tasbih.category)).toBe(true);
    expect(typeof tasbih.transliteration).toBe('string');
    expect(typeof tasbih.translations).toBe('object');
    expect(typeof tasbih.translations.en).toBe('string');
    expect(typeof tasbih.translations.ur).toBe('string');
  });
});
