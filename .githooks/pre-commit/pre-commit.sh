#!/bin/bash

#
# @TODO: add conditional to see if working tree is clean. only proceed when clean.
#

# configure node/gulp for clean commit
export NODE_ENV='production'

# build assets
npm run sass
git add css/styles.css
