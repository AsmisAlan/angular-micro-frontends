export interface IShellContent {
    applicationName: string;
    navigation: IShellNavigationItem[];
}

export interface IShellNavigationItem {
    route: string;
    label: string;
}
