import React from 'react'
import { Marked } from 'marked'
import { useState } from 'react';

const Markdown = () => {
    
    const templateMarkdown = `
    
    # Welcome to my React Markdown Previewer!
    
    
    `
    const [markdown, setMarkdown] = useState(templateMarkdown);

  return (
    <div>
      <textarea  id="editor" value={markdown}  onChange={(e) => setMarkdown(e.target.value)} />
      <div id="preview" ></div>
    </div>
  )
}

export default Markdown;
