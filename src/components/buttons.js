import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {deepOrange500, red700} from "material-ui/styles/colors";


const style = {
    marginRight: 30,
    marginLeft: 20
}

export const AppButtons = (props) => {
    return (
        <div style={{marginBottom: 40}}>

            <FloatingActionButton style={{
                position: 'fixed',
                right: 50,
                bottom: 50
            }}
                                  backgroundColor={deepOrange500}
                                  onClick={() => props.openModal()}
            >
                <ContentAdd/>
            </FloatingActionButton>

        </div>
    )
}