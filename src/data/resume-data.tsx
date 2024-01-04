import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { UserIcon } from "lucide-react";

export const RESUME_DATA = {
    name: "Miles Huang",
    initials: "MH",
    location: "Taipei, Taiwan, TST",
    locationLink: "https://www.google.com/maps/place/Taipei",
    about:
        "Detail-oriented Full Stack Engineer dedicated to crafting high-quality products.",
    summary:
        "I'm a full-stack engineer, specializing in Typescript, React, and Node.js, with considerable expertise in C# and .NET. I am dedicated to continuous learning, exploring new technologies during my free time. I have over 3 years of experience working remotely.",
    avatarUrl: "https://avatars.githubusercontent.com/u/8224584?v=4",
    contact: {
        email: "inbox@miles.tw",
        tel: undefined,
        social: [
            {
                name: "Personal website",
                url: "https://miles.tw",
                icon: UserIcon,
            },
            {
                name: "GitHub",
                url: "https://github.com/0Miles",
                icon: GitHubIcon,
            },
            {
                name: "Discord",
                url: "https://discordapp.com/users/347738300909617152",
                icon: DiscordIcon,
            },
            {
                name: "X",
                url: "https://twitter.com/milestw",
                icon: XIcon,
            },
        ],
    },
    education: [
        {
            school: "National Taiwan University of Science and Technology",
            degree: "Bachelor of Business Administration",
            start: "2014",
            end: "2019",
        },
    ],
    work: [
        {
            company: "Master.co",
            link: "https://css.master.co/",
            badges: ["Volunteer"],
            title: "Full Stack Developer",
            start: "2022",
            end: "Now",
            description:
                "Master CSS is an atomic CSS framework whose syntax closely resembles native CSS. My involvement includes a small portion of the syntax, some website development work, and creating related utility programs(e.g., VS Code IntelliSense, ESLint plugin).",
        },
        {
            company: "Everyware Limited",
            link: "https://www.everyware.com.hk/",
            badges: ["Remote"],
            title: "Full Stack Developer",
            start: "2018",
            end: "2023",
            description:
                "Everyware is a restaurant systems software company. I'm responsible for developing new POS system features, fixing software errors, and improving functionalities in the customer management backend.",
        },
        {
            company: "Aoyue Design",
            link: "https://www.facebook.com/AoyueDesign/",
            badges: [],
            title: "Full Stack Developer",
            start: "2018",
            end: "2023",
            description:
                "Aoyue Design is a web development outsourcing company, primarily leveraging Angular with a recent emphasis on using Next.js.",
        }
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "React / Next.js",
        "Angular",
        "Node.js",
        "C#",
        ".NET",
    ],
    projects: [
        {
            title: "Soku Source Editor",
            techStack: [
                "Side Project",
                "React",
                "Master CSS",
                "Electron"
            ],
            description: "Used for editing the mod source for the SokuLauncher mod store, managing and publishing mods on the source.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/soku-source-editor",
            },
        },
        {
            title: "Easy Party",
            techStack: ["Side Project", "Next.js", "Firebase", "Master CSS", "Primitives"],
            description:
                "It's a website that figures out when people are free for events. Handy for planning stuff.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/easy-party",
            },
        },
        {
            title: "Master CSS ESlint Plugin",
            techStack: ["Typescript", "Next.js"],
            description:
                "An official ESLint plugin for enforcing team coding styles, making your template markup more organized, and catching syntax errors early.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/master-css-eslint-plugin",
            },
        },
        {
            title: "Soku Launcher",
            techStack: ["Side Project", "C#", "WPF", ".Net Framework"],
            description:
                "Launcher for Touhou 12.3: Hisoutensoku. Configuring mods(SWRSToys) before launching the game and provide automatic mod updates and download missing mods.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/soku-launcher",
            },
        },
        {
            title: "Master CSS Language Service",
            techStack: ["TypeScript", "Node.js"],
            description:
                "Enhanced Master CSS development experience, including syntax highlighting, code completion, syntax rule preview, and more.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/master-css-language-service",
            },
        },
        {
            title: "Master CSS Playground",
            techStack: ["Next.js", "Master CSS", "Firebase"],
            description:
                "Enhanced Master CSS development experience, including syntax highlighting, code completion, syntax rule preview, and more.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/master-css-playground",
            },
        },
        {
            title: "Wenhsiung",
            techStack: ["Angular", "NestJS", "Master UI"],
            description:
                "Wenhsiung glasses online shopping website.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/wenhsiung",
            },
        },
        {
            title: "Love Home",
            techStack: ["Angular", "NestJS", "Master UI"],
            description:
                "Love Home restaurant online ordering APP(PWA).",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/love-home",
            },
        },
        {
            title: "CLCC Booking Dashboard",
            techStack: ["Angular", "Firebase", "Bootstrap"],
            description:
                "CLCC Management Interface for Homepage Information, Room Types, Customer Booking, and More.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/clcc",
            },
        },
        {
            title: "Everyware CRM",
            techStack: ["Angular", "Firebase", "Master UI"],
            description:
                "Everyware’s Customer Relationship Management System.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/everyware-crm",
            },
        },
        {
            title: "NBC",
            techStack: ["Angular", "Master UI"],
            description:
                "NBC official website.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/nbc",
            },
        },
        {
            title: "FE Payment Machine",
            techStack: ["HTML", "Master UI"],
            description:
                "FE payment machine page.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/fe-payment-machine",
            },
        },
        {
            title: "Secret Wardrobe",
            techStack: ["Angular", "Master UI"],
            description:
                "Secret Wardrobe online shopping website.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/secret-wardrobe",
            },
        },
        {
            title: "Spe3D",
            techStack: ["HTML", "Sass"],
            description:
                "Spe3D official mobile website.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/spe3d",
            },
        },
        {
            title: "DogeBeats",
            techStack: ["Visual Basic .NET", "DxLibrary"],
            description:
                "Doge meme themed rhythm game.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/dogebetas",
            },
        },
        {
            title: "Pada Order",
            techStack: ["Flask", "HTML", "CSS"],
            description:
                "NTUST school restaurant online ordering APP.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/pada",
            },
        },
        {
            title: "CLVSC",
            techStack: ["HTML", "CSS", "JQuery"],
            description:
                "Taoyuan Municipal Zhong Li Commercial Senior High School official website.",
            link: {
                label: "Detail",
                href: "https://miles.tw/works/clvsc",
            },
        },
    ],
} as const;
