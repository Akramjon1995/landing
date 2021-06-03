import React from 'react';
import players from '../assets/players.jpg'
import './Style.css'


const HardestToComplete = () => {
    return (
        <div className="hardes-to-complete d-flex justify-content-center align-items-center flex-column p-4 my-5">
            <div>
                <h1 className= "text-center text-white">Hardest to complete</h1>
                <div className="align-items-center d-flex flex-column my-5 paragraph text-center text-white">
                    <p className="text-start">
                        As one of the biggest song competitions in the world,
                        Eurovision has been produced iconic songs and artists that we still
                        listen to this days.
                    </p>
                    <p className="text-start">
                        But have you ever wonder which songs and artists are the most
                        popular in the history of Eurovision?
                    </p>
                </div>

            </div>
            <div>
                <img src={players} alt="football players" />
            </div>
        </div>
    );
};


export default HardestToComplete;