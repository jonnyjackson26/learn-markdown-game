const level_info = [
    {
        level: 0,
        name: "Normal Text",
        prompt: "Normal Text",
        message: `In this example, you'll learn the easiest thing in Markdown: **normal text**.  \nType text in the middle panel to see it rendered in the right panel. Your goal is to recreate what's in the left panel.`,
    },
    {
        level: 1,
        name: "Heading 1",
        prompt: "# Heading 1",
        message: `To create a heading, use a \`#\` followed by a space, then your heading text.\n\`# This is my heading\``,
    },
    {
        level: 2,
        name: "Horizontal Rule",
        prompt: "---",
        message: `Create a horizontal rule by typing three dashes (\`---\`) on a new line. Horizontal rules are useful for separating sections of your document.`,
    },
    {
        level: 3,
        name: "Checkpoint 1 - Simple Document",
        prompt: `# Heading 1\n\n---\n\nNormal Text.`,
        message: `**Checkpoint**: Combine a heading, horizontal rule, and normal text into a single document.`,
    },
    {
        level: 4,
        name: "Italics",
        prompt: "*Italics*",
        message: `Create *italic text* by adding a single asterisk on both sides of your text.\n\`*italic text*\``,
    },
    {
        level: 5,
        name: "Bold",
        prompt: "**Bold**",
        message: `Create **bold text** by adding double asterisks on both sides of your text.\n\`**bold text**\``,
    },
    {
        level: 6,
        name: "Strikethrough",
        prompt: "~~strikethrough~~",
        message: "Strikethrough this text using double tildes. (`~~strikethrough~~`)",
    },
    {
        level: 7,
        name: "Checkpoint 2 - Simple Text Formatting",
        prompt: `*Italic* **Bold** ~~Strikethrough~~`,
        message: `**Checkpoint**: Combine italic, bold, and strikethrough formatting into a single document.`,
    },
    {
        level: 8,
        name: "Line Breaks",
        prompt: "First line  \n\nSecond line",
        message: `To create a line break, end a line with two spaces before pressing enter.\n\`First line\\n  \nSecond line\`\nNotice the two spaces after "line" in the first line.`,
    },
    {
        level: 9,
        name: "Combining Text Formats",
        prompt: "**~~Bold and strikethrough~~**",
        message: `You can combine multiple text formats. Here's an example of bold and strikethrough combined:\n\`**~~Bold and strikethrough~~**\``,
  },
    {
        level: 10,
        name: "Bold and Italics",
        prompt: "***Bold and Italics***",
        message: `To create text that's both bold and italic, use three asterisks on both sides of your text. (\`***Bold and Italics***\`)`,
    },
    {
        level: 11,
        name: "Checkpoint 3 - Advanced Text Formatting",
        prompt: "***hello***  \n\n*~~world~~*",
        message: `**Checkpoint**: Notice that all this text is italicized, while the first line is bold and the second line is struckthrough.`,
    },
    {
        level: 12,
        name: "Inline Code",
        prompt: "`Inline Code`",
        message: "To create inline code, use a single backtick (\\`) on both sides of your text. \n\\`\`inline code\`\\`",
    },
    {
        level: 13,
        name: "Code Block",
        prompt: `\`\`\`\nfor i in range(10):\n    print(i)\n\`\`\``,
        message: `To create a block of code, use triple backticks (\`\`\`) on a new line before and after your code.  \n\`\`\`\nline one of your code \nline two\n\`\`\``,
    },
    {
        level: 14,
        name: "Blockquote",
        prompt: `> blockquote`,
        message: `Use the greater-than sign (\`>\`) to create blockquotes:\n\n\`> Quote\``,
    },
    {
        level: 15,
        name: "Checkpoint 4 - Code and Quotes",
        prompt: `\`Inline Code\`\n\n\`\`\`\nCode Block\n\`\`\`\n\n> Blockquote`,
        message: `**Checkpoint**: Combine bold and italics, inline code, code block, and blockquote formatting into a single document.`,
    },
    {
        level: 16,
        name: "All Headings",
        prompt: `# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6`,
        message: `Markdown has 6 levels of headings. Heading 1 is the biggest, and Heading 6 is the smallest.\nHeading 1 is followed by 1 hash (\`#\`), Heading 2 by 2 hashes, and so on.`,
    },
    {
        level: 17,
        name: "Unordered List",
        prompt: `- Apple\n- Banana\n- Orange`,
        message: `For unordered lists, use dashes, asterisks, or plus signs:  \n\`- Item\``,
    },
    {
        level: 18,
        name: "Ordered List",
        prompt: `1. Apple\n2. Banana\n3. Orange`,
        message: `Create ordered lists using numbers followed by a period:  \n\`1. Item \``,
    },
    {
        level: 19,
        name: "Checkpoint 5 - Lists of Fruits",
        prompt: `# Main Heading\n\n## Subheading\n\n- Apple\n- Orange\n\n1. Banana\n2. Mango`,
        message: `**Checkpoint**: Combine headings, unordered list, and ordered list into a single document.`,
    },
    {
        level: 20,
        name: "Nested Lists",
        prompt: "- Item 1\n  - Subitem 1\n  - Subitem 2\n- Item 2",
        message: "Create a nested list with subitems.",
    },
    {
        level: 21,
        name: "Task List",
        prompt: "- [x] sleep\n- [ ] eat\n- [ ] exercise",
        message: "Create a task list with one completed task and two pending tasks.",
    },
    {
        level: 22,
        name: "Table",
        prompt: `| First | Last |\n|----------|----------|\n| Lebron   | James   |\n| Michael   | Jordan  |`,
        message: `Tables are created using pipes (\`|\`) and dashes (\`-\`).\n\n\`\`\`\n| Header 1 | Header 2 |\n|---------|----------|\n| Row 1   | Data 1   |\n| Row 2   | Data 2   |\n\`\`\``,
    },
    {
        level: 23,
        name: "Checkpoint 6 - Advanced Lists and Tables",
        prompt: `- Nested List\n  - Subitem 1\n  - Subitem 2\n\n---\n\n- [ ] Pending Task\n- [x] Completed Task\n\n---\n\n| Letters | Numbers |\n|----------|----------|\n| A   | 1   |`,
        message: `**Checkpoint**: Combine nested list, task list, and table into a single document.`,
    },
    {
        level: 24,
        name: "Link",
        prompt: `[Link Text](https://learn-markdown-game.com)`,
        message: `Create links with the syntax:  \n\`[Link Text](URL)\`  \nTo pass this level, put the URL as  \`https://learn-markdown-game.com\``,
    },
    {
        level: 25,
        name: "Image",
        prompt: `![Alt Text](cat.jpg)`,
        message: `Embed images using this syntax:  \n\`![Alt text](URL)\`  \nDisplay the image \`cat.jpg\`, and make sure the Alt Text is \`Alt Text\``,
    },
    {
        level: 26,
        name: "YouTube Video",
        prompt: `[![Alt Text](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`,
        message: `To add a YouTube video, you really just add an image that acts as a link to the youtube video. Use the link below with alt text \`"Alt Text"\`  \n\`[![Alt Text](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\``,
    },
    {
        level: 27,
        name: "Disabling Markdown",
        prompt: "\\*This will not be italic\\*",
        message: `You can disable Markdown formatting by escaping characters using a backslash (\\):  \n\`\\*Not Italic\\*\``,
    },
    {
        level: 28,
        name: "Checkpoint 7 - Media",
        prompt: `[Visit our website](https://example.com)\n\n![Cute cat](cat.jpg)\n\n[![Funny video](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n\\*\\*This is not bold\\*\\*`,
        message: `**Checkpoint**: Combine link, image, YouTube video embed, and escaped Markdown into a single document.`,
    },
    {
        level: 29,
        name: "Final Checkpoint",
        prompt: `# Markdown Mastery\n\n## Demonstration of Skills\n\n### Text Formatting\n\n*Italic*, **bold**, and ***bold italic*** text.\n\n### Lists\n\n- Unordered list item 1\n- Unordered list item 2\n  - Nested item\n\n1. Ordered list item 1\n2. Ordered list item 2\n\n### Task List\n\n- [x] Completed task\n- [ ] Pending task\n\n### Code\n\nInline \`code\` and a code block:\n\n\`\`\`python\nprint("Hello, Markdown!")\n\`\`\`\n\n### Blockquote\n\n> This is a blockquote.\n\n### Table\n\n| Header 1 | Header 2 |\n|----------|----------|\n| Row 1    | Data 1   |\n| Row 2    | Data 2   |\n\n### Links and Images\n\n[Visit our website](https://example.com)\n\n![Cute cat](cat.jpg)\n\n### Escaped Characters\n\n\\*This is not italic\\*\n\n---\n\nCongratulations on completing the Markdown tutorial!`,
        message: `This is the final checkpoint. Show off everything you've learned in Markdown!`,
    },
];

export default level_info;
