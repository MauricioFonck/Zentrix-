import { select } from '@zentrix/postgres-query-builder';

export const getAttributesBaseQuery = () => select().from('attribute');
