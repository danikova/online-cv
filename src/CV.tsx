import { Container, Paper, makeStyles, createStyles } from '@material-ui/core';
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Profile } from './Profile';
import { Signature } from './Signature';
import { Sections } from './Sections';
import { Actions } from './Actions';
import { useLocale } from './lang';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5584b1',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f8f3ea',
            contrastText: '#303030',
        },
    },
});

const useStyles = makeStyles(() =>
    createStyles({
        cvPaper: {
            margin: '0.25in',
            padding: '0.5in',
        },
    }),
);

function CV() {
    const classes = useStyles();
    const { locale } = useLocale();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md' disableGutters={true}>
                <Paper
                    elevation={3}
                    className={`${classes.cvPaper} fade-in`}
                    key={locale}
                >
                    <Profile />
                    <Sections />
                    <Signature />
                </Paper>
                <Actions />
            </Container>
        </ThemeProvider>
    );
}

export default CV;