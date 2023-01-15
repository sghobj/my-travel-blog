export function toREM(value) {
    const base = 16; // change this to the base font-size in pixels
    return `${value/base}rem`;
}
