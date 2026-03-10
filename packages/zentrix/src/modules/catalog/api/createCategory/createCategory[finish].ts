import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';
import createCategory from '../../services/category/createCategory.js';

export default async (request: ZentrixRequest, response: ZentrixResponse) => {
  const result = await createCategory(request.body, {
    routeId: request.currentRoute.id
  });
  return result;
};
