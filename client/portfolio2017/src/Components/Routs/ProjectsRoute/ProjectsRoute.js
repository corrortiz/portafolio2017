import React from 'react';
//Internal Components
import ListOfProjects from '../../ListOfProjects/ListOfProjects';
import FooterApp from '../../FooterApp/FooterApp';
//locale Assest
import { Projects } from '../../../Assets/diccionary';

/**
 * layout of the projects rout
 */
const ProjectsRoute = () => {
  return (
    <div>
      <FooterApp title={Projects} />
      <ListOfProjects />
    </div>
  );
};

export default ProjectsRoute;
