export const getAfterSlash = (string: string) => {
    return string.substring(string.lastIndexOf('/') + 1);
}