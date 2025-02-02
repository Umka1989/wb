import './Main.css';
import Footer from './common/Footer';
import Header from './common/Header';
import SalesWidget from "./widgets/SalesWidget";
import AssetsWidget from "./widgets/AssetsWidget";

function Main() {
  return (
    <div>
        <Header />
        <div>
            <SalesWidget />
            <AssetsWidget />
            <div className={'clearFix'}></div>
        </div>
        <Footer />
    </div>
  );
}

export default Main;
