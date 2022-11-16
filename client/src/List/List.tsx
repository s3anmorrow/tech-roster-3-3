import React from 'react';

const List = () => {

    // ---------------------------------- render to the DOM
    return(
        <div className="flex flex-wrap">
            <div className="flex flex-col flex-nowrap pr-5">
                <div className="py-4">Click the technology name below to find out what courses require it:</div>

                {/* <div> below to be rendered For each technology */}
                <div className="ml-8 pl-2.5 py-0.5 border-l-4 border-solid border-accent">
                    <a href="http://www.seanmorrow.ca" className="text-accent font-bold hover:underline">???</a>
                </div>
            </div>
        </div>
    );
}

export default List;