import { Container, Paper, makeStyles, createStyles } from '@material-ui/core';
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Profile } from './Profile';
import { Signature } from './Signature';
import { Sections } from '@sections';
import { Actions } from './Actions';
import { useLocale } from '@lang';

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

function CV() {
  const { locale } = useLocale();

  return (
    <div className='box-border p-24 flex items-center justify-center'>
      <div
        key={locale}
        className='p-12 max-w-[1000px]'
      >
        <Profile />
        <Sections />
        <Signature />
      </div>
      <Actions />
    </div>
  );
}

export default CV;
