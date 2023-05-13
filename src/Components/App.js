import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Section1 from "./Main/Section1/Section1";
import {Route, Routes} from "react-router-dom";
import Section2 from "./Main/Section2/Section2";


const App = (props) => {
    return (
        <div className="App">
            <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} actionsToProps={props.data.header.actions}/>
            <Main section1ToProps={props.data.section1} section1ActionsToProps={props.data.section1.actions} section1StrongSidesToProps={props.data.section1.strong_sides} section2ToProps={props.data.section2}/>
            <Footer />
        </div>
    );
}

export default App;
