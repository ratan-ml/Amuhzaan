#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rails db:purge db:migrate db:seed 