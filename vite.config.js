import { defineConfig, lazyPlugins } from 'vite-plus';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  fmt: {
    "singleQuote": false,
    "printWidth": 100,
    "trailingComma": "all",
    "tabWidth": 2,
    "semi": true,
    "bracketSpacing": true,
    "arrowParens": "always",
    "sortImports": {
      "groups": [
        "type",
        "builtin",
        "external",
        [
          "internal",
          "subpath"
        ],
        "parent",
        "sibling",
        "index",
        "style",
        "unknown"
      ]
    },
    "sortTailwindcss": true
  },
  lint: {
    "plugins": [
      "react",
      "typescript",
      "unicorn",
      "oxc"
    ],
    "jsPlugins": [
      {
        "name": "vite-plus",
        "specifier": "vite-plus/oxlint-plugin"
      }
    ],
    "rules": {
      "vite-plus/prefer-vite-plus-imports": "error",
      "no-array-constructor": "error",
      "no-console": [
        "warn",
        {
          "allow": [
            "error"
          ]
        }
      ],
      "no-unused-vars": [
        "warn",
        {
          "args": "after-used",
          "argsIgnorePattern": "^_.*?$",
          "caughtErrorsIgnorePattern": "^_.*?$"
        }
      ],
      "no-var": "error",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "typescript/no-empty-object-type": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-function-type": "error"
    },
    "options": {
      "typeAware": true,
      "typeCheck": true
    },
    "categories": {
      "correctness": "error"
    },
    "env": {
      "browser": true,
      "node": true,
      "serviceworker": true
    },
    "ignorePatterns": [
      "node_modules",
      "dist",
      "coverage",
      ".idea"
    ]
  },
  plugins: lazyPlugins(() => [react()]),
});
