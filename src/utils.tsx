export const getColor = (code: string | number, type: string, isFault: boolean) => {
    if (isFault) {
        return `${type}-red-500`
    }
    if (typeof code === "number") {
        return getColorNumber(code, type);
    }
    return `${type}-red-500`;
}


const getColorNumber = (code: number, type: string) => {
    if (code >= 200 && code < 300) return `${type}-green-500`;
    if (code >= 300 && code < 400) return `${type}-blue-500`;
    if (code >= 400 && code < 500) return `${type}-orange-500`;
    if (code >= 500) return `${type}-red-500`;
};
