import Link, { LinkProps } from "next/link";
import { option } from "./styles";
import { Icon } from "@tabler/icons-react";
import Title from "../../Title";

type OptionVariants = Exclude<Parameters<typeof option>[0], undefined>;

export interface OptionProps extends LinkProps, OptionVariants {
    icon?: Icon;
    label: string;
    href: string;
}

export default function Option({ active, label, icon: Icon, href, ...props }: OptionProps) {
    return (
        <Link href={href} {...props}>
            <div className={option({ active })}>
                {Icon && <Icon size={18} />}
                <Title size="xs" weight={500}>
                    {label}
                </Title>
            </div>
        </Link>
    )
}