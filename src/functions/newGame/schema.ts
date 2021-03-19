export default {
  type: "object",
  properties: {
    x: { type: 'number' },
    y: { type: 'number' },
    mines: { type: 'number' },
  },
  required: ['x', 'y', 'mines']
} as const;
