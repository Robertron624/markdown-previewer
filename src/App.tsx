import { useState } from 'react';
import './App.css';

function App() {
  const defaultInput = `# This is an h1 heading \n## This is an h2 heading\nYou can checkout my github profile here: [Robetron624](https://www.github.com/Robetron624)\n
  \nhere's some inline conde: Heres some code, \`<div></div>\`, between 2 backticks.\n
And this is a block of code between two triple \`: \n
  \`\`\`
  ${function anotherExample(firstLine: string, lastLine: string) {
    const multiLineCode = firstLine + lastLine;
    return multiLineCode;
  }}
  \`\`\`

  - This is a list item
  - This is another list item
  
You can also add some basic styling to your text, for example **this bold text**, or _this italic one_

Finally, below this you can see an image example: 

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")
  `;

  const [editorContent, setEditorContent] = useState(defaultInput);

  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="editor-header">
          <img src="/logo.png" alt="logo" className="logo" />
          <p className="header-title">Editor</p>
          <i className="fa fa-arrows-alt expand-icon" aria-hidden="true"></i>
        </div>
        <textarea
          value={editorContent}
          name=""
          id="editor"
          onChange={(e) => {
            const value = e.target.value;
            // setUserInput(value);
            setEditorContent(value);
          }}
        ></textarea>
      </div>

      <Preview markdown={editorContent} />
    </div>
  );
}

const Preview = (props: any) => {
  const rawMarkUp = () => {
    // To use this, you either install marked dependency with NPM or add a CDN
    const rawMarkupText = marked.parse(props.markdown, { sanitize: true });
    return {
      __html: rawMarkupText,
    };
  };

  return (
    <div id="previewer" className="previewer-wrapper">
      <div className="previewer-header">
        <img src="/logo.png" alt="logo" className="logo" />
        <p className="header-title">Previewer</p>
        <i className="fa fa-arrows-alt expand-icon" aria-hidden="true"></i>
      </div>
      <div
        dangerouslySetInnerHTML={rawMarkUp()}
        className="previer__text--area"
      ></div>
    </div>
  );
};

export default App;
