export default {
  type: "object",
  properties: {
    x: { type: 'number' },
    y: { type: 'number' },
    code: { type: 'string' }
  },
  required: ['x', 'y', 'code']
} as const;
