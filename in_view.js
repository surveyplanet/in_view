/**
 * Check whether and element in within the browsers viewport.
 * 
 * @method inView
 * @param {HTMLElement|String} element An HTMLElement or String containing a valid id (#my-elm) or class (.my-elm) name
 * @param {Object} options function options.
 * @param {Boolean} options.partial When true the element is considered inside the viewport if any part is visible.
 * @param {Number|String} options.offset Offset the element either by number of pixels or a percentage e.g.:'50%'
 * @return {Boolean} Whether the element is inside the document viewport or not.
 * @example
 * const target = document.getElementById('target', {});
 *
 * document.addEventListener('scroll', (e) => {
 *
 *   let isInView = inView(target, scrollOptions);
 *   console.log('element is in view:', isInView );
 * 
 * });
 *
 */

const inView = ( element, options={} ) => {

	if ( Object.prototype.toString.call(element) === '[object String]' ) {
		element = document.querySelector(element);
	}

	if (!element) {
		throw new Error('An HTMLElement or String containing a valid id (#my-elm) or class (.my-elm) name is required.');
	}
	
	const rect = element.getBoundingClientRect() || {};
	const height = window.innerHeight || document.documentElement.clientHeight;
	const width = window.innerWidth || document.documentElement.clientWidth;

	let offsetX = 0;
	let offsetY = 0;

	if (options.partial) {
		return rect.top <= height && 
			rect.left <= width && 
			rect.bottom > 0 &&
			rect.right > 0;
	}

	if (options.offset) {

		// if offset is a percentage
		if ( /^[0-9]{1,3}%$/.test(options.offset) ) {
			const percent = Math.abs(100 - options.offset.replace('%', ''));
			const decimal = percent / 100;
			offsetX = rect.width * decimal;
			offsetY = rect.height * decimal;

		} else if (!isNaN(options.offset)) {
			offsetX = Number( options.offset );
			offsetY = Number( options.offset );
		}
	}

	return (rect.top + offsetY) >= 0 && 
		(rect.bottom - offsetY) <= height && 
		(rect.left + offsetX) >= 0 && 
		(rect.right - offsetX) <= width;
};

export default inView;