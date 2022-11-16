import React from 'react';

const Tech = () => {

    // ---------------------------------- render to the DOM
    return(
        <div className="pt-2">
            <div className="font-bold"><i className="fas fa-arrow-left content__button pr-2 text-xl hover:text-accent"></i>Details for ???</div>
            <div className="max-w-3xl pb-4">???</div>
        
            <div className="pb-1">Difficulty:</div>
            <div className="pb-2">
                <i className="fas fa-square text-greyed-out pr-0.5"></i>
                <i className="fas fa-square text-greyed-out pr-0.5"></i>
                <i className="fas fa-square text-greyed-out pr-0.5"></i>
                <i className="fas fa-square text-greyed-out pr-0.5"></i>
                <i className="fas fa-square text-greyed-out pr-0.5"></i>
            </div>
        
            <div className="py-2">Required in courses:</div>
            
            {/* <div> below to be rendered For each course */}
            <div className="ml-8 pl-2.5 py-2 border-l-4 border-solid border-accent">
                <div className="font-bold">???</div>
            </div>
        </div>
    );
}

export default Tech;