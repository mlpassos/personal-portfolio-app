import Ember from 'ember';

export default Ember.Route.extend({
	// model(params) {
	// 	return this.store.findRecord('page', params.pageid);
	// }
	model(params) {
		let response =  {
			title: '',
			content: ''
		}
		switch (params.pageid) {
			case 'home':
				response.title = 'Home';
				response.content = 'Home Content';
			break;
			case 'about':
				response.title = 'About';
				response.content = '<a href="http://www.marciopassos.com/home/wp-content/uploads/2015/02/avatar-e1424550197483.jpg"><img class="alignleft wp-image-71 size-thumbnail" src="http://www.marciopassos.com/home/wp-content/uploads/2015/02/avatar-150x150.jpg" alt="avatar" width="150" height="150" /></a>Analista de Sistemas, Pesquisador Acadêmico e Desenvolvedor web com foco na usabilidade e experiência do usuário. Gosto de trabalhar em projetos de sites e aplicativos, brincar com APIs, ler e fazer pesquisas na área de Interação Humano-Computador e Informática na Educação. Tenho alguns sistemas com código aberto compartilhados no <a href="http://github.com/mlpassos" target="_blank">github</a> e contribuições a outros projetos da comunidade. Recentemente tive um <a href="http://www.br-ie.org/pub/index.php/wcbie/article/view/3180" target="_blank">projeto selecionado</a> para Mostra de Software em Informática na Educação do Congresso Brasileiro de Informática na Educação 2014 e <a href="https://github.com/mlpassos/easilogo" target="_blank">outro</a> para a McAllen Mini Maker Faire 2014, em parceria com Graham Toal. Atualmente trabalho como freelancer e contribuo para o grupo de pesquisas do <a href="http://line.ime.usp.br/" target="_blank">LInE</a> - Laboratório de Informática na Educação, do Instituto de Matemática e Estatística da Universidade de São Paulo.';
			break;
			case 'contact':
				response.title = 'Contact';
				response.content = 'Contact Content';
			break;
		}
		return response;
	}
});