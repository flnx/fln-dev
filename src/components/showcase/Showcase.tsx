import Image from 'next/image';

export const Showcase = () => {
    return (
        <section>
            <div className="md:flex flex-row-reverse gap-4 p-2">
                <div className="flex flex-1 gap-4 relative">
                    <Image
                        src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_snowboarding_flying_red"
                        width={900}
                        height={0}
                        alt="image"
                        sizes="100vw"
                        className="w-full h-auto object-contain mb-12"
                    />
                </div>
                <div className="flex flex-col justify-center gap-5 flex-1 pt-5 md:pt-0">
                    <h1 className="text-3xl md:text-4xl">
                        I'm Kaloyan, I like coding and sharing my experiences in the world of
                        web development
                    </h1>
                    <div>Read the blog</div>
                    <div>Check my projects</div>
                    <div>Auto Scroll Down</div>
                </div>
            </div>
        </section>
    );
};
