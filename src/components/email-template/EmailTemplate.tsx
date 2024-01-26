interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <p>{message}</p>
  </div>
);
