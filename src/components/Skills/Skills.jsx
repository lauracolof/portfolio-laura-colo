import './skills.css';

import css from '../../assets/img/tech/css.svg';
import express from '../../assets/img/tech/express.svg';
import git from '../../assets/img/tech/git.svg';
import github from '../../assets/img/tech/github.svg';
import html from '../../assets/img/tech/html.svg';
import js from '../../assets/img/tech/javascript.svg';
import nodejs from '../../assets/img/tech/nodejs.svg';
import postgres from '../../assets/img/tech/postgresql.svg';
import react from '../../assets/img/tech/react-svgrepo-com.svg';
import redux from '../../assets/img/tech/redux.svg';
import sequelize from '../../assets/img/tech/sequelize.svg';
import slack from '../../assets/img/tech/slack.svg';
import trello from '../../assets/img/tech/trello.svg';
import vscode from '../../assets/img/tech/vscode.svg';

export const Skills = () => {
  const frontEnd = [
    { name: 'CSS', image: css },
    { name: 'HTML', image: html },
    { name: 'JavaScript', image: js },
    { name: 'React', image: react },
    { name: 'Redux', image: redux }
  ];

  const backEnd = [
    { name: 'Node.js', image: nodejs },
    { name: 'Express', image: express },
    { name: 'PostgreSQL', image: postgres },
    { name: 'Sequelize', image: sequelize },

  ];

  const toolsTech = [
    { name: 'GIT', image: git },
    { name: 'Github', image: github },
    { name: 'Slack', image: slack },
    { name: 'Trello', image: trello },
    { name: 'VS Code', image: vscode },
  ];


  return (
    <div className='big-container' id='skills'>
      <div id='skills' className='skills-container'>
        <h3 className='title_skills'>
          Skills
        </h3>
        <div className='front-container'>
          <h4 className='front-title'>Front End technologies</h4>
        </div>
        <div className='all_front'>
          {
            frontEnd.map((x) =>
              <h6 key={x.name} className='everyfront'>
                <img src={x.image} alt='techs' className='everyimages' width={50} height={50} />
                <h4>{x.name}</h4>
              </h6>
            )
          }
        </div>
      </div>

      <div className='p-5'>
        <div>
          <h4 className='back-title'>
            Back End technologies
          </h4>
        </div>
        <div className='all_back'>
          {
            backEnd.map((x) =>
              <div key={x.name} className='every-back'>
                <img src={x.image} alt="tech" className='everyimagesB' width={50} height={50} />
                <h4>{x.name}</h4>
              </div>
            )
          }
        </div>
      </div>

      <div>
        <div className='tools-container'>
          <h4 className='tools-title'>Tools</h4>
        </div>
        <div className='all_tools'>
          {
            toolsTech.map((x) =>
              <div key={x.name} className='everytool'>
                <img src={x.image} alt="tools" className='everyimagesT' width={50} height={50} />
                <h4>{x.name}</h4>
              </div>
            )
          }
        </div>
      </div>

    </div>
  );
};