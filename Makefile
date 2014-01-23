
build: components index.js ./css/messager.css ./template/template.js
	@component build --dev

template.js: ./template/template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components ./template/template.js

.PHONY: clean
