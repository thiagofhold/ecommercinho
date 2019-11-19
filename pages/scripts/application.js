
window.ecObj = window.ecObj || []

window.ecObj.products = {
	'computador':{
		'nome':'Macbook Pro',
		'preço':2500,
		'marca':'apple',
		'descrição':'Computador de ultima geração, muito bom para atividades de WA.',
		'path_photo':'imagens/macbook.jpg',
	},
	'camera':{
		'nome':'Maquina Fotográfica',
		'preço':1490.25,
		'marca':'Nikkon',
		'descrição':'Maquina fotobráfica profissional, para tirar fotos para o seu ecommerce',
		'path_photo':'imagens/camera.png'
	},
	'smart_tv':{
		'nome':'Smart TV',
		'preço':2199,
		'marca':'Samsung',
		'descrição':'Smart TV com alta definição de cores. Todos os aplicativos para você assistir suas séries favoritas.',
		'path_photo':'imagens/tv.jpg'
	}
}

window.ecObj.frete = {
	'Sudeste':10,
	'Norte':40,
	'Nordeste':37,
	'Centro-Oeste':33,
	'Sul':23
}


function add_to_cart(p_prod){
	localStorage.setItem("produto_adicionado", String(p_prod));
}

function retorna_produto(){
	var produto_adicinadp = localStorage.getItem("produto_adicionado");
	return produto_adicinadp
}


