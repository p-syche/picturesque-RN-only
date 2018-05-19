/*
* This function toggles all necessary 
* final 
* values for the animation
*/

function toggleFinal(expanded, width) {

    let finalValues = {
    	expandTabBar: expanded ? 116 : 56,
    	moveContent: expanded ? -50 : 0,
    	scalePlus: expanded ? 44 : 24,
        unfoldMenu: expanded? width : 0,
        unfoldMenuMove: expanded? 0 : (width*(50/100)),
        unfoldOpacity: expanded? 1 : 0
    }

    return finalValues;
}


export default toggleFinal;


