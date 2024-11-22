import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonBrowser from './components/PokemonBrowser';
import CreatePokemonForm from './components/CreatePokemonForm';

const router = createBrowserRouter([
  ...["/", "/pokemon", "/pokemon/:pokemonId"].map((path) => ({
      path,
      element:  <PokemonBrowser />
    })),
    {
      path: "/pokemon",
      element: <CreatePokemonForm />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
