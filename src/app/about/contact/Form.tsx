import { Input, Textarea, Button } from "@nextui-org/react";

export const Form = () => {
  return (
    <form className="max-w-lg flex flex-col gap-2">
      <Input
        isClearable
        type="name"
        label="Name"
        placeholder="Your name"
        className="max-w-xs"
      />
      <Input
        isClearable
        type="email"
        label="Email"
        placeholder="Enter your email"
        className="max-w-xs"
      />
      <Textarea
        label="Description"
        placeholder="Your message"
        classNames={{
          base: 'max-w-lg',
          input: 'resize-y min-h-[40px]',
        }}
      />
      <Button color="primary">Button</Button>
    </form>
  );
};
