 var currentTime = 0;
 	const height = 800
	const width = 800
	var svg;
var amountOfTime = 120;
var margin = 10;
function startVis() {
	svg = d3.select("div#graph")
		.append("svg")
		.attr("width",width)
		.attr("height",height*(1))
	slides = svg.selectAll("g.slides").data(d3.range(0,(amountOfTime/10)+1)).enter().append("g")
		.attr("transform", (d,i)=>"translate(0 "+(i*800)+")")
		.attr("class","slides")
	slides.append("rect")
		
		.attr("x", margin)
		.attr("y", margin)
		.attr("width", width-(margin*2))
		.attr("height", height-(margin*2))
		.style("stroke","black")
		.style("stroke-width", "2px")
		.style("fill", "white")
		.attr("rx", 6)
		.attr("ry", 6)
	slides.append("text")
		.attr("x",width/2)
		.attr("y",height/2)
		.text(d=>(d==12)?"Fin":d)
}
timeCheck = 0;
function runSomething() {
	if (timeCheck != (Math.floor(Math.round(currentTime)/10))) {
		svg.selectAll("g.slides")
			.transition("slides")
			.duration(1000)
			.attr("transform", (d,i)=>"translate(0 "+((i*800)-(Math.floor(Math.round(currentTime)/10)*800))+")")
		timeCheck = (Math.floor(Math.round(currentTime)/10))
	}
}