import React from 'react';

// Supports only **bold** and "- " list items. Content is developer-authored in
// content.js; do not feed user input through this without a sanitizer.
const renderInline = (text) =>
  text
    .split(/\*\*(.*?)\*\*/g)
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i}>{part}</strong>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );

const toBlocks = (content) => {
  const blocks = [];
  let listItems = [];

  const flushList = (key) => {
    if (listItems.length === 0) return;
    blocks.push(<ul key={`ul-${key}`}>{listItems}</ul>);
    listItems = [];
  };

  content.split('\n').forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (line.startsWith('- ')) {
      listItems.push(<li key={index}>{renderInline(line.substring(2))}</li>);
      return;
    }

    flushList(index);
    if (line !== '') blocks.push(<p key={index}>{renderInline(line)}</p>);
  });

  flushList('end');
  return blocks;
};

const ArticleBody = ({ content }) => <div className="article-body">{toBlocks(content)}</div>;

export default ArticleBody;
