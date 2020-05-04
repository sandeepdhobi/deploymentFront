import React, { useState, Fragment, useEffect } from 'react'
import API from './api';
import {useSelector, useDispatch} from 'react-redux'
import AddDeploymentForm from './components/forms/AddDeploymentForm'
import DeploymentTable from './components/tables/DeploymentTable'
import allActions from './actions'
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
	const [ isLoading, setisLoading ] = useState(false)


	const disploymentList = useSelector(state => state.deploymentReducer.disploymentList)
	const dispatch = useDispatch()


	useEffect( async () => {
		async function fetchDeployments() {
			try {
				setisLoading(true)
				const response = await API.get(`getDeployment`);
				console.log(response);
				dispatch(allActions.deploymentActions.fetchDeploymentList(response.data.data))
				if(response.status){
					setisLoading(false)
				}
			} catch (error) {
				console.log(error)
			}

			}
			fetchDeployments();
	  }, []);

	const deleteDeployment = async id => {
		try {
			setisLoading(true)
			const response = await API.delete(`deleteDeployments/${id}`);
			dispatch(allActions.deploymentActions.deleteDeployment(response.data.data))
			if(response.status){
				setisLoading(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const addDeployment = async data => {
		try {
			const payload = {
				url: data.url,
				templateName: data.templateName,
				version: data.version
			  }
			
			  setisLoading(true)
			const response = await API.post(`addDeployment`,payload);
			dispatch(allActions.deploymentActions.addDeployment(response.data.data))
			if(response.status){
				setisLoading(false)
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="container" style={{maxWidth:'98vw'}}>
			<div className="flex-row">
				<div className="flex-large">
					<Fragment>
						<h2>Add deployment</h2>
						<AddDeploymentForm addDeployment={addDeployment} />
					</Fragment>
				</div>
				<div className="flex-large" style={{position:"relative"}}>
					<h2>View deployments</h2>
					{
						isLoading &&
						<div style={{position:"absolute", left:"50%",top:"50%"}}>
							<CircularProgress />
						</div>
					}
					<DeploymentTable disploymentList={disploymentList} deleteDeployment={deleteDeployment} />
				</div>
			</div>
		</div>
	)
}

export default App
