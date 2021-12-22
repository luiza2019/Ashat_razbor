import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { clientContext } from '../contexts/ClientContext';

const DetailPage = () => {
    const { getDetails, phoneDetails } = useContext(clientContext)
    const params = useParams()
    useEffect(() => {
        getDetails(params.id)
    }, [])
    console.log(phoneDetails)
    return (
        <div>
            {
                phoneDetails ? (
                    <div className="detail-page">
                        <div className="detail-image">
                            <img src={phoneDetails.image} alt="" />
                        </div>
                        <div>
                            <h2>{phoneDetails.name}</h2>
                            <div>
                                <h4>Харктеристики:</h4>
                                <p>{phoneDetails.description}</p>
                                <ul className="character">
                                    <li>
                                        <strong>Цена:</strong>
                                        <span>{phoneDetails.price}</span>
                                    </li>
                                    <li>
                                        <strong>Цвет:</strong>
                                        <span>{phoneDetails.color}</span>
                                    </li>


                                </ul>
                                <Button variant="contained">
                                    Добавить в корзину
                                </Button>
                            </div>
                            <Button sx={{ mt: 2 }} variant="contained">
                                Купить сейчас
                            </Button>
                        </div>


                    </div>

                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default DetailPage;