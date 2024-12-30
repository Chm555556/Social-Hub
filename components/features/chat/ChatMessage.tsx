interface ChatMessageProps {
  content: string;
  isReceived: boolean;
}

export function ChatMessage({ content, isReceived }: ChatMessageProps) {
  return (
    <div className={`flex ${isReceived ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          isReceived
            ? 'bg-secondary'
            : 'bg-primary text-primary-foreground'
        }`}
      >
        {content}
      </div>
    </div>
  );
}