import { records, getTime } from '../utils.js';

export default {
    ['ADD_EVENT'](states, obj) { // 添加事件
        obj.items.id = ++states.count;
        obj.items.time = getTime();
        states.event.unshift(obj.items);
        records.set(states);
    },
    ['EVENT_DONE'](states, obj) { // 移至已完成
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 2;
                records.set(states);
                break;
            }
        }
    },
    ['TODO_EVENT'](states, obj) { // 移至未完成
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 1;
                records.set(states);
                break;
            }
        }
    },
    ['CANCEL_EVENT'](states, obj) { // 移至已取消
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 3;
                records.set(states);
                break;
            }
        }
    },
    ['CLEAR_EVENT'](states) { // 清除所有事件
        states.event = [];
        states.count = 0;
        records.clear();
    },
    ['DELETE_EVENT'](states, info) { // 删除单个事件
        if (states.event[info.index].id === info.id) {
            states.event.splice(info.index, 1);
        } else {
            states.event.filter(function (d, i) {
                if (d.id == info.id) {
                    states.event.splice(i, 1);
                }
            })
        }
        states.count--;
        records.set(states);
    },
    ['EDIT_EVENT'](states, info) { // 编辑事件
        if (states.event[info.index].id === info.id) {
            states.event[info.index].content = info.content;
        } else {
            states.event.filter(function (d) {
                if (d.id == info.id) {
                    d.content = info.content;
                }
            })
        }
        records.set(states);
    }
}