interface MessageValidationProps {
  message: string;
}

const MessageValidation = ({ message }: MessageValidationProps) => {
  return (
    <span
      style={{
        color: "red",
        fontSize: "12px",
        marginTop: "5px",
      }}
    >
      {message}
    </span>
  );
};

export default MessageValidation;
