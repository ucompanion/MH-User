import { HashRouter, Routes, Route } from 'react-router-dom';

// Layout
import PageLayout from './components/layouts/PageLayout';

// Guide
import SectionPage from './guide/components/SectionPage';
import ElementPage from './guide/components/ElementPage';
import FormPage from './guide/components/FormPage';
import DataPage from './guide/components/DataPage';
import PostPage from './guide/components/PostPage';
import ModulePage from './guide/components/ModulePage';
import ModalPage from './guide/components/ModalPage';

// Templates
import PrototypeA from './pages/template/PrototypeA';
import PrototypeB from './pages/template/PrototypeB';

// Main
import Home from "./pages/main/Home";
import Search from './pages/main/Search/index';
import SearchResult from './pages/main/Search/SearchResult';
import SearchNodata from './pages/main/Search/SearchNodata';

// Onboarding
import OnboardingStep1 from "./pages/onboarding/Step1/Step";
import OnboardingStep2A from "./pages/onboarding/Step2/StepA";
import OnboardingStep2B from "./pages/onboarding/Step2/StepB";
import OnboardingStep3A from "./pages/onboarding/Step3/StepA";
import OnboardingStep3B from "./pages/onboarding/Step3/StepB";
import OnboardingStep4A from "./pages/onboarding/Step4/StepA";
import OnboardingStep4B from "./pages/onboarding/Step4/StepB";

// System
import NotFound from "./NotFound";

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				{/* Guide */}
				<Route path='guide/' element={<PageLayout />}>
					<Route path='components/sections' element={<SectionPage />} />
					<Route path='components/elements' element={<ElementPage />} />
					<Route path='components/forms' element={<FormPage />} />
					<Route path='components/data' element={<DataPage />} />
					<Route path='components/posts' element={<PostPage />} />
					<Route path='components/modules' element={<ModulePage />} />
					<Route path='components/modals' element={<ModalPage />} />
				</Route>

				{/* Pages */}
				<Route path='pages/' element={<PageLayout />}>
					{/* Templates */}
					<Route path='templates/prototypeA' element={<PrototypeA />} />
					<Route path='templates/prototypeB' element={<PrototypeB />} />

					{/* Main */}
					<Route path='main/home' index element={<Home menu='home' />} />
					<Route path='main/search/index' index element={<Search />} />
					<Route path='main/search/result' index element={<SearchResult />} />
					<Route path='main/search/nodata' index element={<SearchNodata />} />

					{/* Onboarding */}
					<Route path='onboarding/step1' index element={<OnboardingStep1 />} />
					<Route path='onboarding/step2A' index element={<OnboardingStep2A />} />
					<Route path='onboarding/step2B' index element={<OnboardingStep2B />} />
					<Route path='onboarding/step3A' index element={<OnboardingStep3A />} />
					<Route path='onboarding/step3B' index element={<OnboardingStep3B />} />
					<Route path='onboarding/step4A' index element={<OnboardingStep4A />} />
					<Route path='onboarding/step4B' index element={<OnboardingStep4B />} />

					{/* Category */}
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
};
export default Router;