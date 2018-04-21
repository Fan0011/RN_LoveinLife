import React, { Component } from 'react'
import style from './block.css'

class Block extends Component {
    render() {
    	return (
    		<div className={style.wrap}>
    			<div className={style.leftBlock}>
    				<div className={style.icon}>
    					<i className="far fa-heart fa-3x"></i>
    				</div>
    			</div>
    			<div className={style.rightBlock}>
    				<div className={style.header}>
    					MADE WITH LOVE
    				</div>
    				<div className={style.content}>
    					With more than ten years of knowledge and expertise we design and code clean awesome websites and apps!
    				</div>
    			</div>
    		</div>
		)
	}
}

export default Block