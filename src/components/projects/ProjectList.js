import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section" style={{marginTop: 50, borderRadius: 20, padding: 50}}>

            { projects && projects.map(project => {
                return (
                <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                </Link>
                )
            })}

            {/* <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary /> */}
        </div>

        
    )
}

export default ProjectList;