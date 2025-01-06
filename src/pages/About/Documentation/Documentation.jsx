import React from 'react';
import './Documentation.css';
import Navbar from '../../../components/Navbar/Navbar';

const Documentation = () => {
    return (
        <>
            <Navbar />
            <div className="documentation-container">
                <h1>Documentation</h1>

                {/* Overview of the Website */}
                <section>
                    <h2>Overview</h2>
                    <p>
                        The Learn Markdown Game website is an interactive platform designed to help users master Markdown. This engaging game-based learning approach guides users through levels to explore Markdown's syntax and functionality. It includes resources like cheat sheets, live editors, and interactive levels to reinforce learning.
                    </p>
                </section>

                {/* What is Markdown */}
                <section>
                    <h2>What is Markdown?</h2>
                    <p>
                        Markdown is a lightweight markup language used to format text in a plain-text editor. It allows users to create rich text formatting (like headings, lists, links, and more) without needing complex HTML or other tools.
                    </p>
                    <p>
                        Markdown is widely used in documentation, blogging platforms, and version control systems like GitHub to write README files or comments. It is simple yet powerful, making it a preferred choice for developers and writers.
                    </p>
                </section>

                {/* Navigating the Website */}
                <section>
                    <h2>Navigating the Site</h2>
                    <p>
                        The website includes several features to assist you in learning Markdown efficiently:
                    </p>
                    <ul>
                        <li>
                            <strong>Home Page:</strong> Shows the level-based game where you learn Markdown progressively. Each level presents a challenge or concept that builds on the previous one.
                        </li>
                        <li>
                            <strong>Cheat Sheet:</strong> A concise and well-organized resource for quickly looking up Markdown syntax.
                        </li>
                        <li>
                            <strong>Live Editor:</strong> A practice environment for writing Markdown. Enter Markdown in the editor to see a real-time preview of your formatted text.
                        </li>
                        <li>
                            <strong>Report a Bug:</strong> Allows users to report issues using an integrated email service. You can provide your email and describe the issue.
                        </li>
                    </ul>
                </section>

               

                {/* Level Descriptions */}
                <section>
                    <h2>Level Breakdown</h2>
                    <p>Each level of the Markdown game focuses on a specific Markdown feature:</p>
                    <ul>
                        <li><strong>Level 0:</strong> Normal Text — Learn how to type plain text that renders as expected.</li>
                        <li><strong>Level 1:</strong> Heading 1 — Use a single `#` to create a top-level heading.</li>
                        <li><strong>Level 2:</strong> Horizontal Rule — Add a visual separator using `---`.</li>
                        <li><strong>Level 3:</strong> Checkpoint 1 - Simple Document — Combine headings, horizontal rules, and normal text.</li>
                        <li><strong>Level 4:</strong> Italics — Surround text with single asterisks for emphasis.</li>
                        <li><strong>Level 5:</strong> Bold — Surround text with double asterisks for stronger emphasis.</li>
                        <li><strong>Level 6:</strong> Strikethrough — Strike through text with double tildes.</li>
                        <li><strong>Level 7:</strong> Checkpoint 2 - Simple Text Formatting — Combine italic, bold, and strikethrough formats.</li>
                        <li><strong>Level 8:</strong> Line Breaks — Create line breaks using two spaces at the end of a line.</li>
                        <li><strong>Level 9:</strong> Combining Text Formats — Mix formats like bold and strikethrough.</li>
                        <li><strong>Level 10:</strong> Bold and Italics — Use three asterisks for bold italic text.</li>
                        <li><strong>Level 11:</strong> Checkpoint 3 - Advanced Text Formatting — Use various formats in one document.</li>
                        <li><strong>Level 12:</strong> Inline Code — Enclose code snippets with backticks.</li>
                        <li><strong>Level 13:</strong> Code Block — Write multiline code inside triple backticks.</li>
                        <li><strong>Level 14:</strong> Blockquote — Use the greater than sign to create a blockquote.</li>
                        <li><strong>Level 15:</strong> Checkpoint 4 - Code and Quotes — Combine inline code, code blocks, and blockquotes.</li>
                        <li><strong>Level 16:</strong> All Headings — Learn all six levels of headings, from `#` to `######`.</li>
                        <li><strong>Level 17:</strong> Unordered List — Create lists with dashes, asterisks, or plus signs.</li>
                        <li><strong>Level 18:</strong> Ordered List — Use numbers and periods to create ordered lists.</li>
                        <li><strong>Level 19:</strong> Checkpoint 5 - Lists of Fruits — Combine headings, unordered lists, and ordered lists.</li>
                        <li><strong>Level 20:</strong> Nested Lists — Add subitems to lists.</li>
                        <li><strong>Level 21:</strong> Task List — Create task lists with checkboxes.</li>
                        <li><strong>Level 22:</strong> Table — Use pipes and dashes to structure tables.</li>
                        <li><strong>Level 23:</strong> Checkpoint 6 - Advanced Lists and Tables — Combine advanced lists and tables.</li>
                        <li><strong>Level 24:</strong> Link — Create clickable links with `[text](URL)`.</li>
                        <li><strong>Level 25:</strong> Image — Embed images with `![alt text](URL)`.</li>
                        <li><strong>Level 26:</strong> YouTube Video — Embed YouTube videos using an image link.</li>
                        <li><strong>Level 27:</strong> Disabling Markdown — Escape special characters with backslashes.</li>
                        <li><strong>Level 28:</strong> Checkpoint 7 - Media — Combine links, images, video embeds, and escaped Markdown.</li>
                        <li><strong>Level 29:</strong> Final Checkpoint — Showcase all Markdown techniques learned.</li>
                    </ul>
                    
                </section>

                {/* Additional Resources */}
                <section>
                    <h2>Additional Resources</h2>
                    
                    <p>
                        If you have any questions or encounter issues, feel free to <a href="/#/report-a-bug">report a bug</a>.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Documentation;
