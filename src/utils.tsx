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

export const fetchFileContent = async (filePath: string): Promise<string | object> => {
    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (filePath.endsWith('.json')) {
            return await response.json() as object;
        } else {
            return await response.text();
        }
    } catch (error) {
        console.error('Error fetching file:', error);
        throw error;
    }
}

export const extractCodeLines = (
    fileContent: string,
    startLine: number,
    endLine: number
): string => {
    const lines: string[] = fileContent.split('\n');

    const startIndex: number = Math.max(0, startLine);
    const endIndex: number = Math.min(lines.length - 1, endLine - 1);

    if (startIndex > endIndex) {
        throw new Error('Start line cannot be greater than end line');
    }
    if (startIndex >= lines.length || endIndex >= lines.length) {
        throw new Error('Line numbers are out of range');
    }

    return lines.slice(startIndex, endIndex + 2).join('\n');
};