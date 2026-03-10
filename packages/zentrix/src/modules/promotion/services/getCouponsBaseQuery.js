import { select } from '@zentrix/postgres-query-builder';

export const getCouponsBaseQuery = () => {
  const query = select().from('coupon');

  return query;
};
