
const fetchDeploymentList = (data) => {
    return {
        type: "FETCH_DEPLOYMENT_LIST",
        data: data
    }
}

const addDeployment = (data) => {
    return {
        type: "ADD_DEPLOYMENT",
        data: data
    }
}

const deleteDeployment = (data) => {
    return {
        type: "DELETE_DEPLOYMENT",
        data: data
    }
}

const deployed = (id) => {
    return {
        type: "DEPLOYED",
        data: id
    }
}

export default {
    fetchDeploymentList,
    addDeployment,
    deleteDeployment,
    deployed,
}