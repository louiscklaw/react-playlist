import React from 'react'

const ProjectDetails = (props) => {
  console.log(props.match.params.id)
  let id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur eaque voluptate deserunt error, et ipsum nobis beatae quidem, ullam a odio expedita debitis veritatis dicta itaque dolor laborum fugit.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by NN</div>
          <div>2nd Sept 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails