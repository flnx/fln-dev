import Image from 'next/image';

export const Showcase = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h1>I'm Kaloyan, I like coding and sharing my experiences in the world of web development</h1>
                    <div>Read the blog</div>
                    <div>Check my projects</div>
                    <div>Auto Scroll Down</div>
                </div>

                <div>
                    <Image
                        src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_snowboarding_flying_red"
                        alt="image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
};
