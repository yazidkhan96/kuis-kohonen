import { Container } from "@material-ui/core";
import Navbar from '../../templates/Navbar/index'
const Layout = ({children}) => {
    return ( 
        <>
        <Navbar/>
        <Container>{children}</Container>
        </>
     );
}
 
export default Layout;