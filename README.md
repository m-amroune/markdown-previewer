#  Project : Markdown Previewer

##  About the Project

**Objective** : Build a React app that allows users to write GitHub-flavored Markdown and see a live HTML preview.

##  User Stories

- User Story #1: I can see a `<textarea>` element with a corresponding `id="editor"`.
- User Story #2: I can see an element with a corresponding `id="preview"`.
- User Story #3: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
- User Story #4: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type.  
  _HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked_
- User Story #5: When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements:
  - a heading element (H1 size)
  - a sub heading element (H2 size)
  - a link
  - inline code
  - a code block
  - a list item
  - a blockquote
  - an image
  - bolded text
- User Story #6: When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

## Langages and Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat)


##  Installation

```bash
git clone https://github.com/m-amroune/markdown-previewer.git
cd markdown-previewer
npm install
npm run dev

