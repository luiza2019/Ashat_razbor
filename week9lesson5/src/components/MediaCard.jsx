import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { clientContext } from '../contexts/ClientContext';

export default function MediaCard(props) {
    const { addAndDeletePhoneInCart, checkPhoneInCart } = React.useContext(clientContext)

    return (
        <Card sx={{ maxWidth: 300, miWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                style={{ objectFit: "contain" }}
                image={props.phone.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.phone.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.phone.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={() => addAndDeletePhoneInCart(props.phone)}
                >
                    <ShoppingCartIcon color={checkPhoneInCart(props.phone.id) ? "error" : "primary"} />
                </Button>
                <Link to={`/phone/${props.phone.id}`}>
                    <Button size="small">Подробнее</Button>
                </Link>
            </CardActions>
        </Card>
    );
}
