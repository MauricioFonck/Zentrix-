import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';
import createProduct from '../../services/product/createProduct.js';

export default async (request: ZentrixRequest, response: ZentrixResponse) => {
  const result = await createProduct(request.body, {
    routeId: request.currentRoute.id
  });
  return result;
};
