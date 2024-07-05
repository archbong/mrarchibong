import React from "react";
import { number } from "zod";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export interface Props {
    props: any;
}

export interface HeaderProps {
    id: number;
    title: string;
    path: string;
    subMenu?: []
}

export interface ProjectProps {
    id: number;
    image: string;
    title: string;
    description: string;
    path: string;
    github?: string;
}

export interface StackProps {
    id: number;
    image?: string;
    stack: string;
    description?: string;
    path?: string;
}

export interface HeroProps {
    children?: React.ReactNode;
    title: string;
    video?: string;
    image?: string;
    description: string;
    skill?: string;
    contact?: string;
}

export interface ExperienceProps {
    id: number;
    organization: string;
    role?: string;
    description: string;
    startYear: number;
    endYear?: number | string;
}

export interface SocialProps {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
}

export interface AboutMeProps {
    fullname: string;
    image: string;
    organization: string;
    role: string;
    description: string;
    missionVision: string;
    experience: number;
    interest: string;
    industry: string[];
}