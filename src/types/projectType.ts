export type ProjectProps = {
    name: string;
    description: string;
    stack: string[]; // Array of strings
    live: string; // URL of the project
    sourceCode: string; // URL of the project's source code
};
