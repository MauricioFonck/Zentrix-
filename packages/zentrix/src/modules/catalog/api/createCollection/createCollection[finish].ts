import { ZentrixRequest } from '../../../../types/request.js';
import createCollection from '../../services/collection/createCollection.js';

export default async (request: ZentrixRequest, response) => {
  const collection = await createCollection(request.body, {
    routeId: request.currentRoute.id
  });
  return collection;
};
