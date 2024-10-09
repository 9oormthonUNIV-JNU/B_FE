import img_flower from "../assets/images/img_flower.svg";

type MemberType = {
    image: string;
    name: string;
    cardinals: number[];
    part: "FE" | "PM" | "PD" | "BE"; 
};

export const MemberData: MemberType[] = [
    {
        image: img_flower,
        name: "구르미",
        cardinals: [2,],
        part: "FE",
    },
    {
        image: img_flower,
        name: "유니브",
        cardinals: [2],
        part: "BE", 
    },
    {
        image: img_flower,
        name: "유니브 2",
        cardinals: [2],
        part: "BE",
    },
    {
        image: img_flower,
        name: "유니브 3",
        cardinals: [2],
        part: "BE",
    },
    {
        image: img_flower,
        name: "유니브 4",
        cardinals: [2,3],
        part: "BE",
    },
];
