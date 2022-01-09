import {Typography, AppBar,Card, CardActions, CardContent, CssBaseline, Grid,Toolbar, Container} from '@material-ui/core'

import {PhotoCamera} from "@material-ui/icons"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function SurveyWidget({domElement}){


  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  
  return(
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h2'>
            Nigeria
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h3' align='center' color ='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            
            <Typography variant='h6' align='center' color='textSecondary' paragraph>
              Just trying out stuffs that I'd likek to do when I g reow up and not taking responsibilities for them.
              Easy life I must say. It all comes at great cost because life is about choices and repercautions
              Leets forget that we are alive and live as if we will die tomorrow or next day if we don't enjoy the hell
              out of this life right now and not wait tomorrow.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  )
}

export default SurveyWidget