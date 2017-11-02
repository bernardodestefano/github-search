# github-search

A github users search component

## Getting started

1. Clone or download this repository
2. run `npm install`
3. run `npm run build`
4. Go to https://127.0.0.1:8080
5. Have fun!

## Guidelines

For security reason I have my github token in a local config.json file, PLEASE ADD yours OR remove the import and add it directly in the service.js method.

I've tried to follow the BEM methodology for the styling, please note that the two section are just container provided only to give context (meaning, the class name are bad :D ) to our github-search component.
The component is meant to be universal and plug & play, it will adapt depending on his container (our section with bad class name).

PS
I have started playing around with webpack couple of weeks ago, building a boilerplate for quick frontend tasks. Of course this assignment was the perfect playground to use it and learn how to improve it (stay tuned).
If you have any advice PLEASE let me know! It will be very appreciated :)
Link at the [repository](https://github.com/bernardodestefano/webpack-boilerplate)

## Survey

1. What do you like about your solution?
	 
		I have tried to make it simple and readable, I like this simplicity ("We Simplify", right?).

2. What do you dislike about your solution?

		The component's style is meant to give consistency primarily, a proper shape and decent look to the component. I don't like the appeal and the visual feeling. Having 3 hours I had to prioritize and I couldn't spent much time on it (to be honest the input itself needs absolutely some make up).


3. If you had a full day more to work on this, what would you improve?

		Improving the js codebase, the navigation and usability. The keyboard accessibility doesn't work as I would. Definitely an hard css restyling to make it more sexy (this should be easy since it looks so bad now).

4. If you would start from scratch now, what would you do differently?

		Taking in count the previous answer, in case of a brand new version I would love to use a framework to experiment a bit, pretty sure I'll choose Vuejs.

## Contributing

- Fork the project, add your feature (or fix a bug) and open a pull request OR
- [Open](https://github.com/bernardodestefano/github-search/issues) an issue for bugs or feature request.
