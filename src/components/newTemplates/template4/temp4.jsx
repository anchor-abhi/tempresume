import MainColorComp from './components/Colors/MainColorComp'
import Resume from './components/Resume'
import SideDrawer from './components/SideDrawer';
import {ColorProvider} from "../../context/ColorContext";
import {DivsProvider} from '../../context/DivsContext';
import {SliderProvider} from '../../context/SliderContext';

function Temp4() {
   return (
      <ColorProvider>
         <DivsProvider>
            <SliderProvider>
               <div className="App">
                  <SideDrawer anchor="left">
                     <MainColorComp />
                  </SideDrawer>
                  <Resume />
               </div>
            </SliderProvider>
         </DivsProvider>
      </ColorProvider>
   )
}

export default Temp4;
