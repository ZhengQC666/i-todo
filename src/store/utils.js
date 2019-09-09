const operateStorage = function (item) {
    this.get = function () {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
    }
    this.set = function (obj) {
        localStorage.setItem(item, JSON.stringify(obj));
    }
    this.clear = function () {
        localStorage.removeItem(item);
    }
}

export const records = new operateStorage('records');
export const theme = new operateStorage('theme');
export const getTime = () => { //获取当天时间
    const date = new Date(), mouth = date.getMonth() + 1;
    return date.getFullYear() + '.' + mouth + '.' + date.getDate() + '#' + date.getHours() + ':' + date.getMinutes();
}