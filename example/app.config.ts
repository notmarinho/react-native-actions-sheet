import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'example-bottom-sheet-app',
  slug: 'example-bottom-sheet-app',
  android: {
    package: 'example.bottom.sheet.app',
    softwareKeyboardLayoutMode: 'pan',
  },
  ios: {
    bundleIdentifier: 'example.bottom.sheet.app',
  },
});