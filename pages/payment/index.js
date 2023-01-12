import { getGlobalData  } from "../../utils/global-data";
import SEO from "../../components/SEO";
import Header from "../../components/Header";

export default function Payment({ globalData }) {
    return (<>
    <main className="w-full text-center">
      <h1>Payment method</h1>
      <h1>use paybill No:   <span className="text-3xl font-bold">11223456</span></h1>
      <br></br>
      <p>You can also use cash when our agents arrive on site</p>
      </main>
    </>);
  }

 