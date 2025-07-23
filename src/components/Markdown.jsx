import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify';
import { useState } from 'react';

// define the markdown previewer component
const Markdown = () => {
  // configure marked options for GitHub-flavored markdown and line breaks
    marked.setOptions({
  breaks: true,
  gfm: true,
});

// Markdown content
    const templateMarkdown = `
    
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


    `
    // Initialize state with default Markdown content and provide an update function
    const [markdown, setMarkdown] = useState(templateMarkdown);

// Convert Markdown into safe HTML to prevent injection attacks
const cleanHTML = DOMPurify.sanitize(marked(markdown));
  return (
    <div>
      <div id='editor-block'>
      <h2 className='section-header'>Editor <i className="fa fa-arrows-alt icon-right"></i>
 </h2>
      <textarea  id="editor" value={markdown}  onChange={(e) => setMarkdown(e.target.value)} />
    </div>

      <div id="preview-block">
        <h2  className='section-header'>Previewer  <i className="fa fa-arrows-alt icon-right"></i>
  </h2>
  {/* Render sanitized HTML from markdown */}
      <div id="preview"    dangerouslySetInnerHTML={{ __html: cleanHTML }} ></div>
      </div>
    </div>
  )
}

export default Markdown;
