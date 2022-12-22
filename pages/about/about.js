import { getGlobalData  } from "../../utils/global-data";
import SEO from "../../components/SEO";
import Header from "../../components/Header";

export default function About({ globalData }) {
    return (<>
      <SEO title={globalData.name} description={globalData.blogTitle} /> 
      <Header name={globalData.name} /> 
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1> 
        <main className="w-full">
      <h1>About us</h1>
      <p>{globalData.aboutGutheria}</p>
      </main>
    </>);
  }

  export function getStaticProps() {
    
    const globalData = getGlobalData();
  
    return { props: { globalData } };
  }