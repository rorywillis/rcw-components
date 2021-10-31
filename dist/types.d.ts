/// <reference types="react" />
export interface CardProps {
    children: React.ReactNode;
    title?: string;
    img?: string;
    url?: string;
    spacing?: number;
    padding?: number;
}
export interface WithLinkProps {
    url?: string;
    children: React.ReactNode;
}
export interface CardGridItem extends CardProps {
    key: string;
}
export interface CardGridProps {
    items: CardGridItem[];
}
