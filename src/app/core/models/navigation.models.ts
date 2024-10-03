export interface Breadcrumb {
    label: string;
    url: string;
}

export interface Icon {
    type: string;
    theme?: 'outline' | 'fill' | 'twotone';
}

export interface MenuItem {
    title: string;
    icon?: Icon;
    type: 'C' | 'F';
    path?: string;
    isNewLink?: boolean;
    children?: MenuItem[];
}
