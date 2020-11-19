import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 0
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel 
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
      }
      label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <div className="App">
          <header className="App-header">
          <AppBar color='secondary'>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant='h2' component='div'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle'>
            Learn how to use Material UI
          </Typography>
          <ButtonStyled />
          
          <Grid container spacing={4} justify='center'>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height:75, width:'100%', }} />
            </Grid>
          </Grid>
          
          <TextField 
            variant='outlined'
            color='secondary'
            type='email'
            label='Email'
            placeholder='test@test.com'
            // value='test@test.com'
          />
          <CheckboxExample />
            <ButtonGroup variant='contained' color='primary'>
              <Button
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;



// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, orange } from '@material-ui/core/colors';
// import 'fontsource-roboto';

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     borderRadius: 15,
//     marginBottom: 15,
//     color: 'white',
//     padding: '10px 30px'
//   }
// })

// const theme = createMuiTheme({
//   typography: {
//     h2: {
//       fontSize: 36,
//       marginBottom: 0
//     }
//   },
//   palette: {
//     primary: {
//       main: green[400],
//     },
//     secondary: {
//       main: orange[400],
//     }
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth='xs'>
//       {/* <Container maxWidth='xl'> */}
//       {/* <Container maxWidth='lg'> */}
//       {/* <Container maxWidth='md'> */}
//       {/* <Container maxWidth='sm'> */}
//         <div className="App">
//           <header className="App-header">
//           <AppBar color='secondary'>
//             <Toolbar>
//               <IconButton>
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant='h6'>
//                 MUI Themeing
//               </Typography>
//               <Button>
//                 Login
//               </Button>
//             </Toolbar>
//           </AppBar>
//           <Typography variant='h2' component='div'>
//             Welcome to MUI
//           </Typography>
//           <Typography variant='subtitle'>
//             Learn how to use Material UI
//           </Typography>
//           <ButtonStyled />
          
//           <Grid container spacing={4} justify='center'>
//             <Grid item xs={3} sm={6}>
//               <Paper style={{ height:75, width:'100%', }} />
//             </Grid>
//             <Grid item xs={3} sm={6}>
//               <Paper style={{ height:75, width:'100%', }} />
//             </Grid>
//             <Grid item xs={3} sm={6}>
//               <Paper style={{ height:75, width:'100%', }} />
//             </Grid>
//           </Grid>
          
//           <TextField 
//             variant='outlined'
//             color='secondary'
//             type='email'
//             label='Email'
//             placeholder='test@test.com'
//             // value='test@test.com'
//           />
//           <CheckboxExample />
//             <ButtonGroup variant='contained' color='primary'>
//               <Button
//                 startIcon={<SaveIcon />}
//               >
//                 Save
//               </Button>
//               <Button
//                 startIcon={<DeleteIcon />}
//               >
//                 Discard
//               </Button>
//             </ButtonGroup>
//             <img src={logo} className="App-logo" alt="logo" />
//           </header>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, orange } from '@material-ui/core/colors';
// import 'fontsource-roboto';

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     borderRadius: 15,
//     marginBottom: 15,
//     color: 'white',
//     padding: '10px 30px'
//   }
// })

// const theme = createMuiTheme({
//   typography: {
//     h2: {
//       fontSize: 36,
//       marginBottom: 0
//     }
//   },
//   palette: {
//     primary: {
//       main: green[400],
//     },
//     secondary: {
//       main: orange[400],
//     }
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth='xs'>
//       {/* <Container maxWidth='xl'> */}
//       {/* <Container maxWidth='lg'> */}
//       {/* <Container maxWidth='md'> */}
//       {/* <Container maxWidth='sm'> */}
//         <div className="App">
//           <header className="App-header">
//           <Typography variant='h2' component='div'>
//             Welcome to MUI
//           </Typography>
//           <Typography variant='subtitle'>
//             Learn how to use Material UI
//           </Typography>
//           <ButtonStyled />
          
//           <Grid>
//             <Paper style={{ height:75, width:50, }} />
//           </Grid>
          
//           <TextField 
//             variant='outlined'
//             color='secondary'
//             type='email'
//             label='Email'
//             placeholder='test@test.com'
//             // value='test@test.com'
//           />
//           <CheckboxExample />
//             <ButtonGroup variant='contained' color='primary'>
//               <Button
//                 startIcon={<SaveIcon />}
//               >
//                 Save
//               </Button>
//               <Button
//                 startIcon={<DeleteIcon />}
//               >
//                 Discard
//               </Button>
//             </ButtonGroup>
//             <img src={logo} className="App-logo" alt="logo" />
//           </header>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, orange } from '@material-ui/core/colors';
// import 'fontsource-roboto';

// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     borderRadius: 15,
//     marginBottom: 15,
//     color: 'white',
//     padding: '10px 30px'
//   }
// })

