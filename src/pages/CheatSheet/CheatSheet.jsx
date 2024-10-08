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
                            <Link to="#lists">Lists</Link>
                            <Link to="#links">Links</Link>
                            <Link to="#images">Images</Link>
                            <Link to="#code">Code and Syntax Highlighting</Link>
                            <Link to="#footnotes">Footnotes</Link>
                            <Link to="#tables">Tables</Link>
                            <Link to="#blockquotes">Blockquotes</Link>
                            <Link to="#inline-html">Inline HTML</Link>
                            <Link to="#horizontal-rule">Horizontal Rule</Link>
                            <Link to="#line-breaks">Line Breaks</Link>
                            <Link to="#task-lists">Task Lists</Link>
                            <Link to="#strikethrough">Strikethrough</Link>
                            <Link to="#mentions">@Mentions</Link>
                            <Link to="#emojis">Emojis</Link>
                            <Link to="#youtube-videos">YouTube Videos</Link>
                        </div>
                    </div>

                    {/* Headings */}
                    <section id="headings" className="markdown-section">
                        <h2>Headings</h2>
                        <p>Headers can be created with <code>#</code> followed by a <code>space</code>.</p>
                        <Editor prompt={`# H1\n\n## H2\n\n### H3\n\n#### H4\n\n##### H5\n\n###### H6`} />
                        <p>Alternatively, for H1 and H2, you can use an underline style:</p>
                        <Editor prompt={`Alt-H1\n======\n\nAlt-H2\n------`} />
                    </section>

                    {/* Emphasis */}
                    <section id="emphasis" className="markdown-section">
                        <h2>Emphasis</h2>
                        <p>Italics and bold can be done using <code>*</code> or <code>_</code> for italics, and <code>**</code> or <code>__</code> for bold:</p>
                        <Editor prompt={`*italic* or _italic_\n\n**bold** or __bold__\n\n~~strikethrough~~`} />
                    </section>

                    {/* Lists */}
                    <section id="lists" className="markdown-section">
                        <h2>Lists</h2>
                        <p>Create ordered and unordered lists:</p>
                        <Editor prompt={`1. First item\n2. Second item\n   - Unordered sub-list\n3. Third item`} />
                    </section>

                    {/* Links */}
                    <section id="links" className="markdown-section">
                        <h2>Links</h2>
                        <p>Create links using the following syntax:</p>
                        <Editor prompt={`[I'm a link](https://www.google.com)`} />
                        <p>Or use reference-style links:</p>
                        <Editor prompt={`[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[Arbitrary case-insensitive reference text]: https://www.google.com`} />
                    </section>

                    {/* Images */}
                    <section id="images" className="markdown-section">
                        <h2>Images</h2>
                        <p>Images can be added similarly to links, with an exclamation point:</p>
                        <Editor prompt={`![alt text](https://via.placeholder.com/150 "Optional title")`} />
                    </section>

                    {/* Code */}
                    <section id="code" className="markdown-section">
                        <h2>Code and Syntax Highlighting</h2>
                        <p>Wrap inline code with backticks, or use triple backticks for code blocks:</p>
                        <Editor prompt={`\`inline code\`\n\n\`\`\`javascript\nconsole.log('Hello World');\n\`\`\``} />
                    </section>

                    {/* Footnotes */}
                    <section id="footnotes" className="markdown-section">
                        <h2>Footnotes</h2>
                        <p>Add footnotes with this syntax:</p>
                        <Editor prompt={`Here is a footnote reference[^1].\n\n[^1]: This is the footnote itself.`} />
                    </section>

                    {/* Tables */}
                    <section id="tables" className="markdown-section">
                        <h2>Tables</h2>
                        <p>Create tables with pipes and dashes:</p>
                        <Editor prompt={`| Syntax      | Description |\n| ----------- | ----------- |\n| Header      | Title       |\n| Paragraph   | Text        |`} />
                    </section>

                    {/* Blockquotes */}
                    <section id="blockquotes" className="markdown-section">
                        <h2>Blockquotes</h2>
                        <p>Blockquotes are created with the greater-than symbol:</p>
                        <Editor prompt={`> This is a blockquote.`} />
                    </section>

                    {/* Inline HTML */}
                    <section id="inline-html" className="markdown-section">
                        <h2>Inline HTML</h2>
                        <p>HTML can be used inside Markdown:</p>
                        <Editor prompt={`<strong>This is bold using HTML</strong>`} />
                    </section>

                    {/* Horizontal Rule */}
                    <section id="horizontal-rule" className="markdown-section">
                        <h2>Horizontal Rule</h2>
                        <p>Create horizontal rules with three or more dashes:</p>
                        <Editor prompt={`---`} />
                    </section>

                    {/* Line Breaks */}
                    <section id="line-breaks" className="markdown-section">
                        <h2>Line Breaks</h2>
                        <p>To create line breaks, hit Enter once for a new line, or twice for a new paragraph:</p>
                        <Editor prompt={`This is line one.  \n\nThis is line two.`} />
                    </section>

                    {/* Task Lists */}
                    <section id="task-lists" className="markdown-section">
                        <h2>Task Lists</h2>
                        <p>Create task lists using <code>- [ ]</code> for unchecked and <code>- [x]</code> for checked:</p>
                        <Editor prompt={`- [x] Task 1\n- [ ] Task 2`} />
                    </section>

                    {/* Strikethrough */}
                    <section id="strikethrough" className="markdown-section">
                        <h2>Strikethrough</h2>
                        <p>Strike through text with <code>~~</code>:</p>
                        <Editor prompt={`~~This text is struck through~~`} />
                    </section>

                    {/* @Mentions */}
                    <section id="mentions" className="markdown-section">
                        <h2>@Mentions</h2>
                        <p>You can mention other users by using the <code>@</code> symbol:</p>
                        <Editor prompt={`@octocat`} />
                    </section>

                    {/* Emojis */}
                    <section id="emojis" className="markdown-section">
                        <h2>Emojis</h2>
                        <p>Use GitHub-supported emoji codes to display emojis:</p>
                        <Editor prompt={`I love coding! :heart:`} />
                    </section>

                    {/* YouTube Videos */}
                    <section id="youtube-videos" className="markdown-section">
                        <h2>YouTube Videos</h2>
                        <p>To include a YouTube video, use an image with a link to the video:</p>
                        <Editor prompt={`[![Video Title](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)`} />
                    </section>
                </div>
            </div>
        </>
    );
};

export default CheatSheet;
