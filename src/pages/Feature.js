import React, { useEffect } from 'react';
import FeatureCTA from '../components/FeatureCTA/featureCTA';
import FeatureComponent from '../components/FeaturedSection/feature';


function Feature(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           
           <FeatureComponent/>
           <FeatureCTA/>
                </div>
    );
}

export default Feature;