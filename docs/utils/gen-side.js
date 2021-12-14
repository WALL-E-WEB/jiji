const fs = require('fs');

fs.readdir('./docs', (err, files) => {
	if (err) {
		console.log(err);
	} else {
		const sidebar = files.filter(item => item.indexOf('.md') > -1 && item !== 'index.md');
		sidebar.sort((a, b) => { return a - b });
		const sidebarFull = sidebar.map(item => ({
			text: item.substr(0, item.length - 3),
			link: item
		}))
		sidebarFull.unshift({
			text: '简介',
			link: 'index.md'
		});
		const content = `module.exports =${JSON.stringify(sidebarFull)}`;
		fs.writeFile('./utils/sidebar.js', content, { encoding: 'utf8' }, err => { console.log(err); });
	}
})
