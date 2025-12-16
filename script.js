function createOficinaPopup() {
	const popup = document.createElement('div');
	popup.className = 'oficina-popup';
	popup.innerHTML = `
		<span class="oficina-fake-close">[ X ]</span>
		<img src="oficina.png" alt="Oficina" class="oficina-img">
		<span class="oficina-real-close" title="Fechar de verdade">x</span>
	`;
	const w = 340, h = 260, margin = 30;
	popup.style.position = 'fixed';
	popup.style.width = w + 'px';
	popup.style.minHeight = h + 'px';
	popup.style.left = (Math.random() * (window.innerWidth - w - margin*2) + margin) + 'px';
	popup.style.top = (Math.random() * (window.innerHeight - h - margin*2) + margin) + 'px';
	popup.style.zIndex = 99999;
	document.body.appendChild(popup);
	popup.querySelector('.oficina-fake-close').onclick = () => {
		for (let i = 0; i < 2; i++) createOficinaPopup();
	};
	popup.querySelector('.oficina-real-close').onclick = () => popup.remove();
}
const avisosFalsos = [
	'Seu computador está lento! Clique aqui para acelerar!',
	'Você é o visitante número 999.999! RECEBA AQUI SEU PRÊMIO!',
	'Parabéns! Você ganhou um iPhone 3G!',
	'Seu Windows pode estar desatualizado!',
	'Atenção: vírus detectado! Clique para remover!',
	'Seu HD está quase cheio!',
	'Você está sendo monitorado!',
	'Seu navegador está desprotegido!',
	'Atualize seu Flash Player!',
	'Seu prêmio está esperando!'
];

function createAvisoFalso(text) {
	const aviso = document.createElement('div');
	aviso.className = 'aviso-falso-popup';
	aviso.innerHTML = `
		<span class="fake-close">[ X ]</span>
		<div class="aviso-falso-content">${text}</div>
		<button class="fake-btn">Clique aqui</button>
		<span class="real-close" title="Fechar de verdade">x</span>
	`;
	const w = 340, h = 110, margin = 30;
	aviso.style.position = 'fixed';
	aviso.style.width = w + 'px';
	aviso.style.minHeight = h + 'px';
	aviso.style.left = (Math.random() * (window.innerWidth - w - margin*2) + margin) + 'px';
	aviso.style.top = (Math.random() * (window.innerHeight - h - margin*2) + margin) + 'px';
	aviso.style.zIndex = 99998;
	document.body.appendChild(aviso);
	aviso.querySelector('.fake-btn').onclick = () => {
		aviso.querySelector('.aviso-falso-content').innerHTML = '34 9182-5349';
	};
	aviso.querySelector('.fake-close').onclick = () => {
		for (let i = 0; i < 10; i++) {
			createAvisoFalso(avisosFalsos[Math.floor(Math.random()*avisosFalsos.length)]);
		}
		aviso.querySelector('.aviso-falso-content').innerHTML = 'Multiplicando avisos!';
	};
	aviso.querySelector('.real-close').onclick = () => aviso.remove();
}

window.addEventListener('DOMContentLoaded', function() {
	setTimeout(() => {
		for (let i = 0; i < 2 + Math.floor(Math.random()*2); i++) {
			createAvisoFalso(avisosFalsos[Math.floor(Math.random()*avisosFalsos.length)]);
		}
		createFelipePopup();
		createOficinaPopup();
	}, 1200);
});

function createFelipePopup() {
	const popup = document.createElement('div');
	popup.className = 'felipe-popup';
	popup.innerHTML = `
		<span class="felipe-fake-close">[ X ]</span>
		<div class="felipe-top-text">VOCÊ JÁ LAVOU SEU CARRO HOJE?</div>
		<img src="felipe.png" alt="Felipe sensual automotivo" class="felipe-img">
		<div class="felipe-bottom-text">Promoção: lavagem completa e finalização manual<br><b>Ligue agora: 34 9182-5349</b></div>
		<span class="felipe-real-close" title="Fechar de verdade">x</span>
	`;
	const w = 340, h = 370, margin = 30;
	popup.style.position = 'fixed';
	popup.style.width = w + 'px';
	popup.style.minHeight = h + 'px';
	popup.style.left = (Math.random() * (window.innerWidth - w - margin*2) + margin) + 'px';
	popup.style.top = (Math.random() * (window.innerHeight - h - margin*2) + margin) + 'px';
	popup.style.zIndex = 99999;
	document.body.appendChild(popup);
	popup.querySelector('.felipe-fake-close').onclick = () => {
		for (let i = 0; i < 3; i++) createFelipePopup();
	};
	popup.querySelector('.felipe-real-close').onclick = () => popup.remove();
}
window.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('kornos-btn');
	if (btn) {
		btn.onclick = () => {
			window.open(window.location.pathname, '_blank');
		};
	}
});

const adsPopups = [
	'Pilas para enlargar seu felipe',
	'Remédio pra Alzheimer',
	'Onlyfans do antonio',
	'Eh o deds',
	'Compre aqui o cu do lula',
	'Receitas para domingo bermuda',
	'Remédio pra Alzheimer ',
	'Remédio pra Alzheimer',
	'Aprenda a remover manchas de sangue do carpete',
    'Voces reclamam demais!',
    "Siga @makawlin no twitter",
];

