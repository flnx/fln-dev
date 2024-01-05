import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="md:container mx-auto px-5">
            {children}
        </div>
    )
};
