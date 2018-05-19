/*
* This function toggles all necessary
* starter
* values for the animation
*/
import { Dimensions, Animated } from 'react-native';
import animSettings from './animSettings';

const animTime = animSettings.animTime;

function toggleStarter(expanded, initialValues, width) {

    let starterValues = {
        expandTabBar: expanded? 56 : 116,
        moveContent: expanded? 0 : -50,
    	scalePlus: expanded? 24 : 44,
        unfoldMenu: expanded? 0 : width,
        unfoldMenuMove: expanded? (width*(50/100)) : 0,
        unfoldOpacity: expanded? 0 : 1,

        delay: expanded ? 0 : (animTime*(65/100)),
        unfoldDelay: expanded? (animTime*(35/100)) : (animTime*(30/100)),
        opacityDelay: expanded? (animTime*(70/100)) : 0
    }

    //set Animated.Value
    initialValues.expandTabBar.setValue(starterValues.expandTabBar);
    initialValues.moveContent.setValue(starterValues.moveContent);
    initialValues.scalePlus.setValue(starterValues.scalePlus);
    initialValues.unfoldMenu.setValue(starterValues.unfoldMenu);
    initialValues.unfoldMenuMove.setValue(starterValues.unfoldMenuMove);
    initialValues.unfoldOpacity.setValue(starterValues.unfoldOpacity);

    //time values
    initialValues.delay = starterValues.delay;
    initialValues.unfoldDelay = starterValues.unfoldDelay;
    initialValues.opacityDelay = starterValues.opacityDelay;

    return initialValues;
}


export default toggleStarter;