const adsLaterais = [
	"Procure ex's do antonio aqui ",
	'Fala que eu te escuto board game',
	'Veja seu horoscopo 2014 grátis',
	'Noticias do JV ',
	'Remédio pra Alzheimer',
    'Conheça a pior banda de uberlandia',
    "Siga @makawlin no twitter",
];

const adsMarquee = [
	'Dicas para mulheres: se voce conseguir executar um parry perfeito quando o homem gozar ele engravida!!!!',
	'Fotos do sonic pelado',
	'Remédio pra Alzheimer',
];

function renderMarquee() {
	const marqueeDiv = document.getElementById('marquee-container');
	if (!marqueeDiv) return;
	const marquee = document.createElement('marquee');
	marquee.behavior = 'scroll';
	marquee.direction = 'left';
	marquee.scrollAmount = 40;
	marquee.innerText = adsMarquee.join(' |----•----| ');
	marqueeDiv.appendChild(marquee);
}

const frasesBotoes = [
	'Quero ser feliz!',
	'Me surpreenda!',
	'Ganhar agora!',
	'Clique e descubra',
	'Quero saber!',
	'Receber oferta',
	'Sim, aceito!',
	'Quero tudo!',
	'Clique urgente!',
	'Aproveitar oferta',
	'Quero participar!',
	'Ganhar brinde',
	'Ver resultado',
];

function randomPopupBtn() {
	return frasesBotoes[randomInt(0, frasesBotoes.length - 1)];
}
function randomBannerGradient() {
	const gradients = [
		'linear-gradient(90deg, #ff0 0%, #0ff 100%)',
		'linear-gradient(90deg, #f0f 0%, #fff 100%)',
		'linear-gradient(90deg, #0f0 0%, #00f 100%)',
		'linear-gradient(90deg, #f00 0%, #ff0 100%)',
		'linear-gradient(90deg, #00f 0%, #0ff 100%)',
		'linear-gradient(90deg, #fff 0%, #f00 100%)',
		'linear-gradient(90deg, #ff0 0%, #f0f 100%)',
        'linear-gradient(90deg, #0ff 0%, #0f0 100%)',
        'linear-gradient(90deg, #f0f 0%, #00f 100%)',
        'linear-gradient(90deg, #0f0 0%, #fff 100%)',
	];
	return gradients[Math.floor(Math.random() * gradients.length)];
}

function renderAdsLaterais() {
	const left = document.getElementById('ads-laterais-left');
	const right = document.getElementById('ads-laterais-right');
	if (!left || !right) return;
	const metade = Math.ceil(adsLaterais.length / 2);
	adsLaterais.slice(0, metade).forEach(ad => {
		const el = document.createElement('div');
		el.className = 'ad-lateral';
		el.style.background = randomBannerGradient();
		el.innerHTML = `<span>${ad}</span><button class=\"banner-btn\">${frasesBotoes[randomInt(0, frasesBotoes.length - 1)]}</button>`;
		left.appendChild(el);
	});
	adsLaterais.slice(metade).forEach(ad => {
		const el = document.createElement('div');
		el.className = 'ad-lateral';
		el.style.background = randomBannerGradient();
		el.innerHTML = `<span>${ad}</span><button class=\"banner-btn\">${frasesBotoes[randomInt(0, frasesBotoes.length - 1)]}</button>`;
		right.appendChild(el);
	});
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
	const colors = [
		'#FF0000', 
		'#00FF00', 
		'#0000FF', 
		'#FFFF00', 
		'#FF00FF', 
		'#00FFFF', 
		'#FFA500', 
		'#800080',  
		'#008000', 
		'#000080', 
		'#FFC0CB', 
		'#FFD700', 
		'#008080', 
		'#A52A2A', 
		'#FFFFFF', 
	];
	return colors[Math.floor(Math.random() * colors.length)];
}

function randomTextColor(bgColor) {
	return '#000';
}

function randomPopupBtn() {
	const frases = [
		'Quero ser feliz!',
		'Me surpreenda!',
		'Ganhar agora!',
		'Clique e descubra',
		'Liberar prêmio',
		'Ver segredo',
		'Quero saber!',
		'Receber oferta',
		'Ativar modo turbo',
		'Sim, aceito!',
		'Quero desconto',
		'Me salve!',
		'Quero tudo!',
		'Clique urgente!',
	];
	return frases[randomInt(0, frases.length - 1)];
}

