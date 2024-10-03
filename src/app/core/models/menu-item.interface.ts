export interface IIcon {
  type: string;
  theme?: 'outline' | 'fill' | 'twotone';
}

export interface MenuItem {
  title: string;
  icon?: IIcon;
  type: 'C' | 'F';
  path?: string;
  newLinkFlag?: boolean;
  children?: MenuItem[];
}
