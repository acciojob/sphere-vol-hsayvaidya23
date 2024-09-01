function volume_sphere() {
    //Write your code here
	let rInput = document.getElementById('radius').value;
	const radius = parseFloat(rInput);

	if(isNaN(radius) || radius < 0) {
		document.getElementById('volume').value = 'NaN';
	}else {
		 const volume = (4/3) * Math.PI * Math.pow(radius, 3);
		const roundedVol = volume.toFixed(4);
		document.getElementById('volume').value = roundedVol;
	}
	
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
