/* eslint-disable */
const AJV = require('ajv').default;

const data = require('../src/scripts/data/data.json');

test('verifying tasbihaat data to be an array', () => {
  expect(Array.isArray(data)).toBe(true);
});

test('verifying tabihaat data to be an array of valid objects', () => {
  const ajv = new AJV();

  const validate = ajv.compile({
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        content: {
          type: 'string',
        },
        category: {
          type: 'array',
        },
        transliteration: {
          type: 'string',
        },
        translations: {
          type: 'object',
          properties: {
            en: {
              type: 'string',
            },
            ur: {
              type: 'string',
            },
          },
          required: ['en', 'ur'],
          additionalProperties: false,
        },
      },
      required: ['id', 'content', 'category', 'transliteration', 'translations'],
      additionalProperties: false,
    }
  });

  expect(validate(data)).toBe(true);
});
