const modal = {
    state: () => ({
        modalToggle:false,
        viewToggle:false,
    }),
    getters: {
        getModalToggle(state){
            return state.modalToggle
        },
        getViewToggle(state){
            return state.viewToggle
        }
    },
    mutations:{
        setModalToggle(state,payload){
            state.modalToggle = payload
        },
        setViewToggle(state,payload){
            state.viewToggle = payload
        }
    },
    actions: {
        setModalToggle(context,payload){
            context.commit('setModalToggle',payload)
        },
        setViewToggle(context,payload){
            context.commit('setViewToggle',payload)
        }
    }
}

export default modal