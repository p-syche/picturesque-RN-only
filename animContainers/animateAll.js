/* This function animates all elements
* values are passed to correct components
* through props
*/


import {
	Animated,
	Easing
} from 'react-native';

function animateAll(initialValue, finalValue) {

	Animated.parallel([
		Animated.timing(   
	        initialValue.moveContent,
	        {
	            toValue: finalValue.moveContent,
	            duration: initialValue.duration,
	            delay: initialValue.delay
	        }),
		Animated.timing(   
	        initialValue.expandTabBar,
	        {
	            toValue: finalValue.expandTabBar,
	            duration: initialValue.duration,
	            delay: initialValue.delay
	        }),
		Animated.timing(   
	        initialValue.scalePlus,
	        {
	            toValue: finalValue.scalePlus,
	            duration: initialValue.duration,
	            delay: initialValue.delay
	        }),
		Animated.timing(   
	        initialValue.unfoldMenu,
	        {
	            toValue: finalValue.unfoldMenu,
	            duration: initialValue.duration,
	            delay: initialValue.unfoldDelay
	        }),
		Animated.timing(   
	        initialValue.unfoldMenuMove,
	        {
	            toValue: finalValue.unfoldMenuMove,
	            duration: initialValue.duration,
	            delay: initialValue.unfoldDelay
	        }),
		Animated.timing(   
	        initialValue.unfoldOpacity,
	        {
	            toValue: finalValue.unfoldOpacity,
	            duration: initialValue.durationOpacity,
	            delay: initialValue.opacityDelay
	        }),
	]).start();

}

export default animateAll;


