import React, { useContext, useEffect } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';


const EditPage = () => {

    const schema = yup.object({
        name: yup
            .string()
            .min(3)
            .max(30)
            .required("Данное поле обязательно для заполнения"),
        description: yup
            .string()
            .min(10)
            .max(255)
            .required("Данное поле обязательно для заполнения"),
        image: yup
            .string()
            .required("Данное поле обязательно для заполнения"),
        price: yup
            .number()
            .min(3)
            .required("Данное поле обязательно для заполнения"),
        color: yup
            .string()
            .required("Данное поле обязательно для заполнения"),
        brand: yup
            .string()
            .required("Данное поле обязательно для заполнения"),

    })
    const params = useParams()
    const { getPhoneToEdit, phoneToEdit, saveEditedPhone } = useContext(adminContext)
    useEffect(() => {
        getPhoneToEdit(params.id)
    }, [])

    const navigate = useNavigate()

    return (
        <div className="edit-page">
            <h2>Редактирование товара</h2>
            {
                phoneToEdit ? (
                    <Formik
                        validationSchema={schema}
                        onSubmit={(editedPhone) => {
                            saveEditedPhone(editedPhone)
                            navigate("/admin")
                        }}
                        initialValues={phoneToEdit}
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
                                    type="text"
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

                                <Button variant="contained" color="primary" type="submit">Сохранить изменения</Button>
                            </form>
                        )}
                    </Formik>
                ) : (
                    <h2>Loading...</h2>
                )
            }


        </div >
    );
};

export default EditPage;