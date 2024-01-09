'use client';
import { Input, Textarea, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useFormState } from 'react-dom';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async () => {
    if (!formData.name || !formData.email || !formData.message) {
    }

    const res = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ name: 'Hi', email: 'asd@abv.bg', message: 'yolooo' }),
    });

    const data = await res.json();
  };

  return (
    <form className="max-w-lg flex flex-col gap-2">
      <Input
        isClearable
        type="name"
        label="Name"
        name="name"
        placeholder="Your name"
        className="max-w-xs"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        isClearable
        type="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        className="max-w-xs"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Textarea
        label="Description"
        placeholder="Your message"
        name="message"
        classNames={{
          base: 'max-w-lg',
          input: 'resize-y min-h-[40px]',
        }}
        value={formData.message}
        onChange={handleChange}
        required
        errorMessage={"message must be at least 5 chars long"}
      />
      <Button color="primary" onPress={sendEmail}>
        Button
      </Button>
    </form>
  );
};
