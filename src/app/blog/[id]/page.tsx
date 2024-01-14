import { Container } from '@/components/container/Container';
import { Chip, Image } from '@nextui-org/react';

const BlogArticle = () => {
  return (
    <Container>
      <header className="max-w-screen-md m-auto mb-16">
        <h1 className="font-bold text-4xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum.
        </h1>
        <div className="flex justify-between">
          <time
            dateTime="15.01.2024"
            className="text-default-500 text-large font-semibold inline-block mb-10"
          >
            15.01.2024
          </time>
          <Chip color="secondary">NextJS</Chip>
        </div>
        <Image src="/images/hero-card.jpeg" alt="image" />
      </header>
      <article className="max-w-screen-md m-auto text-lg dark:text-slate-300 break-words">
        <p className="mb-6">
          Back in 2012, I decided to try my hand at creating custom Tumblr themes and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I’ve had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a huge
          corporation.
        </p>
        <p className="mb-6">
          My main focus these days is building products and leading projects for our
          clients at Upstatement. In my free time I've also released an online video
          course that covers everything you need to know to build a web app with the
          Spotify API.
        </p>
        <p className="mb-6">
          When I’m not at the computer, I’m usually rock climbing, hanging out with
          my wife and two cats, or running around Hyrule searching for Korok
          seedsKorok seeds.
        </p>
        <p className="mb-6">
          Back in 2012, I decided to try my hand at creating custom Tumblr themes and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I’ve had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a huge
          corporation.
        </p>
        <p className="mb-6">
          My main focus these days is building products and leading projects for our
          clients at Upstatement. In my free time I've also released an online video
          course that covers everything you need to know to build a web app with the
          Spotify API.
        </p>
        <p className="mb-6">
          When I’m not at the computer, I’m usually rock climbing, hanging out with
          my wife and two cats, or running around Hyrule searching for Korok
          seedsKorok seeds.
        </p>
        <p className="mb-6">
          Back in 2012, I decided to try my hand at creating custom Tumblr themes and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I’ve had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a huge
          corporation.
        </p>
        <p className="mb-6">
          My main focus these days is building products and leading projects for our
          clients at Upstatement. In my free time I've also released an online video
          course that covers everything you need to know to build a web app with the
          Spotify API.
        </p>
        <p className="mb-6">
          When I’m not at the computer, I’m usually rock climbing, hanging out with
          my wife and two cats, or running around Hyrule searching for Korok
          seedsKorok seeds.
        </p>
        <p className="mb-6">
          Back in 2012, I decided to try my hand at creating custom Tumblr themes and
          tumbled head first into the rabbit hole of coding and web development.
          Fast-forward to today, and I’ve had the privilege of building software for
          an advertising agency, a start-up, a student-led design studio, and a huge
          corporation.
        </p>
        <p className="mb-6">
          My main focus these days is building products and leading projects for our
          clients at Upstatement. In my free time I've also released an online video
          course that covers everything you need to know to build a web app with the
          Spotify API.
        </p>
        <p className="mb-6">
          When I’m not at the computer, I’m usually rock climbing, hanging out with
          my wife and two cats, or running around Hyrule searching for Korok
          seedsKorok seeds.
        </p>
      </article>
    </Container>
  );
};

export default BlogArticle;
