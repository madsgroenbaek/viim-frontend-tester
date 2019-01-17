import React, { Component } from 'react';
import Icons from '../icons/Icons'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
const toolbarStyle = {
  height: '100%',
  width:48,
  
  position:"absolute",
  borderRight:"2px solid",
  "border-color": "red",
  "border-opacity":"0.12",
};

const styles = theme => ({
  root: {
    //position:"absolute",
    display:"block",
    borderRight: "2px solid #ffffff",
    height:"100%"
  },
  icons:{
    
  }
});

class LeftToolbar extends Component {
  constructor(props){
    super(props)
    this.state={selected:1}
  }
  OnStateChange = param =>(e)=>{
    e.preventDefault()
    this.props.SetMyMembersFilter(param)
    this.setState({selected:param})
    
  }
  render() {
    const {selected}=this.state
    const size=24
    const {classes} = this.props;
    return (
        
      //<div style={toolbarStyle} >
        /* <div style={{background:"red", height:"100%"}}></div> */
        <Toolbar className={classes.root}>
        <IconButton aria-label="Filter 1" onClick={this.OnStateChange(4)} className={classes.icons}>
          <Icons name={selected===4?"story/pitches_on":"story/pitches_off"} size={size} className={classes.icons}/>
        </IconButton>
        <IconButton aria-label="Filter 1" onClick={this.OnStateChange(3)}>
          <Icons name={selected===3?"story/stories_on":"story/stories_off"} size={size} className={classes.icons}/>
        </IconButton>
        <IconButton aria-label="Filter 1" onClick={this.OnStateChange(2)}>
          <Icons name={selected===2?"story/bookmarks_on":"story/bookmarks_off"} size={size} className={classes.icons}/>
        </IconButton>

        <IconButton aria-label="Filter 1" onClick={this.OnStateChange(1)} className={classes.icons}>
          <Icons name={selected===1?"story/evergreen_on":"story/evergreen_off"} size={size}/>
        </IconButton>

        <IconButton aria-label="Filter 1" onClick={this.OnStateChange(0)}>
          <Icons name={selected===0?"story/story_cluster_on":"story/story_cluster_off"} size={size}/>
        </IconButton>
        </Toolbar>
    );
  }
}

export default withStyles(styles) (LeftToolbar);