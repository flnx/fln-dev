import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react';

export const Blog = () => {
  return (
    <Card className="p-5 lg:flex-row gap-5 bg-transparent">
      <CardHeader className="overflow-visible p-0 flex-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card.jpeg"
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 lg:px-9 flex-col items-start flex-1 gap-1">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <Chip color="secondary" className="mb-3">
          React
        </Chip>
        <h4 className="font-bold text-xl lg:text-4xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque.
        </h4>
        <small className="text-default-500 text-medium mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
          nisi eveniet atque consequatur nam aliquid nesciunt quas nobis quia,
          dolorem perspiciatis optio asperiores repudiandae. Quibusdam pariatur
          ducimus provident accusamus dicta.
        </small>
        <div className="mt-auto flex justify-between w-full pb-2">
          <time dateTime="20.02.2012">20.02.2012</time>
          <span>3 min read</span>
        </div>
      </CardBody>
    </Card>
  );
};
