import ErpApp from "./ERPApp"

import { AppContextProvider } from '../context/appContext';
import { Suspense } from "react";
import PageLoader from '../components/PageLoader';



export default function AccuFirm() {
  return (
    <>
      <AppContextProvider>
        <Suspense fallback={<PageLoader />}>
          <ErpApp />
        </Suspense>
      </AppContextProvider>
    </>
  )
}
