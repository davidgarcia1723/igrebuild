import React, { Component } from 'react';
import Stories from 'react-insta-stories';

class Story extends Component {
	render() {
		return (
			<Stories
				stories={stories}
				defaultInterval={1500}
				width={375}
				height={812}
			/>
		);
	}
}

const stories = [
 	//🆕! Rendering Components instead of video or images can now be done by passing a 'content' property into the story. 
	//The props contain properties 'action'(fn) and 'isPaused'(bool)
  	{
                content: ({action, isPaused}) => {
		  const handleClick=(e)=>{e.preventDefault(); action(isPaused ? 'play': 'pause') };
                  return (
                    <div onClick={handleClick}>
			<span>{isPaused ? 'Paused' : 'Playing'}</span>
                    </div>
                  );
                }
        },
	{
		url: 'img/Timeline/Avatar/CoolDavid.PNG',
		seeMore: ({ close }) => (
			<div>Hello</div>
		),
		header: {
			heading: 'David Garcia',
			subheading: 'Posted 5h ago',
			profileImage: 'img/Timeline/Avatar/David.png'
		}
	},
	{
		url: 'img/Timeline/Avatar/KH3.jpeg',
		seeMore: ({ close }) => (
			<div>Hello</div>
		),
		header: {
			heading: 'David Garcia',
			subheading: 'Posted 3h ago',
			profileImage: 'img/Timeline/Avatar/David.png'
		}
    }
	
	// 		

];

export default Story;