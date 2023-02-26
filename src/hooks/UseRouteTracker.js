import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const UseRouteTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, location]);
};

export default UseRouteTracker;
