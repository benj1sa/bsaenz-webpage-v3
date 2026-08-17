import { Fragment, type ReactNode } from "react";

function parseBold(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={`${keyPrefix}-bold-${index++}`}>{match[1]}</strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function parseInlineContent(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        ...parseBold(text.slice(lastIndex, match.index), `pre-${index}`)
      );
    }

    const url = match[2].replace(/\\&/g, "&");
    parts.push(
      <a
        key={`link-${index++}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
      >
        {parseBold(match[1], `link-text-${index}`)}
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(...parseBold(text.slice(lastIndex), "tail"));
  }

  return parts.length > 0 ? parts : parseBold(text, "full");
}

export function FormattedParagraph({ children }: { children: string }) {
  return <Fragment>{parseInlineContent(children)}</Fragment>;
}
