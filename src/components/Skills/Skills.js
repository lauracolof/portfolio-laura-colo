import './skills.css';

import css from '../../assets/img/tech/css.svg';
import express from '../../assets/img/tech/express.svg';
import git from '../../assets/img/tech/git.svg';
import github from '../../assets/img/tech/github.svg';
import html from '../../assets/img/tech/html.svg';
import js from '../../assets/img/tech/javascript.svg';
import nodejs from '../../assets/img/tech/nodejs.svg';
import postgres from '../../assets/img/tech/postgresql.svg';
import react from '../../assets/img/tech/react.svg';
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
    { name: 'Node.js', image: git },
    { name: 'Github', image: github },
    { name: 'Slack', image: slack },
    { name: 'Trello', image: trello },
    { name: 'Visual Studio Code', image: vscode },
  ];


  return (
    <div className='grid justify-items-center mt*16 pt-10 md:mt-24'>
      <div id='skills' className='m-10'>
        <h3 className='title'>
          Skills
        </h3>
        <div className='mt-8 p-5'>
          <h4 className='front-end'>Front End technologies</h4>
        </div>
        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2x1 gap-4'>
          {
            frontEnd.map((x) =>
              <div key={x.name} className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2x1 font-bold hover:scale-110' style={{ backgroundColor: 'rgba(255, 253, 253, 0.218)' }}>
                <img src={x.image} alt='techs' className={'h-20'} width={60} height={60} />
                <h4>{x.name}</h4>
              </div>
            )
          }
        </div>
      </div>

      <div className='p-5'>
        <div>
          <h4 className='back-end'>
            Back End technologies
          </h4>
        </div>
        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2x1 gap-4'>
          {
            backEnd.map((x) =>
              <div key={x.name} className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2x1 font-bold hover:scale-110'>
                <img src={x.image} alt="tech" className={'h-20'} width={60} height={60} />
                <h4>{x.name}</h4>
              </div>
            )
          }
        </div>
      </div>

      <div className='p5'>
        <div>
          <h4 className='tools'>Tools</h4>
        </div>
        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2x1 gap-4'>
          {
            toolsTech.map((x) =>
              <div key={x.name} className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2x1 font-bold hover:scale-110'>
                <img src={x.image} alt="tools" className={'h-20'} width={60} height={60} />
                <h4>{x.name}</h4>
              </div>
            )
          }
        </div>
      </div>

    </div>
  );
};