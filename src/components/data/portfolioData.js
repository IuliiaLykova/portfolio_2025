/**
 * @SofiDev Это JSDOC, если кажется слишком сложным — просто удали, это комментарий и он ни на что не влияет
 * @typedef PortafolioData
 * @property {string} imgSrc Ссылка на изображение
 * @property {string} title Заголовок карточки
 * @property {string[]} skills Массив навыков, например: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion Описание карточки
 * @property {string} demoURL Ссылка на демо-страницу
 * @property {string} repoURL Ссылка на репозиторий, например: https://github.com/usuario/repo
 * @property {string} anim Анимация, выполняемая при загрузке карточки, напр.: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Яркость цвета фона карточки, напр.: 0.1
 */

/**
 * @SofiDev Это JSDOC, если кажется слишком сложным — просто удали, это комментарий и он ни на что не влияет
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Restaurant-Website mit responsivem Design und benutzerfreundlicher Navigation. Link bald verfügbar.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
		title: 'Интернет-магазин',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'Demo E-Commerce-Projekt: Produktkatalog, Warenkorb, responsive Umsetzung. Link bald verfügbar.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Кофейня',
		skills: ['React', 'CSS'],
		descripcion:
			'Café-Website mit Menüseiten, Angeboten und Kontaktinformationen. Link bald verfügbar.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
		title: 'Магазин белья',
		skills: ['React', 'CSS'],
		descripcion:
			'Интернет-магазин с современным дизайном, удобным каталогом и фильтрацией.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Кофейня',
		skills: ['React', 'CSS'],
		descripcion:
			'Многостраничный сайт для кофейни с акцентом на визуальный стиль и атмосферу.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Ресторан',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Современный лендинг ресторана с адаптивной версткой и акцентом на удобство пользователя.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Мы делаем map по portafolioData, чтобы добавить иконки к навыкам
 * 	Подробнее см. Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Берём весь предыдущий контент элемента
		...item,
		// Заменяем список skills на соответствующие иконки
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});