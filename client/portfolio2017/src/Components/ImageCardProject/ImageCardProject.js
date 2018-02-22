import React from 'react';
import PropTypes from 'prop-types';
//MUI Components
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
//Internal Componetns
import ProjectsAnime from '../../images/SVG/ProjectsAnime';
//HOC for connect to Redux
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//locale neds of global connect to work
import { lenguajeSelector } from '../../Store/Actions/globals';

const styles = theme => ({
  root: {
    padding: '2rem 4rem'
  },
  card: {
    maxWidth: 450
  },
  title: {
    fontFamily: "'Lato', sans-serif",
    color: '#1565c0',
    textTransform: 'uppercase',
    letterSpacing: '.3rem'
  },
  subTitle: {
    fontFamily: "'Montserrat', sans-serif",
    textTransform: 'capitalize',
    letterSpacing: '.2rem'
  },
  conTent: {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '.2rem',
    fontZise: '4rem'
  },
  media: {
    height: 194
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'transparent'
  },
  chip: {
    margin: theme.spacing.unit
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

export class ImageCardProject extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  renderContent = (conTent, lenguaje, arreglo) => {
    const arr = lenguajeSelector(lenguaje, arreglo);
    return arr.map((item, index) => (
      <Typography paragraph className={conTent} key={index}>
        {item}
        <br />
      </Typography>
    ));
  };

  render() {
    const { lenguaje } = this.props.globals;
    const {
      classes,
      titleOfTheCard,
      subTitleOfTheCard,
      ImageOfTheCard,
      AltOfTheImage,
      smallDescription,
      contentOfTheCard,
      src
    } = this.props;

    return (
      <div className={`${classes.root} ImageCardProject`}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Code" className={classes.avatar}>
                <ProjectsAnime />
              </Avatar>
            }
            classes={{
              title: classes.title,
              subheader: classes.subTitle
            }}
            title={lenguajeSelector(lenguaje, titleOfTheCard)}
            subheader={lenguajeSelector(lenguaje, subTitleOfTheCard)}
          />
          <CardMedia
            className={classes.media}
            image={ImageOfTheCard}
            src={src}
            title={AltOfTheImage}
          />
          <CardContent>
            <Typography className={classes.conTent}>
              {lenguajeSelector(lenguaje, smallDescription)}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              color="primary"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph className={classes.title}>
                {`${lenguajeSelector(lenguaje, subTitleOfTheCard)}:`}
              </Typography>
              {this.renderContent(classes.conTent, lenguaje, contentOfTheCard)}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ImageCardProject.propTypes = {
  classes: PropTypes.object.isRequired,
  titleOfTheCard: PropTypes.object.isRequired,
  subTitleOfTheCard: PropTypes.object.isRequired,
  ImageOfTheCard: PropTypes.string.isRequired,
  AltOfTheImage: PropTypes.string.isRequired,
  smallDescription: PropTypes.object.isRequired,
  contentOfTheCard: PropTypes.object.isRequired,
  globals: PropTypes.shape({
    lenguaje: PropTypes.string.isRequired
  })
};

ImageCardProject = withStyles(styles)(ImageCardProject);

export default GlobalsConnect(ImageCardProject);
