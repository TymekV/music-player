import { css } from "@/styled-system/css";
import { container, content } from "./styles";

type ContentVariants = Exclude<Parameters<typeof content>[0], undefined>;

export interface ContainerProps extends ContentVariants {
    children?: React.ReactNode;
}

export default function Container({ size = 'md', children }: ContainerProps) {
    return (
        <div className={container}>
            <div className={content({ size })}>
                {children}
            </div>
        </div>
    );
}