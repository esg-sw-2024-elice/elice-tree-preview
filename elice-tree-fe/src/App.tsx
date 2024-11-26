import { FontProvider } from './providers/font-provider';
import AuthProvider from './providers/auth-provider';
import { RouterProvider } from './providers/router-provider';

function App() {
  return (
    <FontProvider>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </FontProvider>
  );
}

export default App;
