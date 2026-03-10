import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';
import createPage from '../../services/page/createPage.js';

export default async (request: ZentrixRequest, response: ZentrixResponse) => {
  const data = request.body;
  const result = await createPage(data, {
    routeId: request.currentRoute.id
  });

  return result;
};
