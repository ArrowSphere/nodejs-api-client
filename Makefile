install:
	yarn install

build:
	yarn build

clean:
	rm -rf build \
		node_modules

test: test-unit

test-unit:
	yarn test
