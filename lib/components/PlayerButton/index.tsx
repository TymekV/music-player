import { Icon } from '@tabler/icons-react';
import { button } from './styles';

type PlayerButtonVariants = Exclude<Parameters<typeof button>[0], undefined>;

export interface PlayerButtonProps extends React.HTMLAttributes<HTMLDivElement>, PlayerButtonVariants {
    icon: Icon;
}

export default function PlayerButton({ icon: Icon, primary = false, size = 'md', ...props }: PlayerButtonProps) {
    return (
        <div className={button({ primary, size })} {...props}>
            <Icon size={size == 'xl' ? 20 : size == 'lg' ? 18 : 16} />
        </div>
    )
}