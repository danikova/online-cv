import { Container, Paper, makeStyles, createStyles } from '@material-ui/core';
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Profile } from './Profile';
import { Signature } from './Signature';
import { Sections } from './Sections';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
        cvPaper: {
            margin: '0.25in',
            padding: '0.5in',
        },
    }),
);

function CV() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md' disableGutters={true}>
                <Paper elevation={3} className={classes.cvPaper}>
                    <Profile />
                    <Sections />
                    <Signature />
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default CV;
