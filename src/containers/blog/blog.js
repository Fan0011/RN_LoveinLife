import React, { Component } from 'react'
import store, { history } from 'store'
import { Grid, Row, Col } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { getPopularBlogs, getBlog } from 'actions'
import Blogs from 'components/blogs'
import FullBlog from 'components/blogs/full_blog.js'
import SideBlog from 'components/blogs/side.js'

class Blog extends Component {
	constructor(props) {
		super(props)
		store.dispatch(getPopularBlogs())
	}

	goToBlog = (id) => {
		store.dispatch(getBlog(id))
		history.push('/blogs/' + id)
	}

    render() {
        return (
        	<div className="pt-100">
	            <Grid>
	            	<div className="bg-white p-15">
	            		<Row>
		            		<Col sm={9}>
			            		<Switch>
				            		<Route path="/blogs" exact component={Blogs} />
				            		<Route path="/blogs/:id" exact component={FullBlog} />
		                    	</Switch>
	                    	</Col>
	                    	<Col sm={3}>
	                    		<SideBlog goToBlog={(id) => this.goToBlog(id)} />
	                    	</Col>
                    	</Row>
	                </div>
	            </Grid>
            </div>
        );
    }
}

export default Blog