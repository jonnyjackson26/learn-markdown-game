// Function to calculate Levenshtein distance (only for alphabetic characters)
const levenshteinDistance = (a, b) => {
    const matrix = [];
  
    // Increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
  
    // Increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
  
    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }
  
    return matrix[b.length][a.length];
  };
  
  // Function to separate alphabetic characters and non-alphabetic (markdown syntax)
  const separateMarkdownSyntax = (str) => {
    const syntax = [];
    const content = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        content.push(char.toLowerCase()); // Store alphabetic characters (lowercase for comparison)
      } else {
        syntax.push({ char, index: i }); // Store syntax characters with their positions
      }
    }
  
    return { syntax, content: content.join('') };
  };
  
  // Main validation function
  export const isValidMarkdown = (markdown, level_info, level) => {
    const userMarkdown = markdown.trim();
    const promptMarkdown = level_info[level].prompt.trim();
  
    // Separate syntax and content for both user input and prompt
    const { syntax: userSyntax, content: userContent } = separateMarkdownSyntax(userMarkdown);
    const { syntax: promptSyntax, content: promptContent } = separateMarkdownSyntax(promptMarkdown);
  
    // Check if non-alphabetic characters match exactly in the same positions
    if (userSyntax.length !== promptSyntax.length) return false; // Mismatch in number of non-alphabet characters
    for (let i = 0; i < userSyntax.length; i++) {
      if (userSyntax[i].char !== promptSyntax[i].char || userSyntax[i].index !== promptSyntax[i].index) {
        return false; // Exact syntax mismatch
      }
    }
  
    // Set a threshold for allowed typos (Levenshtein distance) on alphabetic content
    const typoThreshold = 1;
  
    // Check if the alphabetic content is within the allowed typo threshold
    return levenshteinDistance(userContent, promptContent) <= typoThreshold;
  };
  