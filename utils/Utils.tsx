export const numberWithCommas = (e: number) => {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};