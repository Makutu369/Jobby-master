
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import AboutPage from './AboutPage';
import CompanyReviewPage from './CompanyReviewPage';
import SalaryEstimationPage from './SalaryEstimationPage';
import PostJobPage from './PostJobPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/company-review" containers={CompanyReviewPage} />
        <Route path="/contact" containers={SalaryEstimationPage} />
        <Route path="/contact" containers={PostJobPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;