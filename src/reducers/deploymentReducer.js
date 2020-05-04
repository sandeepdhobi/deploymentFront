
const initialState = {
    disploymentList: []
  };

const deploymentState = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DEPLOYMENT_LIST":
            console.log(action.data,"me datat")
            return {...state, disploymentList: action.data }
        case "DELETE_DEPLOYMENT":
            return {...state, disploymentList: action.data }
        case "ADD_DEPLOYMENT":
            action.data.deploying = true
            return {...state, disploymentList: [...state.disploymentList, action.data ]}
        case "DEPLOYED":
            const disploymentList = state.disploymentList.map(item => {
                if(item._id == action.data){
                    item.deploying = false
                }
                return item
            })
            return {...state, disploymentList: disploymentList}
            
        default:
            return state
    }
}

export default deploymentState