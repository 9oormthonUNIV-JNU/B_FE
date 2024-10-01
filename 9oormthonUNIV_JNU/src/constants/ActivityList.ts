import img_flower from "../assets/images/img_flower.svg";

type ProjectType = {
    image: string;
    subject: string;
    tag: string[];
};

type SeminarType = {
    image: string;
    subject: string;
    tag: string[];
};

type StudyType = {
    image: string;
    subject: string;
    tag: string[];
};

type NetworkingType = {
    image: string;
    subject: string;
    tag: string[];
};

export const ProjectData:ProjectType[]= [
    {
        image: img_flower,
        subject: "대학생을 위한 밤샘서비스 ‘자니’",
        tag: ["교내프로젝트", "구르미", "유니브",],
    },
    {
        image: img_flower,
        subject: "대학생을 위한 밤샘서비스 ‘자니’",
        tag:["교내프로젝트", "구르미", "유니브",],
    },
    {
        image: img_flower,
        subject: "대학생을 위한 밤샘서비스 ‘자니’",
        tag:["교내프로젝트", "구르미", "유니브",],
    },
    {
        image: img_flower,
        subject: "대학생을 위한 밤샘서비스 ‘자니’",
        tag:["교내프로젝트", "구르미", "유니브",],
    },
];

export const SeminarData:SeminarType[]= [
    {
        image: img_flower,
        subject: "제 1차 세미나",
        tag: ["2024.09.27",],
    },
    {
        image: img_flower,
        subject: "제 2차 세미나",
        tag: ["2", ],
    },
    {
        image: img_flower,
        subject: "제 3차 세미나",
        tag: ["2", ],
    },
    {
        image: img_flower,
        subject: "제 4차 세미나",
        tag: ["2", ],
    },
];

export const StudyData:StudyType[]= [
    {
        image: img_flower,
        subject: "리액트 스터디",
        tag: ["2024.09.01-2024.10.01", "FE"],
    },
    {
        image: img_flower,
        subject: "리액트 스터디",
        tag: ["2024.09.01-2024.10.01", "FE"],
    },
    {
        image: img_flower,
        subject: "리액트 스터디",
        tag: ["2024.09.01-2024.10.01", "FE"],
    },
    {
        image: img_flower,
        subject: "구르미",
        tag: ["2024.09.01-2024.10.01", "FE"],
    },
];

export const NetworkingData:NetworkingType[]= [
    {
        image: img_flower,
        subject: "제 1차 네트워킹",
        tag: ["2024.09.03",],
    },
    {
        image: img_flower,
        subject: "제 2차 네트워킹",
        tag: ["2", ],
    },
    {
        image: img_flower,
        subject: "제 3차 네트워킹",
        tag: ["3", ],
    },
    {
        image: img_flower,
        subject: "제 4차 네트워킹",
        tag: ["4", ],
    },
];
