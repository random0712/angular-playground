export interface iCardData {
    projectTitle: string;
    projectDescription: string;
    imgUrl?: string;
    tags: ICardTags[] 
}

export interface ICardTags {
    name: string;
    url?: string;
    color?: string;
}