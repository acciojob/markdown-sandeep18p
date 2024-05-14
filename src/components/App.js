import React, { useState, useEffect } from 'react';

const MarkdownApp = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    // Convert markdown to HTML
    const convertMarkdownToHtml = () => {
      // Implement your own markdown to HTML conversion logic here
      // For simplicity, let's just replace line breaks with <br> tags
      return markdown.split('\n').map((line, index) => <div key={index}>{line}<br /></div>);
    };

    // Call the conversion function and update the HTML state
    setHtml(convertMarkdownToHtml());
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your markdown here..."
      />
      <div className="preview"> <h1>Heading</h1>
        <br></br>
        <br></br>
        <span>
          This is some <strong>bold</strong> text.
        </span>
{html}</div>
   
    </div>
  );
};

export default MarkdownApp;
