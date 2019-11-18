export function isUndef(v) {
    return v === undefined || v === null;
}

export function isDef(v) {
    return !(isUndef(v));
}

export function isArray(v) {
    if (isUndef(v)) return false;
    return Object.prototype.toString.call(v) === '[object Array]';
}
