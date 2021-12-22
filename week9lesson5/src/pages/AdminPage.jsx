import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BasicTable from '../components/BasicTable';
import { adminContext } from '../contexts/AdminContext';

const AdminPage = () => {
    const { clearState } = useContext(adminContext);
    useEffect(() => {
        clearState();
    }, [])
    return (
        <div>
            <h2>Admin page</h2>
            <div>
                <Link to="/admin/add">
                    <Button variant="outlined" color="info">Add product</Button>
                </Link>
                <div>
                    <BasicTable />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;