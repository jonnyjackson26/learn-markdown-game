import React from 'react';
import { useEffect } from 'react';
import './CheatSheet.css';
import Navbar from '../../components/Navbar/Navbar';
import Editor from '../../components/Editor/Editor';
import { useTheme } from '../../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const CheatSheet = () => {
    const { isDarkMode } = useTheme();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <Navbar /> {/* Include the Navbar */}
            <div className={isDarkMode ? 'dark-mode' : ''}>
                <div className="cheat-sheet">
                    <h1>GitHub-Flavored Markdown Cheat Sheet</h1>
                    <p>This is intended as a quick reference and showcase. For more complete info, see the <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">GitHub-flavored Markdown info page.</a></p>

                    <div className="table-of-contents">
                        <h2 class="subheadings">Table of Contents</h2>
                        <div className="toc-grid">
                            <Link to="#headings">Headings</Link>
                            <Link to="#emphasis">Emphasized Text</Link>
                            <Link to="#lists">Lists</Link>
                            <Link to="#task-lists">Task Lists</Link>
                            <Link to="#links">Links</Link>
                            <Link to="#images">Images</Link>
                            <Link to="#code">Code and Syntax Highlighting</Link>
                            <Link to="#footnotes">Footnotes</Link>
                            <Link to="#tables">Tables</Link>
                            <Link to="#blockquotes">Blockquotes</Link>
                            <Link to="#inline-html">Inline HTML</Link>
                            <Link to="#horizontal-rule">Horizontal Rule</Link>
                            <Link to="#youtube-videos">YouTube Videos</Link>
                        </div>
                    </div>

                    {/* Headings */}
                    <section id="headings" className="markdown-section">
                        <h2 class="subheadings">Headings</h2>
                        <p>Headers can be created with <code>#</code> followed by a <code>space</code> for different levels:</p>
                        <Editor prompt={`# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6`} />
                        <p>Alternatively, for H1 and H2, you can use an underline style:</p>
                        <Editor prompt={`Alt-H1\n======\n\nAlt-H2\n------`} />
                        <p>Using headers helps organize your content into sections, making it easier to read and navigate. The more <code>#</code> symbols you add, the smaller the header becomes. Always ensure there's a space after the <code>#</code> for it to render correctly.</p>
                    </section>

                    {/* Emphasis */}
                    <section id="emphasis" className="markdown-section">
                        <h2 class="subheadings">Emphasized Text</h2>
                        <p>Italicize text using <code>*</code> or <code>_</code>:</p>
                        <Editor prompt={`*italic* or _italic_`} />
                        <p>To create bold text, use <code>**</code> or <code>__</code>:</p>
                        <Editor prompt={`**bold** or __bold__`} />
                        <p>Strikethrough text can be done with <code>~~</code>:</p>
                        <Editor prompt={`~~strikethrough~~`} />
                        <p>Combining these styles is also possible. For example, <code>**bold and _italic_**</code> results in a bold word with italicized text inside it.</p>
                    </section>

                    {/* Lists */}
                    <section id="lists" className="markdown-section">
                        <h2 class="subheadings">Lists</h2>
                        <p>Create unordered lists using <code>-</code>, <code>*</code>, or <code>+</code>:</p>
                        <Editor prompt={`- First item\n- Second item\n- Third item`} />
                        <Editor prompt={`* First item\n* Second item\n* Third item`} />
                        <Editor prompt={`+ First item\n+ Second item\n+ Third item`} />
                        <p>Create ordered lists using numbers followed by a period:</p>
                        <Editor prompt={`1. First item\n2. Second item\n3. Third item`} />
                        <p>Create subitems by indenting with two spaces:</p>
                        <Editor prompt={`1. First item\n2. Second item\n   - Subitem 1\n   - Subitem 2\n3. Third item`} />
                        <p>Lists help break down information into digestible pieces, making it easier for readers to follow along. Nesting lists is possible by simply indenting subitems. Ensure you maintain consistent formatting for readability.</p>
                    </section>

                    {/* Task Lists */}
                    <section id="task-lists" className="markdown-section">
                        <h2 class="subheadings">Task Lists</h2>
                        <p>Create task lists using <code>- [ ]</code> for unchecked and <code>- [x]</code> for checked:</p>
                        <Editor prompt={`- [x] Task 1\n- [ ] Task 2`} />
                        <p>Task lists are a great way to keep track of items or steps in a process. They are especially useful for checklists, to-do lists, or tracking progress on projects. The checkboxes are not interactive but are great for display.</p>
                    </section>

                    {/* Links */}
                    <section id="links" className="markdown-section">
                        <h2 class="subheadings">Links</h2>
                        <p>Create links using the following syntax:</p>
                        <Editor prompt={`[I'm a link](https://www.learn-markdown-game.com)`} />
                        <p>Or use reference-style links:</p>
                        <Editor prompt={`[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[Arbitrary case-insensitive reference text]: https://www.learn-markdown-game.com`} />
                        <p>Links can help direct users to additional resources or related content. Reference-style links are useful for maintaining readability, especially with long URLs.</p>
                        <p>You can also add titles to links for additional context, which appears on hover:</p>
                        <Editor prompt={`[Visit my website](https://www.learn-markdown-game.com "Check out my personal site")`} />
                    </section>


                    {/* Images */}
                    <section id="images" className="markdown-section">
                        <h2 class="subheadings">Images</h2>
                        <p>Images can be added similarly to links, with an exclamation point:</p>
                        
                        <h3>Basic Image Syntax</h3>
                        <Editor prompt={`![Alt text](cat.jpg)`} />
                        
                        <h3>Image with Optional Title (hover)</h3>
                        <Editor prompt={`![Cat Image](cat.jpg "This is a cute cat")`} />
                        
                        <p>The <code>alt text</code> describes the image and is important for accessibility. It helps screen readers convey the content to users who are visually impaired. You can also provide an optional title that appears on hover, enhancing the user experience.</p>
                    </section>


                    {/* Code */}
                    <section id="code" className="markdown-section">
                        <h2 class="subheadings">Code and Syntax Highlighting</h2>
                        
                        <p>In Markdown, you can include code snippets in two primary ways: inline code and code blocks.</p>
                        
                        <h3>Inline Code</h3>
                        <p>Wrap inline code with single backticks (<code>`</code>). This is useful for referencing code within a sentence. For example:</p>
                        <Editor prompt={`To declare a variable in JavaScript, use \`let variableName = value;\`.`} />
                        
                        <h3>Code Blocks</h3>
                        <p>For multi-line code blocks, use triple backticks (<code>```</code>) on separate lines before and after the code. This allows you to present larger snippets of code clearly.</p>
                        <Editor prompt={`\`\`\`\nfunction greet() {\n    console.log('Hello, world!');\n}\n\`\`\``} />
                        
                        <h3>Syntax Highlighting</h3>
                        <p>To add syntax highlighting, include the programming language right after the first set of triple backticks. This enhances readability and helps others quickly identify the language used:</p>
                        <Editor prompt={`\`\`\`javascript\nfunction greet() {\n    console.log('Hello, world!');\n}\n\`\`\``} />
                        
                        <p>By providing context and clarity through well-structured code examples, you make it easier for readers to understand the code and its functionality. Using syntax highlighting also makes it visually distinct from regular text, improving the overall documentation quality.</p>
                    </section>

                    {/* Footnotes */}
                    <section id="footnotes" className="markdown-section">
                        <h2 class="subheadings">Footnotes</h2>
                        <p>Footnotes are a great way to provide additional information without cluttering the main text. You can add footnotes using the following syntax:</p>
                        <Editor prompt={`Here is a footnote reference[^1].\n\n[^1]: This is the footnote itself.`} />
                        
                        <h3>Explanation</h3>
                        <p>Footnotes can be helpful for citations, definitions, or explanations that might interrupt the flow of reading if included in the body of the text. They allow readers to access additional context or references without losing their place in the main text.</p>
                        <p>For example, you could explain complex terms or provide sources for statistics without breaking the narrative.</p>
                    </section>

                    {/* Tables */}
                    <section id="tables" className="markdown-section">
                        <h2 class="subheadings">Tables</h2>
                        <p>To create tables in Markdown, use pipes (<code>|</code>) to separate columns and dashes (<code>-</code>) to create headers:</p>
                        <Editor prompt={`| Syntax      | Description |\n| ----------- | ----------- |\n| Header      | Title       |\n| Paragraph   | Text        |`} />
                        
                        <h3>Explanation</h3>
                        <p>Tables are useful for organizing data in rows and columns, making it easier to compare information at a glance. Ensure your headers are descriptive, and align your pipes correctly for proper rendering.</p>
                        <p>You can also adjust column alignment using colons (<code>:</code>):</p>
                        <Editor prompt={`| Left Aligned | Center Aligned | Right Aligned |\n|:-------------|:--------------:|--------------:|\n| Item 1      | Item 2         | Item 3       |`} />
                    </section>

                    {/* Blockquotes */}
                    <section id="blockquotes" className="markdown-section">
                        <h2 class="subheadings">Blockquotes</h2>
                        <p>Blockquotes are created by starting a line with the greater-than symbol (<code>&gt;</code>):</p>
                        <Editor prompt={`> This is a blockquote.`} />
                        
                        <h3>Explanation</h3>
                        <p>Blockquotes are useful for emphasizing a specific part of your content, often used for quotes or important notes. You can nest blockquotes by adding additional greater-than symbols:</p>
                        <Editor prompt={`> This is a blockquote.\n>> This is a nested blockquote.`} />
                    </section>

                    {/* Inline HTML */}
                    <section id="inline-html" className="markdown-section">
                        <h2 class="subheadings">Inline HTML</h2>
                        <p>HTML can be used inside Markdown to enhance formatting:</p>
                        <Editor prompt={`<strong>This is bold using HTML</strong>`} />
                        
                        <h3>Explanation</h3>
                        <p>Using HTML in Markdown allows for more control over the styling and layout of your content. This can be especially useful for creating complex layouts or applying specific styles that may not be available in Markdown. However, it may reduce portability between different Markdown parsers.</p>
                        <p>Always ensure that your HTML is valid and test it across various platforms to maintain compatibility.</p>
                    </section>

                    {/* Horizontal Rule */}
                    <section id="horizontal-rule" className="markdown-section">
                        <h2 class="subheadings">Horizontal Rule</h2>
                        <p>Create horizontal rules to visually separate sections of your content. You can use three or more dashes (<code>---</code>), underscores (<code>___</code>), or asterisks (<code>***</code>):</p>
                        <Editor prompt={`---`} />
                        <Editor prompt={`___`} />
                        <Editor prompt={`***`} />
                        
                        <h3>Explanation</h3>
                        <p>Horizontal rules can improve readability by indicating a thematic break between different topics or ideas, helping guide the reader through your content more effectively.</p>
                    </section>

                    {/* YouTube Videos */}
                    <section id="youtube-videos" className="markdown-section">
                        <h2 class="subheadings">YouTube Videos</h2>
                        <p>To include a YouTube video in your Markdown document, you can use an image with a link to the video:</p>
                        <Editor prompt={`[![Video Title](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)`} />
                        
                        <h3>Explanation</h3>
                        <p>This method allows you to provide a visual cue for users to click on, which can improve engagement. Just replace <code>YOUTUBE_VIDEO_ID_HERE</code> with the actual ID of the YouTube video you want to include. Ensure the image link points to a thumbnail of the video to create a better user experience.</p>
                    </section>

                </div>
            </div>
        </>
    );
};

export default CheatSheet;
