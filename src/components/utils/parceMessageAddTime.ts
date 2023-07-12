export const parceTime = (str:string) => {
    const arr = str.split('T');
    const arrTime = arr[1].split(':');
    let hours = parseInt(arrTime[0]) + 3;
    switch (hours) {
        case 24:
            hours = 0
            break;
        case 25:
            hours = 1
            break;
        case 26:
            hours = 2
            break;
        default:
            break;
    }
    return  hours + ':' + arrTime[1];
}