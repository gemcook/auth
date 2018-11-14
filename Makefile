clean:
	rm -rf ./lib/

build-es:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:es

prepublish:
	$(MAKE) clean

	$(MAKE) build-es

	cp ./flow-typed/index.js.flow ./lib/index.js.flow

gen-flow:
	flow gen-flow-files src/index.js --out-dir flow-typed

publish:
	yarn publish --access public
