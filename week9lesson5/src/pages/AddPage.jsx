import { Button, TextField } from '@mui/material';
import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { adminContext } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
    const schema = yup.object({
        name: yup
            .string()
            .min(3, "Минимальное количество символов 3")
            .max(30, "Максимальное количество символов 30")
            .required("Поле обязательно для заполнения"),
        description: yup
            .string()
            .min(10, "Минимальное количество символов 10")
            .max(255, "Максимальное количество символов 255")
            .required("Поле обязательно для заполнения"),
        image: yup
            .string()
            // .min(3, "Минимальное количество символов 3")
            // .max(30, "Максимальное количество символов 30")
            .required("Поле обязательно для заполнения"),
        price: yup
            .number()
            .min(3, "Минимальное количество символов 3")
            // .max(30, "Максимальное количество символов 30")
            .required("Поле обязательно для заполнения"),
        color: yup
            .string()
            // .min(3, "Минимальное количество символов 3")
            // .max(30, "Максимальное количество символов 30")
            .required("Поле обязательно для заполнения"),
        brand: yup
            .string()
            // .min(3, "Минимальное количество символов 3")
            // .max(30, "Максимальное количество символов 30")
            .required("Поле обязательно для заполнения"),
        // model: yup
        //     .string()
        //     .min(1, "Минимальное количество символов 1")
        //     .max(30, "Максимальное количество символов 30")
        //     .required("Поле обязательно для заполнения"),

    });
    const { addPhone } = React.useContext(adminContext)
    const navigate = useNavigate()
    const handleSubmit = (phone) => {
        addPhone(phone)
        navigate("/admin")
    }
    return (
        <div className="add-page">
            <h2>Добавить товар</h2>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                    name: "",
                    description: "",
                    image: "",
                    price: "",
                    color: "",
                    brand: ""
                    // model: ""
                }}

            >

                {({ handleSubmit, handleChange, values, touched, errors }) => (

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Название товара"
                            type="text"
                            variant="standard"
                            name="name"
                            value={values.name}
                            error={!!errors.name && touched.name}
                            helperText={touched.name ? errors.name : ""}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Описание товара"
                            type="text"
                            variant="standard"
                            name="description"
                            value={values.description}
                            error={!!errors.description && touched.description}
                            helperText={touched.description ? errors.description : ""}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Фото товара"
                            type="text"
                            variant="standard"
                            name="image"
                            value={values.image}
                            error={!!errors.image && touched.image}
                            helperText={touched.image ? errors.image : ""}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Цена товара"
                            type="number"
                            variant="standard"
                            name="price"
                            value={values.price}
                            error={!!errors.price && touched.price}
                            helperText={touched.price ? errors.price : ""}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Цвет товара"
                            type="text"
                            variant="standard"
                            name="color"
                            value={values.color}
                            error={!!errors.color && touched.color}
                            helperText={touched.color ? errors.color : ""}
                            onChange={handleChange}

                        />
                        <TextField
                            label="Бренд товара"
                            type="text"
                            variant="standard"
                            name="brand"
                            value={values.brand}
                            error={!!errors.brand && touched.brand}
                            helperText={touched.brand ? errors.brand : ""}
                            onChange={handleChange}

                        />
                        {/* <TextField
                            label="Модель товара"
                            type="text"
                            variant="standard"
                            name="model"
                            value={values.model}
                            error={!!errors.model && touched.model}
                            helperText={touched.model ? errors.model : ""}
                            onChange={handleChange}

                        /> */}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">Добавить товар</Button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default AddPage;