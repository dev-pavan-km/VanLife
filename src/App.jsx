import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans, { vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetail, { vanDetailLoader } from "./pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Host from "./pages/Host/Host.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans, { hostVanLoader } from "./pages/Host/HostVans.jsx";
import HostVansDetail, { hostVanDetailLoader } from "./pages/Host/HostVansDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";
import Login from "./pages/Login.jsx";
import { requireAuth } from "./utils.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/about"
        element={<About />}
        loader={async () => {
          const isLoggedIn = false;
          if (!isLoggedIn) {
            return redirect("/");
          }
          return null;
        }}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path="/vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="/host" element={<HostLayout />}>
        <Route index element={<Host />} loader={async () => await requireAuth()} />
        <Route path="income" element={<Income />} loader={async () => await requireAuth()} />
        <Route path="vans" element={<HostVans />} loader={hostVanLoader} />
        <Route path="vans/:id" element={<HostVansDetail />} loader={hostVanDetailLoader}>
          <Route index element={<HostVanInfo />} loader={async () => await requireAuth()} />
          <Route path="pricing" element={<HostVanPricing />} loader={async () => await requireAuth()} />
          <Route path="photos" element={<HostVanPhotos />} loader={async () => await requireAuth()} />
        </Route>
        <Route path="reviews" element={<Reviews />} loader={async () => await requireAuth()} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
