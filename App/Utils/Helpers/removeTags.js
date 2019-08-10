
export const removeTags = (string) => {
    return string.split('<p>').
        join('').split('<b>')
        .join('').split('</p>').join('')
        .split('</b>').join('')
        .split('</i>').join('')
        .split('<i>').join('')
}
