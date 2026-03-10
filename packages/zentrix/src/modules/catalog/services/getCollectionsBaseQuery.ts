import { select } from '@zentrix/postgres-query-builder';
import type { SelectQuery } from '@zentrix/postgres-query-builder';

export const getCollectionsBaseQuery = (): SelectQuery => {
  const query = select().from('collection');
  return query;
};
