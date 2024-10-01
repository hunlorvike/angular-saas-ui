import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { metaConfig } from '@config/meta.config';
import { IMeta, PageTitlePositioning } from '@models/index';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly isMetaTagSet = new Set<string>();
  private metaSetting: IMeta = metaConfig;
  private metaSetting$ = new BehaviorSubject<IMeta>(this.metaSetting);
  private metaTag = inject(Meta);

  constructor() {
    this.metaSetting$.next(this.metaSetting);
  }

  setTag(key: string, value: string): void {
    this.isMetaTagSet.add(key);
    this.metaSetting.defaults = { ...this.metaSetting.defaults, [key]: value };
    this.metaTag.updateTag({ name: key, content: value });
    this.updateMetaSetting({ defaults: this.metaSetting.defaults });
  }

  removeTag(key: string): void {
    this.isMetaTagSet.delete(key);
    if (this.metaSetting.defaults?.[key]) {
      const { [key]: _, ...rest } = this.metaSetting.defaults;
      this.metaSetting.defaults = rest;
      this.updateMetaSetting({ defaults: this.metaSetting.defaults });
    }
  }

  setTitle(
    title: string,
    pageTitlePositioning: PageTitlePositioning = PageTitlePositioning.PrependPageTitle,
    override = false,
  ): void {
    if (
      this.metaSetting.defaults &&
      (override || !this.metaSetting.defaults.title)
    ) {
      this.metaSetting.defaults.title = title;
    }

    document.title = this.resolveFullTitle(title, pageTitlePositioning);
    this.updateMetaSetting({ defaults: this.metaSetting.defaults });
  }

  private updateMetaSetting(updates: Partial<IMeta>): void {
    this.metaSetting = { ...this.metaSetting, ...updates };
    this.metaSetting$.next(this.metaSetting);
  }

  private resolveFullTitle(
    title: string,
    pageTitlePositioning: PageTitlePositioning,
  ): string {
    const { appName, titleSeparator } = this.metaSetting;
    return pageTitlePositioning === PageTitlePositioning.PrependPageTitle
      ? `${title} ${titleSeparator} ${appName}`
      : `${appName} ${titleSeparator} ${title}`;
  }
}
