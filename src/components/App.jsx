import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

// const Cast = lazy(() =>
//   import('../components/Cast/Cast').then(module => ({
//     default: module.Cast,
//   }))
// );

// const Reviews = lazy(() =>
//   import('../components/Reviews/Reviews').then(module => ({
//     default: module.Reviews,
//   }))
// );

// Так мы укоротим лейзи. Сделаем обертку для всех компонентов
const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const KitchenPage = createChunk('KitchenPage');
const BarPage = createChunk('BarPage');
const GeneralPage = createChunk('GeneralPage');
const Kitchen1 = createChunk('Kitchen1');
const Kitchen2 = createChunk('Kitchen2');
const Kitchen3 = createChunk('Kitchen3');
const Bar1 = createChunk('Bar1');
const Bar2 = createChunk('Bar2');
const Bar3 = createChunk('Bar3');
const General1 = createChunk('General1');
const General2 = createChunk('General2');
const General3 = createChunk('General3');

//Здесь не исправлено каст и ревью. Когда нажимаешь при лейзи, страница прыгает. без лейзи все ок
export const App = () => {
  return (
    //<Suspense fallback={<div>Loading...</div>}> перенесли на страницу лейаута потому что именно так весь аутлет, это логичнее

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="kitchen" element={<KitchenPage />}>
          <Route path="kitchen/kitchen1" element={<Kitchen1 />} />
          <Route path="kitchen/kitchen2" element={<Kitchen2 />} />
          <Route path="kitchen/kitchen3" element={<Kitchen3 />} />
        </Route>
        <Route path="kitchen/kitchen1" element={<Kitchen1 />} />
        <Route path="kitchen/kitchen2" element={<Kitchen2 />} />
        <Route path="kitchen/kitchen3" element={<Kitchen3 />} />
        <Route path="bar" element={<BarPage />} />
        <Route path="bar/bar1" element={<Bar1 />} />
        <Route path="bar/bar2" element={<Bar2 />} />
        <Route path="bar/bar3" element={<Bar3 />} />
        <Route path="general" element={<GeneralPage />} />
        <Route path="general/general1" element={<General1 />} />
        <Route path="general/general2" element={<General2 />} />
        <Route path="general/general3" element={<General3 />} />
      </Route>
    </Routes>
    //</Suspense>
  );
};
