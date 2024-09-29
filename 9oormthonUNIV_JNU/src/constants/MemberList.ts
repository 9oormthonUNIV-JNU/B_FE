import img_flower from "../assets/images/img_flower.svg";

type MemberType = {
    image: string;
    name: string;
    generations: number[];
    part: "FE" | "PM" | "PD" | "BE"; 
};

export const MemberData: MemberType[] = [
    {
        image: img_flower,
        name: "구르미",
        generations: [2,],
        part: "FE",
    },
    {
        image: img_flower,
        name: "유니브",
        generations: [2,],
        part: "BE", 
    },
    {
        image: img_flower,
        name: "유니브 2",
        generations: [2],
        part: "BE",
    },
    {
        image: img_flower,
        name: "유니브 3",
        generations: [2],
        part: "BE",
    },
    {
        image: img_flower,
        name: "유니브 4",
        generations: [2,3],
        part: "BE",
    },
];
