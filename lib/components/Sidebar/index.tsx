'use client';
import { IconDisc, IconHome } from "@tabler/icons-react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Option, { OptionProps } from "./Option";
import { options, sidebar, sidebarContainer, sidebarHeader } from "./styles";
import { usePathname } from "next/navigation";

export type SidebarProps = {
    children?: React.ReactNode;
}

const optionsList: OptionProps[] = [
    {
        label: 'Home',
        href: '/',
        icon: IconHome,
    },
    {
        label: 'Albums',
        href: '/albums',
        icon: IconDisc,
    },
]

export default function Sidebar({ children }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className={sidebarContainer}>
            <div className={sidebar}>
                <div>
                    <div className={sidebarHeader}>
                        <Title size="lg">Music Player</Title>
                        <Subtitle size="sm">Discover, Stream, Enjoy.</Subtitle>
                    </div>
                    <div className={options}>
                        {optionsList.map(o => <Option key={o.href} active={pathname.split('/')[1] == o.href.split('/')[1]} {...o} />)}
                    </div>
                </div>
                <div>
                    <Subtitle size="xs">Built by Tymek Vonau in Next.js</Subtitle>
                </div>
            </div>
            {children}
        </div>
    )
}