import Header from "../common/Header";
import Footer from "../common/Footer";
import AdminBlock from "./AdminBlock";

function AdminPage (props){
    return (
       <div>
           <Header />
                <AdminBlock />
           <Footer />
       </div>
    )
}

export default AdminPage;