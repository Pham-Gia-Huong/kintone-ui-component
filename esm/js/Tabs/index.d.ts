import Control, { ControlProps } from "../Control";
import '../../css/Tabs.css';
declare type Tab = {
    tabName: string;
    tabContent?: string | HTMLElement;
    isDisabled?: boolean;
};
declare type TabsProps = ControlProps & {
    items?: Array<Tab>;
    value?: number;
    onClickTabItem?: (tabIndex: number) => void;
};
declare class Tabs extends Control {
    protected _props: TabsProps;
    private _onClickTabItem;
    private tabNamesElement;
    private tabNames;
    private tabContentElement;
    constructor(params?: TabsProps);
    private _validator;
    private _renderTabNames;
    private _renderTabContent;
    rerender(changedAttr?: Array<string>): void;
    setValue(value: number): void;
    getValue(): number | undefined;
    addItem(item: Tab): void;
    removeItem(index: number): void;
    getItems(): Array<Tab> | undefined;
    disableItem(tabName: string): void;
    enableItem(tabName: string): void;
    on(eventName: string, callback: (params?: any) => void): void;
}
export { TabsProps };
export default Tabs;
