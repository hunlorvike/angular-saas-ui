interface NormalModel {
    image?: string;
    title: string;
    isChecked: boolean;
}

export interface ITheme extends NormalModel {
    key: 'dark' | 'light';
}

export interface IColor extends NormalModel {
    key: string;
    value: string;
}

export interface ISetting {
    theme: ITheme['key'];
    color: string;
    layout: {
        fixedHead: boolean;
        splitNav: boolean;
        fixedLeftNav: boolean;
        isShowTab: boolean;
        fixedTab: boolean;
        hasTopArea: boolean;
        hasFooterArea: boolean;
        hasNavArea: boolean;
        hasNavHeadArea: boolean;
    };
}
