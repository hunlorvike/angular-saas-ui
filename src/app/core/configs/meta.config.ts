import { environment } from '@environments/environment';
import { IMeta, PageTitlePositioning } from '@models/index';

export const metaConfig: IMeta = {
  pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
  titleSeparator: '-',
  appName: environment.app.name,
  appUrl: environment.app.url,
  defaults: {
    title: '',
    description: '',
    keywords: '',
    author: 'daiminhvietnam.com',
    robots: 'index, follow',
  },
};
