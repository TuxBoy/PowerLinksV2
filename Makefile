dc := USER_ID=$(user) GROUP_ID=$(group) docker-compose
dr := $(dc) run --rm

.DEFAULT_GOAL := help
.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: deploy
deploy: ## Déploie une nouvelle version du site sur heroku
	git push heroku master

.PHONY: dev
dev: vendor/autoload.php ## Lance le serveur de développement
	$(dc) up

.PHONY: test
test: vendor/autoload.php ## Execute les tests
	$(dr) php bin/console doctrine:schema:validate --skip-sync
	$(dr) php vendor/bin/phpunit

.PHONY: tt
tt: vendor/autoload.php ## Lance le watcher phpunit
	php bin/console cache:clear --env=test
	php vendor/bin/phpunit-watcher watch --filter="nothing"

vendor/autoload.php: composer.lock
	$(php) composer install
	touch vendor/autoload.php
