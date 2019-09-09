import { theme } from '../utils.js';

export default {
    SWITCH_THEME(states, obj) {
        states.theme = obj.theme;
        theme.set(states);
    }
}