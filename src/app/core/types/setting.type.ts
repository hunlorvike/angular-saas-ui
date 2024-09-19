interface NormalModel {
    image?: string;
    title: string;
    isChecked: boolean;
}

export interface Theme extends NormalModel {
    key: 'dark' | 'light';
}

export interface ISetting {
    
}
