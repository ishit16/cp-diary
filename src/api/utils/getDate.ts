export const getDate = (secs: number) => {
    let date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date;
}