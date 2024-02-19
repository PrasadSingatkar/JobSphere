import React from 'react';
import { useSpring, animated } from 'react-spring';
import image from "../image/6.png";
import './StartupImage.css';

const StartupImage = (props) => {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 },
    });

    const textFadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000,
        config: { duration: 1000 },
    });

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
        }}>
            <animated.img onClick={props.onClick} style={fadeIn} src={image} alt="Startup image" />
            <animated.div style={textFadeIn} className="startup-text">
                <h1>Your future starts here</h1>
            </animated.div>
        </div>
    );
};

export default StartupImage;