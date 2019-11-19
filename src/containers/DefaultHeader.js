import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import takasIco from '../images/yin_yang.png';

import './styles/defaultHeader.scss';

class DefaultHeader extends Component {
	constructor (props) {
		super(props);
		this.state = {matchCount: 0};
	}
	render() {
		return (
			<React.Fragment>
				<div className='nav-frame'>
					<a href='/home/'>
						<img className='app-logo' src={takasIco} alt={takasIco}/>
					</a>
							 <a href='/matches/' style={{ height: '100%'}}>
								<div className='matches-frame'>
									<h1 className='match-count'>{this.state.matchCount}</h1>
								</div>
								</a>
							<a href='/profile/'>
									<span className='profile-button'>Kullanıcı</span>
							</a>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(DefaultHeader);
