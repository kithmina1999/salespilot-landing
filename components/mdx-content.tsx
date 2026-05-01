import Link from "next/link";

function inlineText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = href.startsWith("http");
      if (external) {
        return (
          <a key={index} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        );
      }
      return (
        <Link key={index} href={href}>
          {label}
        </Link>
      );
    }
    return part;
  });
}

export default function MdxContent({ source }: { source: string }) {
  const blocks = source
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="prose-prose">
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          return <h3 key={index}>{inlineText(block.slice(4))}</h3>;
        }
        if (block.startsWith("## ")) {
          return <h2 key={index}>{inlineText(block.slice(3))}</h2>;
        }
        if (block.startsWith("# ")) {
          return <h1 key={index}>{inlineText(block.slice(2))}</h1>;
        }
        if (block.startsWith("> ")) {
          return <blockquote key={index}>{inlineText(block.replace(/^> /gm, ""))}</blockquote>;
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={index}>
              {block.split("\n").map((line) => (
                <li key={line}>{inlineText(line.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }
        if (/^\d+\. /.test(block)) {
          return (
            <ol key={index}>
              {block.split("\n").map((line) => (
                <li key={line}>{inlineText(line.replace(/^\d+\. /, ""))}</li>
              ))}
            </ol>
          );
        }
        return <p key={index}>{inlineText(block)}</p>;
      })}
    </div>
  );
}
