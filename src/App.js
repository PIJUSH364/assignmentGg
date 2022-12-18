import { AnalyticsPage } from './components/AnalyticsPage';
import { useResource } from './components/customHooks/useResource';

function App() {
  const resourceData = useResource(
    'http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03'
  );
  console.log(resourceData);
  return (
    <div className="App">
      {resourceData ? (
        <AnalyticsPage resourceData={resourceData} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default App;
