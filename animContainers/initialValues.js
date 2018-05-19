import animSettings from './animSettings';
import { Animated } from 'react-native';

const animTime = animSettings.animTime;

export default initialValues = {
	moveContent: new Animated.Value(0),
	expandTabBar: new Animated.Value(56),
	scalePlus: new Animated.Value(24),
	unfoldMenu: new Animated.Value(0),
	unfoldMenuMove: new Animated.Value(0),
	unfoldOpacity: new Animated.Value(0),

	delay: 0,
	unfoldDelay: (animTime*(35/100)),
	opacityDelay: (animTime*(70/100)),

	duration: (animTime*(35/100)),
	durationOpacity: (animTime*(30/100))
}
