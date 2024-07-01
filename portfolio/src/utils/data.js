import { faScrewdriverWrench,faFileCode, faComputer, faUser } from '@fortawesome/free-solid-svg-icons';
export const SKILLS  = [
    {
        title:"Soft Skills",
        icon: faUser,
        skills:
        [
            {skill: "Collaboration", porcentage: "90%"},
            {skill: "Solving Problems", porcentage: "80%"},
            {skill: "Attention to details", porcentage: "100%"},
            {skill: "Responsible", porcentage: "100%"},
            {skill: "Dedicated", porcentage: "90%"},
            {skill: "Team Work", porcentage: "80%"},
        ],
    },
    {
        title:"Frontend",
        icon: faFileCode,
        skills:
        [
            {skill: "HTML 5", porcentage: "85%"},
            {skill: "CSS 3", porcentage: "80%"},
            {skill: "JavaScript", porcentage: "80%"},
            {skill: "React.js", porcentage: "70%"},
            {skill: "Angular 5", porcentage: "80%"},
        ],
    },
    {
        title:"Backend",
        icon: faComputer,
        skills:
        [
            {skill: "Phyton", porcentage: "90%"},
            {skill: "Node.js", porcentage: "60%"},
            {skill: "JavaScript", porcentage: "80%"},
        ],
    },
    
    {
        title:"Tools",
        icon: faScrewdriverWrench,
        skills:
        [
            {skill: "Git & Github", porcentage: "80%"},
            {skill: "Visual Studio Code", porcentage: "80%"},
        ],
    }
]