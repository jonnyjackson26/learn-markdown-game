import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Import remark-gfm
import { renderToStaticMarkup } from 'react-dom/server';

// Function to calculate Levenshtein distance
const levenshteinDistance = (a, b) => {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

// Main validation function
const isValidMarkdown = (userMarkdown, levelInfo, currentLevel) => {
    const userMarkdownTrimmed = userMarkdown.trim();
    const promptMarkdown = levelInfo[currentLevel].prompt.trim();

    // Render both markdown inputs to static HTML
    const userHtml = renderToStaticMarkup(<ReactMarkdown remarkPlugins={[remarkGfm]}>{userMarkdownTrimmed}</ReactMarkdown>);
    const promptHtml = renderToStaticMarkup(<ReactMarkdown remarkPlugins={[remarkGfm]}>{promptMarkdown}</ReactMarkdown>);

    // Compare rendered HTML directly
    if (userHtml.toLowerCase() === promptHtml.toLowerCase()) {
        return true; // If rendered HTML matches, it's valid
    }

    // Allow some typos in the alphabetic content
    const userContent = userMarkdownTrimmed.replace(/~~/g, '').replace(/~/g, '').toLowerCase();
    const promptContent = promptMarkdown.replace(/~~/g, '').replace(/~/g, '').toLowerCase();

    const typoThreshold = 1; // You can adjust the threshold if needed
    return levenshteinDistance(userContent, promptContent) <= typoThreshold;
};

export default isValidMarkdown;
