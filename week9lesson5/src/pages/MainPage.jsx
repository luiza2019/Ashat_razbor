import React, { useContext, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MediaCard from '../components/MediaCard';
import { clientContext } from '../contexts/ClientContext';
import { useNavigate } from 'react-router';
import Pagination from '../components/Pagination';


const MainPage = () => {
    const { getPhones, phones, currentPosts } = useContext(clientContext);

    const navigate = useNavigate()
    const [brandValue, setBrandValue] = useState("")

    let object = new URLSearchParams(window.location.search)
    function filterPhones(key, value) {
        object.set(key, value);
        let newUrl = `${window.location.pathname}?${object.toString()}`
        navigate(newUrl);
        getPhones();
        setBrandValue(value);
    }
    useEffect(() => {
        setBrandValue(object.get("brand"))

    }, [object])



    useEffect(() => {
        getPhones();
    }, []);
    return (
        <>
            <div className="main-page">
                <div className="sidebar">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            value={brandValue}
                            name="radio-buttons-group"
                            onChange={(e) => filterPhones("brand", e.target.value)}
                        >
                            <FormControlLabel value="Bedding Set" control={<Radio />} label="Bedding Set" />
                            <FormControlLabel value="Pillow" control={<Radio />} label="Pillow" />
                            <FormControlLabel value="Blanket" control={<Radio />} label="Blanket" />





                        </RadioGroup>
                    </FormControl>

                </div>
                {
                    phones ? (
                        <>
                            <div className="phones">
                                {
                                    currentPosts.map((phone) => (
                                        <MediaCard phone={phone} key={phone.id} />

                                    ))
                                }
                            </div>

                        </>
                    ) : (
                        <h2>Loading...</h2>
                    )

                }

            </div>
            <div>
                <Pagination />
            </div>

        </>
    );
};

export default MainPage;
