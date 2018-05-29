import React from 'react';
import PropTypes from 'prop-types';

function FooterComponent() {
  return (
    <footer id="footer">
	<div class="container">
		<div class="row">
			<div class="col-md-3 widget">
				<h3 class="widget-title">Contact</h3>
				<div class="widget-body">
					<p>(443) 538-3280<br/>
						<a href="mailto:tconchie@gmail.com">tconchie@gmail.com</a><br/>
						<br/>
						Boulder, CO
					</p>
				</div>
			</div>

			<div class="col-md-3 widget">
				<h3 class="widget-title">Connect with me</h3>
				<div class="widget-body">
					<p class="follow-me-icons">
						<a href="https://www.github.com/tom-con"><i class="fa fa-github fa-2"></i></a>
						<a href="https://www.linkedin.com/in/tconchie"><i class="fa fa-linkedin fa-2"></i></a>
            <a href="https://www.facebook.com/tconchie"><i class="fa fa-facebook-official fa-2"></i></a>
            <a href="https://www.flickr.com/photos/tconchie/"><i class="fa fa-flickr fa-2"></i></a>
					</p>
				</div>
			</div>
      <a href="https://www.codewars.com/users/tomcon/"><img src="https://www.codewars.com/users/tomcon/badges/large"></a>
		</div>
	</div>
</footer>
<footer id="underfooter">
	<div class="container">
		<div class="row">

			<div class="col-md-6 widget">
				<div class="widget-body">
					<p>Boulder, CO</p>
				</div>
			</div>

			<div class="col-md-6 widget">
				<div class="widget-body">
					<p class="text-right">
						Copyright &copy; 2017, Tom Conchie<br/>
				</div>
			</div>

		</div>
	</div>
</footer>
  );
}

export default FooterComponent;