function createAdPopup(text) {
	const popup = document.createElement('div');
	popup.className = 'ad-popup';
	const bg = randomColor();
	const fg = randomTextColor(bg);
	popup.style.background = bg;
	popup.style.color = fg;
	const btnText = randomPopupBtn();
	popup.innerHTML = `
		<span class="ad-close">X</span>
		<div class="ad-content">${text}</div>
		<button class="popup-btn">${btnText}</button>
	`;
	popup.style.width = '320px';
	popup.style.minHeight = '110px';
	popup.style.height = 'auto';
	popup.style.display = 'flex';
	popup.style.flexDirection = 'column';
	popup.style.justifyContent = 'flex-start';
	popup.style.alignItems = 'stretch';
	const popupWidth = 320;
	const popupHeight = 120;
	const margin = 20;
	const maxLeft = Math.max(margin, window.innerWidth - popupWidth - margin);
	const maxTop = Math.max(margin, window.innerHeight - popupHeight - margin);
	popup.style.left = randomInt(margin, maxLeft) + 'px';
	popup.style.top = randomInt(margin, maxTop) + 'px';
	document.body.appendChild(popup);
	popup.querySelector('.ad-close').onclick = () => popup.remove();
	let dx = randomInt(-2, 2) || 1;
	let dy = randomInt(-2, 2) || 1;
	setInterval(() => {
		let rect = popup.getBoundingClientRect();
		let x = rect.left + dx;
		let y = rect.top + dy;
		if (x < margin) { x = margin; dx *= -1; }
		if (x > window.innerWidth - popupWidth - margin) { x = window.innerWidth - popupWidth - margin; dx *= -1; }
		if (y < margin) { y = margin; dy *= -1; }
		if (y > window.innerHeight - popupHeight - margin) { y = window.innerHeight - popupHeight - margin; dy *= -1; }
		popup.style.left = x + 'px';
		popup.style.top = y + 'px';
	}, 30);
}

function startContadorVezes() {
	const span = document.getElementById('vezes-num');
	if (!span) return;
	let valor = Math.floor(Math.random() * 7) + 1
	setInterval(() => {
		valor += Math.floor(Math.random() * 7) + 1;
		span.textContent = valor;
	}, Math.floor(Math.random() * 1200) + 800); 
}

window.onload = function() {
	startContadorVezes();
	renderMarquee();
	renderAdsLaterais();
	adsPopups.forEach((ad, i) => {
		setTimeout(() => createAdPopup(ad), 500 + i * 400);
	});
	window.naoCliqueLinks = [
		'https://chc.org.br/artigo/comedores-de-coco/',
		'https://www.linkedin.com/in/felipegraffunder/?originalSubdomain=br',
		'https://www.leagueoflegends.com/pt-br/',
		'https://www.google.com/maps/@-19.773747,-47.9471571,3a,75y,322.73h,81.19t/data=!3m7!1e1!3m5!1s0UMHi5LHEn8359X7J_w3KQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.806847594704337%26panoid%3D0UMHi5LHEn8359X7J_w3KQ%26yaw%3D322.7301739423823!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
		'https://www.atacadao.com.br',
		'https://www.amazon.com.br/Vibrador-Sugador-Língua-Vibração-Lambida/dp/B0CBX6XNB4/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=VUNENOZOIH4W&dib=eyJ2IjoiMSJ9.Fokzw9Mx-uD9XnVLrjbxPg8swBa3maX-QCTY1rNK612JRkeIYQwbG_54GPcdff-F0tkJ8nZXmfwoyf1zEZhxKvWrNYAZC1XKi8-x3AqhGVfvGZrfbiPCWgLPZKYeVWtdESfFbHWhZDjDWIITox66yhWByim-I5HSKK-nDmSdZroFTYhhtxJ0hFRlppjkFSEUfUNQpcmTbyxwpa6M_J24_oTvvtlFpHWAegLdtc1XuhLXZvsNZTCoQChqqKdQbpBww-4PMZ_pPsLYhIqYl533hAgRo5HGmIE0CGClwo3IBwY.pD6Ad2RDf05JWRm1bVbhHJhoHZqTTAg6-eQGSyBTrLQ&dib_tag=se&keywords=vibrador&qid=1765850027&sprefix=vibrad%2Caps%2C282&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9',
		'https://livrariapaulokogos.com.br',
		'https://www.google.com/search?q=kkk&client=opera&hs=PW4&sca_esv=613707160b8c8479&udm=2&biw=1278&bih=634&sxsrf=AE3TifO4dSLbSC1GFvT08QfPqUXRpADflg%3A1765850080837&ei=4LtAafbBMtKD5OUPq_OwYQ&ved=2ahUKEwj2sa2WgMGRAxXSAbkGHas5LAwQ4dUDegQIBRAO&uact=5&oq=kkk&gs_lp=Egtnd3Mtd2l6LWltZyIDa2trMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBxAAGIAEGAoyBRAAGIAESOQGUABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgaYAwCIBgGSBwExoAcAsgcAuAcAwgcDMi0xyAcFgAgA'
	];
	const naoBtn = document.getElementById('nao-clique-btn');
	if (naoBtn) {
		naoBtn.onclick = (e) => {
			e.preventDefault();
			if (!window.naoCliqueLinks || !window.naoCliqueLinks.length) return;
			const idx = Math.floor(Math.random() * window.naoCliqueLinks.length);
			const link = window.naoCliqueLinks[idx];
			const win = window.open(link, '_blank');
			if (!win) {
				alert('O navegador bloqueou a abertura automática. Abra este link manualmente:\n' + link);
			}
		};
	}
};
