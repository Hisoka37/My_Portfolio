import GameHub from '../assets/gamehub.jpg'
import HouseAgs from '../assets/houseags.jpg'
import budgetbuddy from '../assets/budgetbuddy.png'
import DevConnect from '../assets/DevConnect.png'

export const projectsDetails = [
    {
        id: 0,
        project_name: " GamesHub ",
        project_desc: "GameHub is a video game discovery web app built with TypeScript, React.js, ChakraUI, that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. using data from the Rawg API.",
        tech_stack: ['TypeScript', 'React.js', 'Chakra UI'],
        project_img: GameHub,
        project_URL: 'https://game-fz03ur1w1-hisoka37.vercel.app',
        source_code: 'https://github.com/Hisoka37/Games_Hub',
        reverse: false,

    }, 

    {
        id: 2,
        project_name: " RentalReside ",
        project_desc: "RentalReside API is a web service that enables users to rent houses and manage reservations for those houses. It provides a secure and efficient platform for users to create accounts, log in, view available houses, make reservations, and manage their bookings.",
        tech_stack: ['Ruby on Rails', 'React.js', 'Redux.js', 'PostgreSQL',],
        project_img: HouseAgs,
        project_URL: 'https://house-rent-new5.onrender.com',
        source_code: 'https://github.com/Hisoka37/house-rent-frontend',
        reverse: true,
    },

    {
        id: 3,
        project_name: " BudgetBuddy ",
        project_desc: " Crafted a full-stack MERN web application, deployed on Render, designed to empower users in managing their finances efficiently. Budget Buddy offers seamless expense tracking, personalized budget setting, and insightful data visualization, facilitating users in reaching their financial objectives effortlessly. Utilizing GraphQL alongside modern technologies and best practices, the project not only demonstrates expertise in frontend and backend development, deployment, and user experience design but also showcases proficiency in leveraging GraphQL for enhanced data querying and manipulation.",
        tech_stack: ['JavaScript', 'React.js', 'MongoDB','Node.js','GraphQL', 'TailwindCss'],
        project_img: budgetbuddy,
        project_URL: 'https://budgetbuddy-s92u.onrender.com/',
        source_code:'https://github.com/Hisoka37/BudgetBuddy-MERN-App',
        reverse: false,
    },

    {
        id: 4,
        project_name: " DevConnect ",
        project_desc: " Developed a Full-Stack MERN web application deployed on Render, empowering users to authenticate via GitHub, explore GitHub user profiles, and fetch repositories using the GitHub API. Leveraging React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for database management, the project showcases proficiency in building scalable and interactive applications. Additional features include real-time updates of user data, data visualization of GitHub repositories, and seamless integration with third-party APIs for enhanced functionality and user experience.",
        tech_stack: ['JavaScript', 'React.js', 'MongoDB','Node.js', 'TailwindCss'],
        project_img: DevConnect,
        project_URL: 'https://github-mern-project.onrender.com',
        source_code:'https://github.com/Hisoka37/DevConnect',
        reverse: true,
    }
    
]

export const NavLinks = [
    {
        id:0,
        name: 'Home',
        href: 'Home'
    },
    {
        id:1,
        name: 'About Me',
        href: 'Skills'
    },
    {
        id:0,
        name: 'My Work',
        href: 'Projects'
    },
    {
        id:0,
        name: 'Contact Me',
        href: 'Contact'
    },
] 