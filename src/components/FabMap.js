import Fab from '@material-ui/core/Fab';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    zIndex: 999,
    bottom: 30,
    right: 30
  }
}));

const FabMap = props => {
  const classes = useStyles();

  return (
    <Fab onClick={props.onClick} className={classes.fab} color="primary" aria-label="add">
      <RoomIcon />
    </Fab>
  );
};

export default FabMap;
