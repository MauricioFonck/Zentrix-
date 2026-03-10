import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';
import updateCollection from '../../services/collection/updateCollection.js';

export default async (request: ZentrixRequest, response: ZentrixResponse) => {
  const collection = await updateCollection(
    Array.isArray(request.params.id) ? request.params.id[0] : request.params.id,
    request.body,
    {
      routeId: request.currentRoute.id
    }
  );
  return collection;
};
