import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../../actions'
import CountDown from './countDown';

const DeploymentTable = (props) => {


  const convertDate = (date) => {
    var d = new Date(date);
    return d.toUTCString();
  }

  const dispatch = useDispatch()

  const countReachesZero = (id) => {
    dispatch(allActions.deploymentActions.deployed(id))
  }

  return (
    props.disploymentList.length > 0 ?
      (
        <List component="nav" aria-label="contacts">
          {
            props.disploymentList.map(deployment => (
              deployment.deploying ? <ListItem button><CountDown countReachesZero={() => countReachesZero(deployment._id)} /></ListItem>
                :
                <ListItem button>
                  <ListItemText className="deployment_url" inset primary={deployment.url} />
                  <ListItemText inset primary={deployment.templateName} />
                  <ListItemText inset primary={deployment.version} />
                  <ListItemText inset primary={convertDate(deployment.deployedAt)} />
                  <IconButton onClick={() => props.deleteDeployment(deployment._id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>

            ))
          }
        </List>
      ) : (
        <div>No deployments yet</div>
      )
  )

}

export default DeploymentTable
