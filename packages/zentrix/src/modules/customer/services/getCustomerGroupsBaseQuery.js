import { select } from '@zentrix/postgres-query-builder';

export const getCustomerGroupsBaseQuery = () => {
  const query = select().from('customer_group');

  return query;
};
