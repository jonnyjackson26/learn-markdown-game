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
                    <p>This is intended as a quick reference and showcase. For more complete info, see John Gruber's original spec and the GitHub-flavored Markdown info page.</p>

                    <div className="table-of-contents">
                        <h2>Table of Contents</h2>
                        <div className="toc-grid">
                            <Link to="#headings">Headings</Link>
                            <Link to="#emphasis">Emphasized Text</Link>
                            <Link to="#tables">Tables</Link>
                            {/* Add more sections as needed */}
                        </div>
                    </div>

                    <section id="headers" className="markdown-section">
                        <h2>Headers</h2>
                        <p>Headers can be created with <code>#</code> followed by a <code>space</code>.</p>
                        <Editor prompt="# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6" />
                        <p>Alternatively, for H1 and H2, you can use an underline style:</p>
                        <Editor prompt="Alt-H1\n======\n\nAlt-H2\n------" />
                    </section>

                    <section id="emphasis" className="markdown-section">
                        <h2>Emphasis</h2>
                        <p>Emphasis, aka italics, can be done with <code>*asterisks*</code> or <code>_underscores_</code>.</p>
                        <Editor prompt="_italic_\n**bold**\n~~strikethrough~~" />
                    </section>

                    <section id="lists" className="markdown-section">
                        <h2>Lists</h2>
                        <p>Ordered and unordered lists can be created like this:</p>
                        <Editor prompt="1. First ordered list item\n2. Another item\n   - Unordered sub-list" />
                    </section>

                    <section id="links" className="markdown-section">
                        <h2>Links</h2>
                        <p>Links can be created using the following syntax:</p>
                        <Editor prompt="[I'm an inline-style link](https://www.google.com)" />
                    </section>

                    <section id="images" className="markdown-section">
                        <h2>Images</h2>
                        <p>Images can be included using this syntax:</p>
                        <Editor prompt="![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text')" />
                    </section>

                    <section id="code" className="markdown-section">
                        <h2>Code and Syntax Highlighting</h2>
                        <p>Inline code can be wrapped in backticks, and code blocks can be fenced with three backticks:</p>
                        <Editor prompt="`inline code`\n```javascript\nconsole.log('Hello World!');\n```" />
                    </section>

                    <section id="footnotes" className="markdown-section">
                        <h2>Footnotes</h2>
                        <p>Footnotes can be added using the following syntax:</p>
                        <Editor prompt="Here is a simple footnote[^1].\n\n[^1]: My reference." />
                    </section>

                    <section id="tables" className="markdown-section">
                        <h2>Tables</h2>
                        <p>Tables can be created like this:</p>
                        <Editor prompt="| Header 1 | Header 2 |\n| --------- | --------- |\n| Row 1    | Row 2    |" />
                    </section>

                    <section id="blockquotes" className="markdown-section">
                        <h2>Blockquotes</h2>
                        <p>Blockquotes are created with the greater-than symbol:</p>
                        <Editor prompt="> This is a blockquote." />
                    </section>

                    <section id="inline-html" className="markdown-section">
                        <h2>Inline HTML</h2>
                        <p>Raw HTML can be used within Markdown:</p>
                        <Editor prompt="<strong>This is bold using HTML</strong>" />
                    </section>

                    <section id="horizontal-rule" className="markdown-section">
                        <h2>Horizontal Rule</h2>
                        <p>Horizontal rules can be created with three or more dashes:</p>
                        <Editor prompt="---" />
                    </section>

                    <section id="line-breaks" className="markdown-section">
                        <h2>Line Breaks</h2>
                        <p>To create line breaks, hit <code>Enter</code> once for a new line, or twice for a new paragraph:</p>
                        <Editor prompt="This is line one.  \nThis is line two." />
                    </section>

                    <section id="youtube-videos" className="markdown-section">
                        <h2>YouTube Videos</h2>
                        <p>To include a YouTube video, use an image with a link:</p>
                        <Editor prompt="[![Video Title](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default CheatSheet;
