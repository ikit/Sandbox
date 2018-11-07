import React from 'react';
import videos from './videos';

export default class VideoDetail extends React.Component {

	constructor() {
		super();

		const index = Math.floor(Math.random()*videos.length);
		this.state = {
			index,
			video: videos[index]
		};

		this.handleNextVideoClick = this.handleNextVideoClick.bind( this );
	}

	componentDidMount(){
		this.playVideo();
	}

	componentDidUpdate(prevProps, prevState){
		if (prevState.video.id != this.state.video.id){
			this.playVideo();
		}
	}

	playVideo() {
		if ( this.video ) {
			this.video.play();
		}
	}

	render() {
		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="video-detail">
						<div className="caption">
							<video
								style={{ width: '100%', backgroundColor: 'black' }}
								ref={el => this.video = el}
								height="300"
								controls
								src={
									this.state.video &&
									'./uploads/' + this.state.video.file
								}
							>
							</video>
							<h3>{this.state.video && this.state.video.title}</h3>
							<p>{this.state.video && this.state.video.description}</p>
							<footer className="text-right">
								<button
									className="btn btn-default"
									onClick={this.handleNextVideoClick}
								>next video</button>
							</footer>
						</div>
					</div>
				</div>
			</div>
		);
	}

	handleNextVideoClick() {
		const newIndex = (this.state.index+1) % videos.length;
		this.setState({
			index: newIndex,
			video: videos[newIndex]
		});
	}

}
