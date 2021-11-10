import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardActions, CardMedia, Button, Grid, CardContent, Box, Card, Badge } from '@material-ui/core/';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';



const EventItem = ({ posts, loading }) => {






    return (
        //

        <div>
            <center>

                <h4 class="text-uppercase" style={{ color: "black", fontFamily: "cursive" }}>Explore Rooms</h4>
            </center>
            <Grid container spacing={2} style={{ padding: 24 }}>

                {posts.map(post => (

                    <Grid item xs={12} sm={6} lg={4} xl={3} minHeight="60px">
                        <Link onClick={post.clicked} to={`/landing/${post.id}`} style={{ textDecoration: 'none', color: "black" }}>

                            <Box borderRadius="30px" >
                                <  div className="card" style={{ border: '3px solid black', borderRadius: '5px!important', height: "450px" }}>
                                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}

                                        image={post.imageUrl}

                                    />
                                    <CardContent style={{ height: "60hv" }}>
                                        <Typography gutterBottom variant="headline" component="h4" style={{ fontFamily: "cursive" }}>

                                            {post.name}
                                        </Typography>
                                        <Typography component="p" style={{ fontFamily: "cursive" }}>
                                            {post.description}

                                            <div>

                                                <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                                    <button className="btn btn-warning">
                                                        Rs {post.price} Per Day
                                                    </button>
                                                </div>

                                            </div>




                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <button className="btn btn-success" style={{ fontFamily: "cursive" }}  >
                                                View Room
                                            </button>
                                        </div>
                                    </CardContent>







                                </div>
                            </Box>
                        </Link>
                    </Grid>


                ))}
            </Grid>

        </div>

    );
}

export default EventItem;