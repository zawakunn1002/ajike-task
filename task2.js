let users = [
  { name: 'taro', height: 170, weight: 60},
  { name: 'jiro', height: 180, weight: 90},
  { name: 'saburo', height: 175, weight: 69},
  { name: 'shiro', height: 176, weight: 70},
  { name: 'goro', height: 150, weight: 80}
];

let filteredusers = users.filter((user) => {
	return user.height > 170 && user.weight < 70;
});



filteredusers.forEach( function( value ){
	console.log(value.name);
});
