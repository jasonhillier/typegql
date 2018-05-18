export interface Map<Type> {
    [key: string]: Type;
}
export declare function mapObject<SourceItem, ResultItem>(input: Map<SourceItem>, mapper: (item: SourceItem, key: string) => ResultItem): Map<ResultItem>;
export declare function convertObjectToArray<Type>(input: Map<Type>): Type[];
