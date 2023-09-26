import GameHub from '../assets/gamehub.jpg'
import HouseAgs from '../assets/houseags.jpg'
import SpaceHub from '../assets/spacehub.png'

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
        project_name: " Space Travelers ",
        project_desc: " Web App to help clients all around the world to have access to reserving space flights and work on missions sponsored by SPACE-x",
        tech_stack: ['JavaScript', 'React.js', 'Redux.js',],
        project_img: SpaceHub,
        project_URL: 'https://space-hub-2unx.onrender.com',
        source_code:'https://github.com/Hisoka37/Space-Travelers-Hub',
        reverse: false,
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
        name: 'Hire Me',
        href: 'Contact'
    },
] 