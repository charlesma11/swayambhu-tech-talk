import './App.css';
import { Unity, useUnityContext } from 'react-unity-webgl';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'Build/SampleGame.loader.js',
    dataUrl: 'Build/SampleGame.data',
    frameworkUrl: 'Build/SampleGame.framework.js',
    codeUrl: 'Build/SampleGame.wasm',
  });

  return (
    <div className="App">
      <header className="App-header">
        <Unity unityProvider={unityProvider} style={{ height: '800px' }} />
      </header>
    </div>
  );
}

export default App;
