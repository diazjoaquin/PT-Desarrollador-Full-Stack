import { EntitySchemaColumnOptions } from 'typeorm';

export const baseColumnSchemas: { [key: string]: EntitySchemaColumnOptions } = {
  id: {
    name: 'id',
    type: 'integer',
    primary: true,
    generated: true,
  },
};