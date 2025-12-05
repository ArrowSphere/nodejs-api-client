.PHONY: help install build clean test test-unit audit check-deps dedupe audits check-registry

help:
	@echo "\033[1;36mInstallation:\033[0m" \
	&& echo "  \033[1;32minstall     	\033[0m : Install dependencies (yarn install --frozen-lockfile)" \
	&& echo "  \033[1;32minstall-mutable 	\033[0m : Update yarn.lock from package.json (yarn install)" \
	&& echo "" \
	&& echo "\033[1;36mBuild & Clean:\033[0m" \
	&& echo "  \033[1;32mbuild       	\033[0m : Build the project (yarn build)" \
	&& echo "  \033[1;32mclean       	\033[0m : Remove build and node_modules folders" \
	&& echo "" \
	&& echo "\033[1;36mTests:\033[0m" \
	&& echo "  \033[1;32mtest        	\033[0m : Run unit tests" \
	&& echo "  \033[1;32mtest-unit   	\033[0m : Run unit tests (alias for test)" \
	&& echo "" \
	&& echo "\033[1;36mAudit & Dependencies:\033[0m" \
	&& echo "  \033[1;32maudit       	\033[0m : Security audit of dependencies (yarn audit)" \
	&& echo "  \033[1;32mcheck-deps  	\033[0m : Check for unused dependencies (depcheck)" \
	&& echo "  \033[1;32mdedupe      	\033[0m : Deduplicate dependencies in yarn.lock" \
	&& echo "  \033[1;32mcheck-registry\033[0m : Ensure all dependencies come from npmjs.org or yarnpkg.com"

install:
	yarn install --frozen-lockfile

install-mutable:
	yarn install

build:
	yarn build

clean:
	rm -rf build node_modules

test: test-unit

test-unit:
	yarn test

audit:
	yarn audit

dedupe:
	yarn dedupe && yarn install --frozen-lockfile

check-registry:
	@echo "\033[1;36mChecking that all dependencies come from npmjs.org or yarnpkg.com...\033[0m"
	@awk '/^  resolved / {print $$2}' yarn.lock | grep -Ev 'npmjs.org|yarnpkg.com' && (echo '\033[1;31mSome dependencies are not from npmjs.org or yarnpkg.com!\033[0m' && exit 1) || echo '\033[1;32mAll dependencies are from npmjs.org or yarnpkg.com.\033[0m'
