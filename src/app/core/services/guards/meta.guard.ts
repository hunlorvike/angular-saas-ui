import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  CanActivateChildFn,
} from '@angular/router';
import { IMeta } from '@models/index';
import { MetaService } from '@services/stores/meta.service';

const setMetaTags = (metaStore: MetaService, metaSetting: IMeta) => {
  if (metaSetting.defaults?.title) {
    metaStore.setTitle(
      metaSetting.defaults.title,
      metaSetting.pageTitlePositioning,
    );
  }

  for (const [key, value] of Object.entries(metaSetting.defaults || {})) {
    if (key !== 'title' && value) {
      metaStore.setTag(key, value as string);
    }
  }
};

export const metaGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const metaStore = inject(MetaService);
  const metaSetting: IMeta | undefined = route.data['meta'] || undefined;

  if (metaSetting) {
    setMetaTags(metaStore, metaSetting);
  }

  return true;
};

export const metaGuardChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const metaStore = inject(MetaService);
  const metaSetting: IMeta | undefined = route.data['meta'] || undefined;

  if (metaSetting) {
    setMetaTags(metaStore, metaSetting);
  }

  return true;
};
