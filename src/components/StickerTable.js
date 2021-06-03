import React, { useState } from 'react';
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const StickerTable = () => {

    const [clickedSticker, setClickedStiker] = useState(true);
    const [clickedCountry, setClickedCountry] = useState(true);
    const [clickedCount, setClickedCount] = useState(true);
    const [clickedRarity, setClickedRarity] = useState(true);


    return (
        <div className="sticker-table container mt-5">
            <div className="mb-3 d-flex justify-content-end">
                <input
                    type="text"
                    className="form-control search-input"
                    id="exampleFormControlInput1"
                    placeholder="Search"
                />
            </div>
            <table className="table my-5">
                <thead>
                    <tr>
                        <th scope="col">
                            <button
                                className="btn-text-color btn btn-outline-danger px-5"
                                type="button" onClick={() => setClickedStiker(!clickedSticker)}
                            >
                                STICKER
                                 {
                                    <FontAwesomeIcon className="ms-3" icon={clickedSticker ? faChevronDown : faChevronUp} />
                                }
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn-text-color btn btn-outline-danger px-5"
                                type="button" onClick={() =>setClickedCountry(!clickedCountry)}
                            >
                                COUNTRY GROUP
                                {
                                     <FontAwesomeIcon className="ms-3" icon={clickedCountry ? faChevronDown : faChevronUp} />
                                }

                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn-text-color btn btn-outline-danger px-5"
                                type="button" onClick={() => setClickedCount(!clickedCount)}
                            >
                                COUNT
                                {
                                    <FontAwesomeIcon className="ms-3" icon={clickedCount ? faChevronDown : faChevronUp} />
                                }
                            </button>
                        </th>
                        <th scope="col">
                            <button
                                className="btn-text-color btn btn-outline-danger px-5"
                                type="button" onClick={() => setClickedRarity(!clickedRarity)}
                            >
                                RARITY
                                {
                                    <FontAwesomeIcon className="ms-3" icon={clickedRarity ? faChevronDown : faChevronUp} />
                                }
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-color">Felainia</th>
                        <td className="text-color">Belgium</td>
                        <td className="text-color">Count</td>
                        <td className="text-color">Rarity</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-color">Felainia</th>
                        <td className="text-color">Belgium</td>
                        <td className="text-color">Count</td>
                        <td className="text-color">Rarity</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-color">Felainia</th>
                        <td className="text-color">Belgium</td>
                        <td className="text-color">Count</td>
                        <td className="text-color">Rarity</td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-color">Felainia</th>
                        <td className="text-color">Belgium</td>
                        <td className="text-color">Count</td>
                        <td className="text-color">Rarity</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <button className="btn-text-color btn btn-outline-danger text-color px-5">LOAD MORE</button>
            </div>
        </div>
    );
};



export default StickerTable;