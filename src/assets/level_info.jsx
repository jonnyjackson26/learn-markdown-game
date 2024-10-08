const level_info = [
    {
        level: 0,
        name: "Normal Text",
        prompt: "Normal Text",
        message: `Welcome to the \`learn-markdown-game\`! Markdown is commonly used in \`README.md\`, Jupyter notebooks, and various other places.
        
Let's start learning Markdown with some basic formatting.

In this example, you'll learn the easiest thing in Markdown: **normal text**.

You need to recreate on the right panel what is shown on the left. You do this by typing in the middle panel.`,
    },
    {
        level: 1,
        name: "Heading 1",
        prompt: "# Heading 1",
        message: `Let's begin by creating a heading:

# large heading

To do this, use a \`#\` followed by a space for Heading 1.

Example: \n\`# Heading 1\``,
    },
    {
        level: 2,
        name: "Other Headings",
        prompt: `# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6`,
        message: `Markdown has 6 levels of headings. Heading 1 is the biggest, and Heading 6 is the smallest.

Create a heading for each level.

\`\`\`hint
Hint: You can copy the text from the left panel and paste it into the middle if you don't want to type out each heading.
\`\`\``,
    },
    {
        level: 3,
        name: "Horizontal Rule",
        prompt: "---",
        message: `Create horizontal rules using three or more dashes, asterisks, or underscores:

\`---\` or \`***\` or \`___\``,
    },
    {
        level: 4,
        name: "Checkpoint: Headings and Paragraphs",
        prompt: `# Heading 1\n\n---\n\nThis is a paragraph under Heading 1.\n\n## Heading 2\n\nThis is a paragraph under Heading 2.`,
        message: `**Checkpoint**: Combine your knowledge of headings and paragraphs.

Create two headings, each followed by a paragraph.`,
    },
    {
        level: 5,
        name: "Italics",
        prompt: "*Italics*",
        message: `To italicize text, use asterisks or underscores:

\`*italic*\` or \`_italic_\``,
    },
    {
        level: 6,
        name: "Bold",
        prompt: "**Bold**",
        message: `For bold text, use double asterisks or underscores:

\`**bold**\` or \`__bold__\``,
    },
    {
        level: 7,
        name: "Bold and Italics",
        prompt: "***Bold and Italics***",
        message: `Combine bold and italics using triple asterisks or underscores:

\`***bold and italic***\` or \`___bold and italic___\``,
    },
    {
        level: 8,
        name: "Inline Code",
        prompt: "`Inline Code`",
        message: `Use backticks to create inline code snippets:

\`\` \`code\` \`\``,
    },
    {
        level: 9,
        name: "Checkpoint: Formatting Text",
        prompt: `*Italic*\n\n**Bold**\n\n***Bold and Italics***\n\n\`Inline Code\``,
        message: `**Checkpoint**: Combine italic, bold, bold-and-italics, and inline code formatting into a single document.`,
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
        name: "Table",
        prompt: `| Header 1 | Header 2 |\n|----------|----------|\n| Row 1   | Data 1   |\n| Row 2   | Data 2   |`,
        message: `Tables are created using pipes (\`|\`) and dashes (\`-\`).

\`\`\`
| Header | Header |
|--------|--------|
| Row 1  | Data 1 |
| Row 2  | Data 2 |
\`\`\``,
    },
    {
        level: 12,
        name: "Unordered List",
        prompt: `- Item 1\n- Item 2\n- Item 3`,
        message: `For unordered lists, use dashes, asterisks, or plus signs:

\`- Item\``,
    },
    {
        level: 13,
        name: "Ordered List",
        prompt: `1. Item 1\n2. Item 2\n3. Item 3`,
        message: `Create ordered lists using numbers followed by a period:

\`1. Item\``,
    },
    {
        level: 14,
        name: "Checkpoint: Lists and Tables",
        prompt: `- List Item 1\n- List Item 2\n\n1. Numbered Item 1\n2. Numbered Item 2\n\n| Header 1 | Header 2 |\n|----------|----------|\n| Row 1   | Data 1   |\n| Row 2   | Data 2   |`,
        message: `**Checkpoint**: Combine your skills with unordered lists, ordered lists, and tables into one Markdown document.`,
    },
    {
        level: 15,
        name: "Blockquote",
        prompt: `> This is a blockquote.`,
        message: `Use the greater-than sign (\`>\`) to create blockquotes:

\`> Quote\``,
    },
    {
        level: 16,
        name: "Image",
        prompt: `![Alt text](cat.jpg)`,
        message: `Embed images using this syntax:

\`![Alt text](URL)\`

Dispaly the image \` cat.jpg\``,
    },
    {
        level: 17,
        name: "Link",
        prompt: `[Link Text](https://example.com)`,
        message: `Create links with the syntax:

\`[Link Text](URL)\`

You can make the Link point anywhere you want, but may I suggest \`learn-markdown-game.com\`?
`,
    },
    {
        level: 18,
        name: "Checkpoint: Blockquote, Images, and Links",
        prompt: `> Blockquote\n\n![Image](catjpg)\n\n[Link Text](https://learn-markdown-game.com)`,
        message: `**Checkpoint**: Combine blockquotes, images, and links in a single document.`,
    },
];

export default level_info;
