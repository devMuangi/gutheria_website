import { getGlobalData  } from "../../utils/global-data";
import SEO from "../../components/SEO";

export default function About({ globalData }) {
    return (<>
      <SEO title={globalData.name} description={globalData.blogTitle} /> 
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1> 
        <main className="w-full">
      <h1>About us</h1>
      <p>{globalData.aboutGutheria}</p>
      <h1>Mission Statement</h1>
      <p>{globalData.missionGutheria}</p>
      </main>
    </>);
  }

  export function getStaticProps() {
    
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }