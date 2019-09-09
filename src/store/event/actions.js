export default {
    AddEvent: ({ commit }, param) => commit('ADD_EVENT', { items: param }),
    EventDone: ({ commit }, param) => commit('EVENT_DONE', { id: param }),
    TodoEvent: ({ commit }, param) => commit('TODO_EVENT', { id: param }),
    CancelEvent: ({ commit }, param) => commit('CANCEL_EVENT', { id: param }),
    ClearEvent: ({ commit }) => commit('CLEAR_EVENT'),
    DeleteEvent: ({ commit }, param) => commit('DELETE_EVENT', param),
    EditEvent: ({ commit }, param) => commit('EDIT_EVENT', param)
}
