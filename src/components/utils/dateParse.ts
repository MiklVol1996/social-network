export function parceDate(str: string){
    const arr = str.split('T');
    const arrDate = arr[0].split('-');
    const month = parseInt(arrDate[1]);
    const day = parseInt(arrDate[2]);
    const timeArr = arr[1].split(':');
    const time = timeArr[0] + ':' + timeArr[1];
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    return day + ' ' + months[month] + ' ' + time;
    
}