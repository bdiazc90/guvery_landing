// Array of Custom break-points:
const breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400,
};

const banner = document.createElement("div");
banner.innerText = "Size";
banner.style.position = "fixed";
banner.style.top = "10%";
banner.style.left = "50%";
banner.style.padding = "10px";
banner.style.backgroundColor = "#fff";
banner.style.border = "1px solid black";
banner.style.borderRadius = "10px";
banner.style.opacity = "0.5";
banner.style.zIndex = "9999";
document.body.append(banner);

window.addEventListener("resize", changeSize);

function changeSize() {
	const currentWidth = window.innerWidth;
	const currentViewport = Object.entries(breakpoints)
		.reverse()
		.find(([viewport, minsize]) => {
			if (Number(currentWidth) >= minsize) return viewport;
		});
	banner.innerText = currentWidth + ": " + currentViewport[0];
}

window.onload = changeSize();
