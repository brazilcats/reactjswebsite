import React from 'react';
import Avatar from 'avataaars';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Copyright from './Copyright';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div id="Avatar">
                <Avatar 
                    avatarStyle='Circle'
                    topType='LongHairStraightStrand'
                    accessoriesType='Sunglasses'
                    hairColor='SilverGray'
                    facialHairType='BeardMajestic'
                    facialHairColor='BlondeGolden'
                    clotheType='ShirtVNeck'
                    clotheColor='White'
                    eyeType='Dizzy'
                    eyebrowType='Angry'
                    mouthType='Serious'
                    skinColor='Black'
                    />
                </div>
                <Main/>
                <Footer/>
                <Copyright/>
            </div>
        );
    }
}