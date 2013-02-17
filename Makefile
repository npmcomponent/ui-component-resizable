
build: components index.js resizable.css template.js
	@component build

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean