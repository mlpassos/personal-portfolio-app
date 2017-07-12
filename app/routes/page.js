import Ember from 'ember';

export default Ember.Route.extend({
	// model(params) {
	// 	return this.store.findRecord('page', params.pageid);
	// }
	model(params) {
		// let response =  {
		// 	title: '',
		// 	content: ''
		// }
		console.log('qui aqui aqui aqui',this.get('currentrouteName'));
		// switch (params.pageid) {
		// 	case 'home':
		// 		response.title = 'Howdy!';
		// 		response.content = '<strong>Welcome</strong> to my work-in-progress Portfolio EmberJS App, it currently features ember-cli-materialize for design, emberfire and is hosted in firebase. At the moment, data is still coming from static objects, but the ember-data powered version with an admin interface is already on the way. This is an open source project and is shared in github, here is the <a href="https://github.com/mlpassos/personal-portfolio-app" target="_blank">link</a>.';
		// 	break;
		// 	case 'about':
		// 		response.title = 'About';
		// 		response.content = '<a href="http://www.marciopassos.com/home/wp-content/uploads/2015/02/avatar-e1424550197483.jpg"><img class="alignleft wp-image-71 size-thumbnail" src="http://www.marciopassos.com/home/wp-content/uploads/2015/02/avatar-150x150.jpg" alt="avatar" width="150" height="150" /></a><p>I like to build Web Applications, not just Websites. I like to work with JS and API. Oh, I also love WordPress and I am a fan of CodeIgniter. Lately I"ve been coding PHP and JavaScript (using EmberJS) mostly, but I also like any other *free* programming language for the web.</p><p>Im an advanced intermediate web developer with server-side background I got from my years working as a support consultant for various jobs/gigs here in Brazil. I hold a Microsoft Certified Professional certificate for TCP/IP networking.</p><p>I"m also a Human-Computer Interaction researcher with 2 published papers and remote collaboration work experience. I work with the LiNE / USP (Laboratory for Informatics and Education @ University Of São Paulo).</p>';
		// 	break;
		// 	case 'contact':
		// 		response.title = 'Contact';
		// 		response.content = 'marciopassosbel [at] gmail [dot] com';
		// 	break;
		// }
		// return response;
	}
});