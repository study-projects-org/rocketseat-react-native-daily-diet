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

### 2.5. React Navigation

Para navegação entre telas, foi utilizada a lib `react-navigation`:

```bash
npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context
```

O pacote `react-native-screens` fornece uma maneira nativa de implementar transições e navegação de tela em seu aplicativo. Ele é usado para melhorar o desempenho da navegação em um aplicativo React Native.

O pacote `react-native-safe-area-context` é usado para gerenciar as áreas seguras do dispositivo em seu aplicativo. As áreas seguras são os espaços na tela que não são cobertos por barras de navegação, abas, recortes, entre outros elementos da interface do usuário. Este pacote ajuda a garantir que seu aplicativo seja exibido corretamente em diferentes dispositivos, independentemente de suas áreas seguras específicas.

### 2.6. React Navigation Stack

Para navegação em pilha, foi utilizada a lib `@react-navigation/stack`:

```bash
npm install @react-navigation/native-stack
```

### 2.7. React Native Mask Text

Para mascarar textos, foi utilizada a lib `react-native-masked-text`:

```bash
npm install react-native-masked-text
```