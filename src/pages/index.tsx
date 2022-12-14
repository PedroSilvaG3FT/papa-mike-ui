import React from 'react'
import AppHead from '@/components/common/app-head'
import OurStory from '@/components/about/our-story'
import AboutBanner from '@/components/about/about-banner'
import SocialNetwork from '@/components/about/social-network'
import AboutShortcuts from '@/components/about/about-shortcuts'
import EducationSystem from '@/components/about/education-system'
import MissionVisionValue from '@/components/about/mission-vision-value'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <AboutBanner />
            <AboutShortcuts />
            <OurStory />
            <MissionVisionValue />
            <EducationSystem />
            <SocialNetwork />
        </>
    )
}

export default Home
