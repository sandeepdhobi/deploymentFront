import React from 'react'

const convertDate = (date) =>{
  var d = new Date(date);
  return d.toUTCString();
}

const DeploymentTable = props => (
  <table>
    <thead>
      <tr>
        <th>Url</th>
        <th>Template Name</th>
        <th>Version</th>
        <th>Deployed</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.disploymentList.length > 0 ? (
        props.disploymentList.map(deployment => (
          <tr key={deployment._id}>
            <td>{deployment.url}</td>
            <td>{deployment.templateName}</td>
            <td>{deployment.version}</td>
            <td>{convertDate(deployment.deployedAt)}</td>
            <td>
              <button
                onClick={() => props.deleteDeployment(deployment._id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default DeploymentTable
