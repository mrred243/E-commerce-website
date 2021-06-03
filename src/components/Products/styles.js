import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/background.jpg';

export default makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(5),
		paddingBottom: '100px',
	},
	root: {
		flexGrow: 1,
	},
	title: {
		marginTop: '5%',
		textAlign: 'center',
		marginBottom: '5%',
	},
	superTitle: {
		fontWeight: 400,
		color: 'rgb(230,230,230)',
		top: '65vh',
		right: '5vw',
		position: 'absolute',
		textAlign: 'right',
	},
	scrollDownIcon: {
		color: 'rgba(255,255,255, 0.4)',
		marginTop: '15px',
		marginRight: '30px',
	},
	cover: {
		backgroundImage: `url(${Image}) `,
		backgroundColor: 'rgba(0,0,0,0.75)',
		backgroundBlendMode: 'overlay',
		height: '100vh',
		width: '100vw',
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'relative',
	},
}));
