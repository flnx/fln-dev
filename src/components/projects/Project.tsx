import { Card, CardFooter, Image, Button, CardHeader, Chip } from '@nextui-org/react';

export const Project = () => {
    return (
        <Card isFooterBlurred radius="lg" className="border-none">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">where do i go</p>
                <h4 className="text-white font-medium text-large">Travelling Website</h4>
            </CardHeader>
            <Image
                alt="Woman listing to music"
                className="z-0 w-full h-full object-cover"
                width={600}
                height={0}
                src="/images/hero-card.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col gap-1">
                        <Chip size="sm" className="border-white text-white" variant="bordered">
                            NextJS
                        </Chip>
                        <Chip size="sm" className="border-white text-white" variant="bordered">
                            Tailwind
                        </Chip>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Chip size="sm" className="border-white text-white" variant="bordered">
                            Express
                        </Chip>
                        <Chip size="sm" className="border-white text-white" variant="bordered">
                            MongoDB
                        </Chip>
                    </div>
                </div>
                <div className="flex flex-col gap-1 ml-auto">
                    <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        size="sm"
                    >
                        Live
                    </Button>
                    <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        size="sm"
                    >
                        Source Code
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};
