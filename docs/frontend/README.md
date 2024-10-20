# Instructions

## Commands used to create the project structure

- Run these commands only if the Workspace was not created before:
```sh
npx create-nx-workspace@latest projectx --preset=apps
cd projectx
```

- Create web project:
```sh
npx nx add @nx/remix
npx nx g @nx/remix:app apps/web
```

More details [here](https://nx.dev/recipes/react/remix).

- Install Tailwind CSS:
```sh
npm add -D tailwindcss postcss autoprefixer postcss-import
npx nx g setup-tailwind --project=web
```

- Create a UI lib to be able to publish to a npm registry:
```sh
npx nx g @nx/react:lib libs/ui --publishable --importPath=@projectx/ui
npx nx add @nx/storybook
npm add -D @babel/preset-react @babel/preset-typescript
npx nx g storybook-configuration --project=ui
```

- Create some UI components with Storybook stories:
```sh
npx nx g @nx/react:component --project=ui --path=libs/ui/src/lib/buttons/button/Button
npx nx g @nx/react:component --project=ui --path=libs/ui/src/lib/buttons/theme/ThemeButton
npx nx g @nx/react:component --project=ui --path=libs/ui/src/lib/header/Header
npx nx g @nx/react:component --project=ui --path=libs/ui/src/lib/footer/Footer
npx nx g @nx/react:stories --project=ui
```

- Create the styles/theme with `TailwindCSS`:
```sh
npx nx g setup-tailwind --project=ui
npm add -D @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
```

- Update the `libs/ui/project.json` to export the `tailwind.config` file as a preset:
```json
"build": {
    "executor": "nx:run-commands",
    "outputs": ["{options.outputPath}"],
    "options": {
    "commands": [
        {
        "command": "nx run ui:build:lib"
        },
        {
        "command": "npx tsc -p libs/ui/tsconfig.tailwind.json"
        }
    ],
    "parallel": false
    }
},
"build:lib": {
...
```

- Import the `TailwindCSS` preset from the app:
```ts
import uiTailwindConfig from '../../libs/ui/tailwind.config.ts';

export default {
  ...
  presets: [uiTailwindConfig],
} satisfies Config;
```

- Install More dependencies for UX:
```sh
npm i -D daisyui@latest 
npm add @heroicons/react @headlessui/react framer-motion usehooks-ts react-responsive
```