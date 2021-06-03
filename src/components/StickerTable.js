import React from 'react';
import './Style.css'

const StickerTable = () => {
    return (
        <div className="container mt-5">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control search-input ms-auto"
                    id="exampleFormControlInput1"
                    placeholder="Search"
                />
            </div>
            <table className="table my-5">
                <thead>
                    <tr>
                        <th scope="col">
                            <div className="dropdown">
                                <button
                                    className="btn-text-color btn btn-outline-danger dropdown-toggle px-5"
                                    type="button" id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    STICKER
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="dropdown">
                                <button
                                    className="btn-text-color btn btn-outline-danger dropdown-toggle px-5"
                                    type="button" id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    COUNTRY GROUP
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="dropdown">
                                <button
                                    className="btn-text-color btn btn-outline-danger dropdown-toggle px-5"
                                    type="button" id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    COUNT
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </th>
                        <th scope="col">
                            <div className="dropdown">
                                <button
                                    className="btn-text-color btn btn-outline-danger dropdown-toggle px-5"
                                    type="button" id="dropdownMenuButton4"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    RARITY
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
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