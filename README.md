# svg-reacticons

This package provides SVG icons packaged as a group of [React](https://facebook.github.io/react/) components.

## Installation

Install the package in your project directory with:

```sh
npm install svg-reacticons
```

## Usage

When importing an icon, keep in mind that the names of the icons are `PascalCase`, for instance:

- `microwave` is exposed as `svg-reacticons/icons/MicrowaveOutline`
- `truck` is exposed as `svg-reacticons/icons/TruckOutline`

## Imports

- If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:

```jsx
import MicrowaveIcon from '@material-ui/icons/MicrowaveOutline';
import TruckIcon from '@material-ui/icons/TruckOutline';
```

- If your environment support tree-shaking you can also import the icons this way:

```jsx
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
```

Note: Importing named exports in this way will result in the code for *every icon* being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance.
