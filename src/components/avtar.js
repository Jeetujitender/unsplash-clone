import React from 'react';

const Avtar = (props) => {
    return <div style={{margin:'0px 80px 0px 0px'}}>
        
            <img style={{ borderRadius: "50%", width: props.width, height: props.height,marginRight:'20px' }}
                src={props.url}
                alt="prfile-avtar" />
        
    </div>
}

export default Avtar;