# Procedimentos de criação do projeto e instalação de dependências

## 1. Criação do projeto

Para criar um projeto React Native em branco com Expo:

```bash
npx create-expo-app -t expo-template-blank-typescript
```

## 2. Instalação de dependências

### 2.1. Babel plugin module resolver

Para resolver os caminhos dos módulos de forma mais fácil, instale o plugin `module-resolver`:

```bash
npm install --save-dev babel-plugin-module-resolver
```

Deve-se alterar os arquivos `babel.config.js` e o `tsconfig.json` para que o plugin funcione corretamente.

Exemplo de configuração do `babel.config.js`:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: [' ./src '],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',
        }
      }]
    ]
  };
};
```

Exemplo de configuração do `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@assets/*": ["assets/*"],
      "@components/*": ["components/*"],
      "@routes/*": ["routes/*"],
      "@screens/*": ["screens/*"],
      "@storage/*": ["storage/*"],
      "@theme/*": ["theme/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

### 2.2. Styled components

Para estilização dos componentes, foi utilizada a lib `styled-components`:

```bash
npx expo install react-dom

npm install styled-components
```

Antes da instalação do `styled-components`, é necessário instalar o `react-dom` para que a lib funcione corretamente.

### 2.3. Expo Google Fonts

Para utilizar fontes do Google Fonts no projeto, foi utilizada a lib `expo-google-fonts` e afonte `Nunito Sans`:

```bash
npx expo install expo-font @expo-google-fonts/nunito-sans
```

### 2.4. React Native SVG

Para utilizar SVGs no projeto, foi utilizada a lib `react-native-svg`:

```bash
npx expo install react-native-svg
```