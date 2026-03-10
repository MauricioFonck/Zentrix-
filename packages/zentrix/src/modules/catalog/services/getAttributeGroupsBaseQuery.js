import { select } from '@zentrix/postgres-query-builder';

export const getAttributeGroupsBaseQuery = () =>
  select().from('attribute_group');
