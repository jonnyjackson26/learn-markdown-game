const level_info = [
    {
        level: 0,
        name: "Normal Text",
        prompt: "Normal Text",
        message: `Welcome to the \`learn-markdown-game\`! Markdown is commonly used in \`README.md\`, Jupyter notebooks, and various other places. There are 20 levels to this tutorial and a few checkpoints, and by the end you'll be a master of Markdown!      \n In this example, you'll learn the easiest thing in Markdown: **normal text**.     \n Type text in the middle panel to see it rendered in the right panel. Your goal is to recreate whats in the left panel. 
`,
    },
    {
        level: 1,
        name: "Italics",
        prompt: "*Italics*",
        message: `Create *italic text* by adding a single asterisk on both sides of your text.\n \`*\italic text\*\``,
    },
    {
        level: 2,
        name: "Bold",
        prompt: "**Bold**",
        message: `Create **bold text** by adding double asterisks on both sides of your text. \n \`**bold text\**\``,
    },
    {
        level: 3,
        name: "Heading 1",
        prompt: "# Heading 1",
        message: `To create a heading, use a \`#\` followed by a space, then your heading text.\n \`# This is my heading\` `,
    },
    {
        level: 4,
        name: "All Headings",
        prompt: `# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6`,
        message: `Markdown has 6 levels of headings. Heading 1 is the biggest, and Heading 6 is the smallest. \n Heading 1 is followed by 1 hash (\`#\`), Heading 2 by 2 hashes, and so on.
\`\`\`hint
Hint: You can copy the text from the left panel and paste it into the middle if you don't want to type out each heading.
\`\`\``,
    },
    {
        level: 5,
        name: "Horizontal Rule",
        prompt: "---",
        message: `Create a horizontal rule by typing three dashes (\`---\`) on a new line. Horizontal rules are useful for separating sections of your document.`,
    },
    {
        level: 6,
        name: "Checkpoint 1",
        prompt: `# Heading 1\n\n---\n\nNormal Text.\n\n## Heading 2\n\n**Bold Text**\n\n*Italic Text*.`,
        message: ``,
    },
    {
        level: 7,
        name: "Strikethrough",
        prompt: "~~strikethrough~~",
        message: "Strikethrough this text using double tildes. (`~~strikethrough~~`)",
    },
    {
        level: 8,
        name: "Bold and Italics",
        prompt: "***Bold and Italics***",
        message: `To create text thats both bold and italic, use three asterisks on both sides of your text. (\`***Bold and Italics***\`)`,
    },
    {
        level: 9,
        name: "Inline Code",
        prompt: "`Inline Code`",
        message: "To create inline code, use a single backtick on both sides of your text. (\`inline code\`)",
    },
    {
        level: 10,
        name: "Code Block",
        prompt: "```\nCode Block\n```",
        message: `To create a block of code, use triple backticks:

\`\`\`
Your code here
\`\`\``,
    },
    {
        level: 11,
        name: "Blockquote",
        prompt: `> This is a blockquote.`,
        message: `Use the greater-than sign (\`>\`) to create blockquotes:

\`> Quote\``,
    },
    {
        level: 12,
        name: "Checkpoint: Formatting Text",
        prompt: `*Italic*\n\n**Bold**\n\n***Bold and Italics***\n\n\`Inline Code\``,
        message: `**Checkpoint**: Combine italic, bold, bold-and-italics, and inline code formatting into a single document.`,
    },
    {
        level: 13,
        name: "Unordered List",
        prompt: `- Item 1\n- Item 2\n- Item 3`,
        message: `For unordered lists, use dashes, asterisks, or plus signs:

\`- Item\``,
    },
    {
        level: 14,
        name: "Ordered List",
        prompt: `1. Item 1\n2. Item 2\n3. Item 3`,
        message: `Create ordered lists using numbers followed by a period:

\`1. Item\``,
    },
    {
        level: 15,
        name: "Nested Lists",
        prompt: "- Item 1\n  - Subitem 1\n  - Subitem 2\n- Item 2",
        message: "Create a nested list with subitems.",
    },
    {
        level: 16,
        name: "Task List",
        prompt: "- [x] Task 1\n- [ ] Task 2\n- [ ] Task 3",
        message: "Create a task list with one completed task and two pending tasks.",
    },
    {
        level: 17,
        name: "Table",
        prompt: `| Header 1 | Header 2 |\n|----------|----------|\n| Row 1   | Data 1   |\n| Row 2   | Data 2   |`,
        message: `Tables are created using pipes (\`|\`) and dashes (\`-\`).

\`\`\`
| Header 1 | Header 2 |
|---------|---------|
| Row 1   | Data 1  |
| Row 2   | Data 2  |
\`\`\``,
    },
    {
        level: 18,
        name: "Checkpoint: Lists and Tables",
        prompt: `- List Item 1\n- List Item 2\n\n1. Numbered Item 1\n2. Numbered Item 2\n\n| Header 1 | Header 2 |\n|----------|----------|\n| Row 1   | Data 1   |\n| Row 2   | Data 2   |`,
        message: `**Checkpoint**: Combine your skills with unordered lists, ordered lists, and tables into one Markdown document.`,
    },
    {
        level: 19,
        name: "Link",
        prompt: `[Link Text](https://example.com)`,
        message: `Create links with the syntax:

\`[Link Text](URL)\`

You can make the Link point anywhere you want, but may I suggest \`learn-markdown-game.com\`?`,
    },
    {
        level: 20,
        name: "Image",
        prompt: `![Alt text](cat.jpg)`,
        message: `Embed images using this syntax:

\`![Alt text](URL)\`

Display the image \` cat.jpg\``,
    },
    {
        level: 21,
        name: "YouTube Video",
        prompt: `[![Alt text](https://img.youtube.com/vi/video-id/0.jpg)](https://www.youtube.com/watch?v=video-id)`,
        message: `To embed a YouTube video as a link, use the following syntax:

\`[![Alt text](https://img.youtube.com/vi/video-id/0.jpg)](https://www.youtube.com/watch?v=video-id)\``,
    },
    {
        level: 22,
        name: "Disabling Markdown",
        prompt: "\\*This will not be italic\\*",
        message: `You can disable Markdown formatting by escaping characters using a backslash (\\):

\`\\*Not Italic\\*\``,
    },
    {
        level: 23,
        name: "Final Checkpoint",
        prompt: `Combine everything you've learned into a single Markdown document: headings, lists, tables, links, images, and more!`,
        message: `This is the final checkpoint. Show off everything you've learned in Markdown!`,
    }
];

export default level_info;
