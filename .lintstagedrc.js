export default {
  "**/*.(ts|tsx)": () => ["pnpm run check-types"],
  "*{js,jsx,ts,tsx}": "eslint --fix",
  "*.{css,html,js,json,jsx,md,ts,tsx}": "prettier --write",
};
