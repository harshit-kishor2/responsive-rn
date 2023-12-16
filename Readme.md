
A responsive utility class for React Native that simplifies the process of creating responsive designs by providing functions to scale dimensions and font sizes based on the device screen dimensions. This utility supports both Android and iOS platforms.

## Installation

```bash
yarn add @harshitkishor/rn-responsive
```

```javascript
// Import necessary functions and initialize the package
import { rpInitialize, rpFont, rpWidth, rpHeight, rpNormalize } from '@harshitkishor/rn-responsive';

// Initialize with initial dimensions in your Entry file App.tsx
rpInitialize({ height: initialHeight, width: initialWidth });


// Use responsive functions in your any components
const widthValue = rpWidth(100); // Get a responsive width value
const heightValue = rpHeight(50); // Get a responsive height value
const fontValue = rpFont(16); // Get a responsive font size

// Use the normalize function directly if needed
const normalizedWidth = rpNormalize(150, 'width'); // Normalize a size based on width
const normalizedHeight = rpNormalize(40, 'height'); // Normalize a size based on height

```


### Features
**Responsive Width:** rpWidth(size: number): number - Get a responsive width value based on the initial dimensions.

**Responsive Height**: rpHeight(size: number): number - Get a responsive height value based on the initial dimensions.

**Responsive Font Size:** rpFont(size: number): number - Get a responsive font size based on the initial dimensions.

**Normalize Size:** rpNormalize(size: number, based?: 'width' | 'height'): number - Normalize a size based on the specified dimension (default is width).


### Example

```javascript
// Initialize with device dimensions
rpInitialize({ height: 667, width: 375 });

// Use responsive functions
const widthValue = rpWidth(100); // Result will depend on the screen dimensions
const heightValue = rpHeight(50); // Result will depend on the screen dimensions
const fontValue = rpFont(16); // Result will depend on the screen dimensions
 
```


### API

1. **rpInitialize(params: { height: number, width: number }): void**
Initialize the responsive package with the initial dimensions.

2. **rpWidth(size: number): number**
Get a responsive width value based on the initial dimensions.

3. **rpHeight(size: number): number**
Get a responsive height value based on the initial dimensions.

4. **rpFont(size: number): number**
Get a responsive font size based on the initial dimensions.

5. **rpNormalize(size: number, based?: 'width' | 'height'): number**
Normalize a size based on the specified dimension (default is width).


###### Author- Harshit Kishor
Medium Blog - [Medium][1]

[1]: https://medium.com/@harshitkishor2/creating-responsive-designs-in-react-native-with-harshit-kishor2-rn-responsive-63d71af92b91 "Medium Blog"