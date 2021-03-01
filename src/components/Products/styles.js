import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/background.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    paddingBottom: '50px'
  },
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: '5%',
    textAlign: 'center',
    marginBottom: '5%',
  },
  supertitle: {
    fontWeight: 500,
    color: 'rgb(230,230,230)',
    top: '70%',
    right: '5%',
    position: 'absolute',
    textAlign: 'right'
  },
  cover: {
    backgroundImage: `url(${Image}) `,
    backgroundColor: 'rgba(0,0,0,0.85)',
    backgroundBlendMode: 'overlay',
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));