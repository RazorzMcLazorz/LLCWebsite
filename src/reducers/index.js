import { ADD_ARTICLE, CHANGE_STATE } from './constants/action-types'

// Redux Store
const initialState = {
  email: '',
  password: '',
  bestProject: ['blackjack'],
  currentProject: ['hjreptiles', 'medicy'],
  pastOtherProject: ['ww1Sim'],
  pastPersonalProject: ['wwOutpostSingle', 'blackjack', 'madlibs'],
  projects: {
    title: {
      blackjack: 'Black Jack',
      ww1Sim: 'WW1 Simulation Tracker',
      wwOutpostSingle: 'World War Outpost',
      madlibs: 'Bottega Madlibs',
      hjreptiles: 'HJReptiles',
      medicy: 'Medicy',
    },
    link: {
      blackjack: 'https://black-jack-website.herokuapp.com/',
      ww1Sim: 'https://ww1sim.herokuapp.com/',
      wwOutpostSingle: 'https://wwoutpost.herokuapp.com/',
      madlibs: 'https://madlibschallenge.herokuapp.com/',
      hjreptiles: '',
      medicy: 'https://medicy.herokuapp.com/',
    },
    dedicate: {
      blackjack: '',
      ww1Sim: '',
      wwOutpostSingle: '',
      madlibs: '',
      hjreptiles: '',
      medicy: '',
    },
    github: {
      blackjack: 'https://github.com/RazorzMcLazorz/BlackJackWebsite',
      ww1Sim: 'https://github.com/RazorzMcLazorz/WW1SimulationGame',
      wwOutpostSingle: 'https://github.com/RazorzMcLazorz/WWOutpost',
      madlibs: 'https://github.com/RazorzMcLazorz/Madlibs',
      hjreptiles: 'https://github.com/RazorzMcLazorz/HJReptiles',
      medicy: 'https://github.com/RazorzMcLazorz/Medicy',
    },
    summary: {
      blackjack:
        'Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.',
      ww1Sim:
        "My first Database Website, using Node.js and mysql hosted via ClearDB servers, The Game is for my highschool History Teacher, to help him with his WW1 game making it easier to keep track of everything while being completely online allowing use anywhere. It deals with player groups, choice decison's for the groups and resource managements per group while at the end sorting everyone into the specific ranking for the next round.",
      wwOutpostSingle:
        "This is a Colony Simulator Game that takes place sort of in the WW's its only 12 rounds and the goal is to gain as much supplys / research by the end of the game. this game is cut short due to the new WWOutpost2 game taking place but i will eventually finish with new ideas in the future. This dives head first into complexity with multiple types of buildings to create along with Research, Production and little fast war battles against the very simple Random Enemy/AI",
      madlibs:
        'Madlibs uses this.state.values and changes the state by setState to the value. Its a Madlibs game hosted on the web, it shows basic React.JS of taking input and putting in the correct spots to make a nice little story.',
      hjreptiles:
        'This is one of my clients websites im currently working on, right now we are in the Drafting stage so i have no pictures to display. But this website will be where he can show off all his Reptiles and sell them to his clients.',
      medicy:
        'A City Builder Game placed inside medieval times, and the ability, to manage your city from the ground up. this is currently in building stages. and not fully complete you can see the current progress with the links on the left.',
    },
    date: {
      blackjack: 'Sep/1/2018 - Oct/15/2018',
      ww1Sim: 'Nov/28/2018 - Aug/28/2019',
      wwOutpostSingle: 'Sep/25/2018 - Dec/1/2018',
      madlibs: 'Sep/2018 - Oct/2018',
      hjreptiles: 'Planning stages',
      medicy: 'Apr/05/2020 - current',
    },
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload)
      return state
    case CHANGE_STATE:
      const changedState = action.payload
      return {
        ...state,
        ...changedState,
      }
    default:
      return state
  }
}

export default rootReducer
