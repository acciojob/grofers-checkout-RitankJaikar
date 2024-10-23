const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//Add your code here
	const allPrice= document.querySelectorAll(".price");
	let sum= 0; 
	allPrice.forEach(price => {
		sum+=parseInt(price.innerText);
	})
	const total = document.createElement("div");
	total.innerText= sum;
	document.body.appendChild(total);
};

getSumBtn.addEventListener("click", getSum);

