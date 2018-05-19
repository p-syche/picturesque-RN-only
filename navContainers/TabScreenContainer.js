/*
This Container makes sure all content pages moveUp
No need to add any specific code to content pages
*/


import React, { Component } from 'react';

import { 
	StyleSheet,
	ScrollView,
	View,
	Animated,
} from 'react-native';

import HomeTab from '../components/HomeTab';
import LocationsTab from '../components/LocationsTab';
import PlusTab from '../components/PlusTab';
import FavesTab from '../components/FavesTab';
import ProfileTab from '../components/ProfileTab';
import generalStyles from '../styles/generalStyles';


class TabScreenContainer extends Component {

	constructor() {
		super();
		this.startTouch = this.startTouch.bind(this);
	}

	startTouch() {
		if(this.props.screenProps.expanded === false) {
			this.props.screenProps.toggleMenu();
		} 
	}

    render() {
    	const components = {
	        HomeTab: HomeTab,
	        LocationsTab: LocationsTab,
	        PlusTab: PlusTab,
	        FavesTab: FavesTab,
	        ProfileTab: ProfileTab
	    };
		const TagName = components[this.props.tag || 'HomeTab'];
       
        return (
        	<ScrollView>
        		<Animated.View 
        			onResponderGrant = { () => this.startTouch() }
		            onStartShouldSetResponder = { (e) => {return true} }
					style={[
					styles.container,
						{ 
							transform: [{translateY: this.props.screenProps.animSettings.moveContent}],
							backgroundColor: generalStyles.color.background,
						}
					]}>
					<TagName />
				</Animated.View>
        	</ScrollView>
        )
    }
}



const styles = StyleSheet.create({
	container: {
		marginBottom: 56
	}
});

export default TabScreenContainer;


