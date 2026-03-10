import { getSetting } from '../../../../setting/services/setting.js';
import { setPageMetaInfo } from '../../../services/pageMetaInfo.js';

export default async (request, response, next) => {
  setPageMetaInfo(request, {
    title: await getSetting('storeName', 'Zentrix'),
    description: await getSetting(
      'storeDescription',
      'The best eCommerce platform'
    )
  });
  next();
};
