import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://onfise.com/procom/v1/api/procomAPI.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.category}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
