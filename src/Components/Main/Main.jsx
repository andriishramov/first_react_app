import "./Main.scss";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import {Route, Routes} from "react-router-dom";
const Main = (props) => {
    return (
        <main>
            {/*<Routes>
                <Route path='/allcars' element={<Section2 cards={props.section2ToProps.cards}/>}/>
            </Routes>*/}
            <Routes>
                <Route path='/aboutus' element={<Section1 description={props.section1ToProps} actions={props.section1ActionsToProps} strong_sides={props.section1StrongSidesToProps}/>}/>
                <Route path='/allcars' element={<Section2 cards={props.section2ToProps.cards}/>}/>
            </Routes>
            {/*<Section1 description={props.section1ToProps} actions={props.section1ActionsToProps} strong_sides={props.section1StrongSidesToProps} />*/}
{/*
            <Section2 cards={props.section2ToProps.cards}/>
*/}
        </main>
    )
}

export default Main;