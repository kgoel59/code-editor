import MainScreen from 'components/MainScreen';

import React from 'react';

function Main(props) {
    return (
        <div>
            <MainScreen 
            getFileData={props.getFileData}
            saveFileData={props.saveFileData}/>
        </div>
    );
}

export default Main;
