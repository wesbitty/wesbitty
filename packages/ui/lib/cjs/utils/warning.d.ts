/**
 * Helper function to show warning in the console during development
 * @param {expression} assert - assertion to test
 * @param {string} scope - location of the warning, usually a component
 * @param {string} message - instructions about the warning
 */
declare function warn(assert: boolean, scope: string, message: string): void;
export default warn;
