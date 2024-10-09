import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "@/src/layouts/PreLoader";
import "@/styles/globals.css";
import '../src/components/BulkOrder/BulkOrder.css'; 
import '../src/components/VegMenu/VegMenu.css'; 
import '../src/components/Nonveg/Nonveg.css'; 
import '../src/components/Deseart/Deseart.css'; 
import '../src/components/Catering/Catering.css'; 


export default function App({ Component, pageProps }) {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* seo begin */}
        <title>QuickEat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}        
      </Head>
      {preLoader && <PreLoader />}
      {preLoader && <Component {...pageProps} />}
    </Fragment>
  );
}