// const theme = createMuiTheme({
//   typography: {
//     h2: {
//       fontSize: 36,
//       marginBottom: 0
//     }
//   },
//   palette: {
//     primary: {
//       main: green[400],
//     },
//     secondary: {
//       main: orange[400],
//     }
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth='xs'>
//       {/* <Container maxWidth='xl'> */}
//       {/* <Container maxWidth='lg'> */}
//       {/* <Container maxWidth='md'> */}
//       {/* <Container maxWidth='sm'> */}
//         <div className="App">
//           <header className="App-header">
//           <Typography variant='h2' component='div'>
//             Welcome to MUI
//           </Typography>
//           <Typography variant='subtitle'>
//             Learn how to use Material UI
//           </Typography>
//           <ButtonStyled />
//           <TextField 
//             variant='outlined'
//             color='secondary'
//             type='email'
//             label='Email'
//             placeholder='test@test.com'
//             // value='test@test.com'
//           />
//           <CheckboxExample />
//             <ButtonGroup variant='contained' color='primary'>
//               <Button
//                 startIcon={<SaveIcon />}
//               >
//                 Save
//               </Button>
//               <Button
//                 startIcon={<DeleteIcon />}
//               >
//                 Discard
//               </Button>
//             </ButtonGroup>
//             <img src={logo} className="App-logo" alt="logo" />
//           </header>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, orange } from '@material-ui/core/colors';
// import 'fontsource-roboto';

// import Typography from '@material-ui/core/Typography'

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     borderRadius: 15,
//     marginBottom: 15,
//     color: 'white',
//     padding: '10px 30px'
//   }
// })

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: green[400],
//     },
//     secondary: {
//       main: orange[400],
//     }
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App">
//         <header className="App-header">
//         <Typography variant='h2'>
//           Welcome to MUI
//         </Typography>
//         <Typography variant='h3'>
//           Learn how to use Material UI
//         </Typography>
//         <ButtonStyled />
//         <TextField 
//           variant='outlined'
//           color='secondary'
//           type='email'
//           label='Email'
//           placeholder='test@test.com'
//           // value='test@test.com'
//         />
//         <CheckboxExample />
//           <ButtonGroup variant='contained' color='primary'>
//             <Button
//               startIcon={<SaveIcon />}
//             >
//               Save
//             </Button>
//             <Button
//               startIcon={<DeleteIcon />}
//             >
//               Discard
//             </Button>
//           </ButtonGroup>
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     // background: 'linear-gradient(45deg, #333, #000)',
//     // background: 'linear-gradient(45deg, #333, #999)',
//     border: 0,
//     borderRadius: 15,
//     marginBottom: 15,
//     color: 'white',
//     padding: '10px 30px'
//   }
// })

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <ButtonStyled />
//       <TextField 
//         variant='outlined'
//         color='secondary'
//         type='email'
//         label='Email'
//         placeholder='test@test.com'
//         // value='test@test.com'
//       />
//       <CheckboxExample />
//         <ButtonGroup variant='contained' color='primary'>
//           <Button
//             startIcon={<SaveIcon />}
//           >
//             Save
//           </Button>
//           <Button
//             startIcon={<DeleteIcon />}
//           >
//             Discard
//           </Button>
//         </ButtonGroup>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<DeleteIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//       label='Testing Checkbox'
//     />
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <TextField 
//         variant='outlined'
//         color='secondary'
//         // type='date'
//         type='time'
//         label='The time'
//       />
//       <CheckboxExample />
//         <ButtonGroup variant='contained' color='primary'>
//           <Button
//             startIcon={<SaveIcon />}
//           >
//             Save
//           </Button>
//           <Button
//             startIcon={<DeleteIcon />}
//           >
//             Discard
//           </Button>
//         </ButtonGroup>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Checkbox from '@material-ui/core/Checkbox';
// import { FormControlLabel } from '@material-ui/core';

// function CheckboxExample() {
//   const [checked, setChecked] = useState(true)
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />
//       }
//     />
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <CheckboxExample />
//         <ButtonGroup variant='contained' color='primary'>
//           <Button
//             startIcon={<SaveIcon />}
//           >
//             Save
//           </Button>
//           <Button
//             startIcon={<DeleteIcon />}
//           >
//             Discard
//           </Button>
//         </ButtonGroup>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ButtonGroup>
//           <Button
//             startIcon={<SaveIcon />}
//             variant='contained'
//             color='primary'
//           >
//             Save
//           </Button>
//           <Button
//             startIcon={<DeleteIcon />}
//             variant='contained'
//             color='secondary'
//           >
//             Discard
//           </Button>
//         </ButtonGroup>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button
//           endIcon={<SaveIcon />}
//           variant='contained'
//           color='secondary'
//         >
//           Hello World
//         </Button>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button
//           style={{
//             fontSize: 14
//           }}
//           // disabled
//           // size='large'
//           // size='small'
//           variant='contained'
//           color='secondary'
//         >
//           Hello World
//         </Button>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button
//           disabled
//           size='large'
//           // size='small'
//           variant='contained'
//           color='secondary'
//         >
//           Hello World
//         </Button>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button onClick={() => alert('Hello')} variant='contained' color='secondary'>
//           Hello World
//         </Button>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button variant='contained' color='primary'>
//           Hello World
//         </Button>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;
