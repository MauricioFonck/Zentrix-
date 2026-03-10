import { select, SelectQuery } from '@zentrix/postgres-query-builder';

export const getCustomersBaseQuery = (): SelectQuery => {
  const query = select().from('customer');

  return query;
};
