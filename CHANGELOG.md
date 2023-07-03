# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [9.0.0](https://github.com/UN-OCHA/common_design/compare/v8.2.0...v9.0.0) (2023-07-03)

### ⚠ BREAKING CHANGES

* **security:** node.js minimum version has been raised from 16.x to 18.16.1 which is LTS at the time of commit. Node 16 will be EOL in a few months.
* **a11y:** we have changed the markup required for the button that copies URLs to clipboard for social sharing. Both CSS and JS for the CD Social Links component have been changed to expect the new markup. See CD Demo for new markup.
* remove `--brand-logo-mobile-url` due to complications with CSS aggregation and relative URLs ([df1976a](https://github.com/UN-OCHA/common_design/commit/df1976ada1353d77a8b910c0d4c87fa0e82e3a78))


### Features

* **a11y:** disable animations/transitions when unwanted ([1acbe62](https://github.com/UN-OCHA/common_design/commit/1acbe623a82799c057815ec042d592c8ade7de4f))
* add label to CD Social Links ([9abe056](https://github.com/UN-OCHA/common_design/commit/9abe056eb4d46d77d5e143be089e5678aaafe969))


### Bug Fixes

* **security:** upgrade to node.js LTS 18.16.1 / npm 9.7.2 ([a19c523](https://github.com/UN-OCHA/common_design/commit/a19c52304e0f6f385174cd7d4cd2918cfa0f0990))
* **a11y:** disable animations/transitions of pseudo-elements ([0372c84](https://github.com/UN-OCHA/common_design/commit/0372c84b3bbf8f67000b5d18632693ccc545faab))
* **a11y:** improve SR of copy-to-clipboard ([261d6be](https://github.com/UN-OCHA/common_design/commit/261d6be64249bbda31a46b2fd89bed28496c9d3e))
* **a11y:** remove redundant ARIA roles from sidebars ([2bd1c33](https://github.com/UN-OCHA/common_design/commit/2bd1c3358e02c2a2a94bf72e3ee536f5e46d0d30))
* eliminate gap below card images ([d8a1039](https://github.com/UN-OCHA/common_design/commit/d8a10397a1a08b878cc49580a77e08cb59ba8d1f))
* prevent CD Form from applying outside `<form>` elements ([017181d](https://github.com/UN-OCHA/common_design/commit/017181d700d04e93907df86e23fc74bc90c889b0))
* remember to unset custom logo for desktop ([be4e0de](https://github.com/UN-OCHA/common_design/commit/be4e0ded842fb62af73a42acedf5962555933d01))


## [8.2.0](https://github.com/UN-OCHA/common_design/compare/v8.1.0...v8.2.0) (2023-06-16)

### Features

* specify mobile logo via --brand variable ([2be5631](https://github.com/UN-OCHA/common_design/commit/2be56319b6aaa56f104307106d00a3ae53be304f))


### Bug Fixes

* **a11y:** add header to announce copyright notice ([9f5bbb9](https://github.com/UN-OCHA/common_design/commit/9f5bbb98a1667d17726e483a050235a7048cde61))
* **a11y:** announce Footer nav in footer ([3a7f43f](https://github.com/UN-OCHA/common_design/commit/3a7f43fb13535a82d4d553b24a59ee2c278a97d4))
* **a11y:** announce Header/Footer in same manner ([459a33c](https://github.com/UN-OCHA/common_design/commit/459a33c01b68d45e07af89418f5554c8e9e411b2))
* **a11y:** announce Site Name and avoid announcing logo ([e517abb](https://github.com/UN-OCHA/common_design/commit/e517abb7a38e0a4800651e548f363c4c7aedab17))
* **a11y:** announce Social nav in footer ([14e44e7](https://github.com/UN-OCHA/common_design/commit/14e44e738d745c32542b131d6d8d40f29f7926da))
* **a11y:** announce ToC as navigation ([6a30be4](https://github.com/UN-OCHA/common_design/commit/6a30be4c5e0e30e295fa175c4cb50121ecb3b03f))
* **a11y:** better roles/attrs for announcing messages ([b0e1e99](https://github.com/UN-OCHA/common_design/commit/b0e1e9958426a3bc2f3b6e23e8751eb2ae97be66))
* **a11y:** ensure main elements have proper ARIA labels ([da79e7a](https://github.com/UN-OCHA/common_design/commit/da79e7aec20c09eb7e238586d94c8fc6482ad54e))
* **a11y:** improve announcement of Help menu ([bf53ba0](https://github.com/UN-OCHA/common_design/commit/bf53ba04c51f4d0e2cb51561e19b46782a3bd15e))
* **a11y:** improve screen reading of Account menu ([232d969](https://github.com/UN-OCHA/common_design/commit/232d969ec91b63106e983f71df1310cfbae973e6))
* **a11y:** improve screen reading of language/help/user menus ([0140cf8](https://github.com/UN-OCHA/common_design/commit/0140cf85c590f559cf7860645a81f168e2cc4b88))
* **a11y:** improve screen reading of main navigation ([06f4990](https://github.com/UN-OCHA/common_design/commit/06f49901a21b1fae63e5a65ec0eef829d29dd852))
* **a11y:** restore visually-hidden heading on Drupal messages ([fc0be7f](https://github.com/UN-OCHA/common_design/commit/fc0be7f330238bc4e31c63c11ced6c86d7d9bf14))
* **a11y:** screen reader announces website header now ([0dbbb6f](https://github.com/UN-OCHA/common_design/commit/0dbbb6f5f5e2e1dc340c38f66898e1a1ce115aa8))
* **a11y:** screen reader improvements for pagination ([f542ed3](https://github.com/UN-OCHA/common_design/commit/f542ed3a60cf9bad303298af295e8fd3332f81c2))
* **a11y:** stop announcing redundant SVG data ([3b07a5a](https://github.com/UN-OCHA/common_design/commit/3b07a5aea474ba76d610f095c25a51749d095183))
* **a11y:** style tabs with improved a11y/RTL ([4b21cfa](https://github.com/UN-OCHA/common_design/commit/4b21cfaa03b7b58a775ed1ede70959b169d749e0))
* **a11y:** unique icons for every message type ([637f1ff](https://github.com/UN-OCHA/common_design/commit/637f1ffa1c42ca779acd7c49c3e8f904d6fbba08))
* avoid printing hreflang on `<li>` tags ([78d1ca6](https://github.com/UN-OCHA/common_design/commit/78d1ca6328e15890c931c41b8d15e6f687038731))
* avoid printing XML processing instruction in HTML ([5182fba](https://github.com/UN-OCHA/common_design/commit/5182fba455ed88a537db7010b77f81d1eb1adebf))
* CD ToC defaults to single-col with a new variant for columns ([7d9bf90](https://github.com/UN-OCHA/common_design/commit/7d9bf903df733ccc02ca38b0b11b09f79c55ec43))
* CSS refactor for CD Alert ([79ce2c1](https://github.com/UN-OCHA/common_design/commit/79ce2c119f0b511054c53c8ae41a6c300200ab9f))
* remove invalid attributes from site logo ([e968025](https://github.com/UN-OCHA/common_design/commit/e9680250b2d9b30903a2fd07da9213af65c96e39))
* simplify how to override logo from sub-theme ([9f3dd4f](https://github.com/UN-OCHA/common_design/commit/9f3dd4fe0ffa0b472716c3d4d3a52af9c90b9b80))
* use --brand colors in CD Figures ([8534794](https://github.com/UN-OCHA/common_design/commit/853479409444d7b00439079f6328fe3e3306f26a))
* Use drupal_static() instead of PHPs static keyword ([d5fd880](https://github.com/UN-OCHA/common_design/commit/d5fd880386b19ca503cb1cb867ff00c86266b189)), closes [#395](https://github.com/UN-OCHA/common_design/issues/395)
* use same color as base-theme for primary--light ([23b08c2](https://github.com/UN-OCHA/common_design/commit/23b08c2704c605a9a4c6904915bda0d6f6c6a405))
* W3 validator errors about duplicate id attributes ([21b634c](https://github.com/UN-OCHA/common_design/commit/21b634cd046f1cc190ebb61d63d0a6ff58085245))


## [8.1.0](https://github.com/UN-OCHA/common_design/compare/v8.0.2...v8.1.0) (2023-05-04)

### Features

* CD-462: add modern mustard cut to content layouts ([dcb3d43](https://github.com/UN-OCHA/common_design/commit/dcb3d439051b073c35aa08be9744b01f49e3db2c))

### Bug Fixes

* add BEM element class to facets sidebar ([6f6342a](https://github.com/UN-OCHA/common_design/commit/6f6342a654de21f4af52dfb5abb5a70a07b1a0ae))
* adjust clearfix pseudo ([4b1d4f5](https://github.com/UN-OCHA/common_design/commit/4b1d4f5119c7acbc1906c6f385c00f404de7f545))
* adopt BEM for all sidebar markup/styles ([6c35c88](https://github.com/UN-OCHA/common_design/commit/6c35c88e5e633bb618e6dd4362e08ab9382fd704))
* adopt brand colors for filters/facets ([1eab45e](https://github.com/UN-OCHA/common_design/commit/1eab45ea39d87c0f3a70d2be06d242226a87b99d))
* adopt new BEM classnames in CD Block Title ([e7c8404](https://github.com/UN-OCHA/common_design/commit/e7c8404763a922a2fa778eebcbde7c3f05fc1559))
* apply bgcolor to sidebars ([c2e5760](https://github.com/UN-OCHA/common_design/commit/c2e57608c45d2427cdad5cf8e5c2cb473c83b7b8))
* apply compact treatment to any heading in a sidebar ([c3be34d](https://github.com/UN-OCHA/common_design/commit/c3be34d64e163e8962efa889317be9f6ac2e508f))
* BEN classname for CD Layout content area ([aa2801f](https://github.com/UN-OCHA/common_design/commit/aa2801feec383e6d2fdd699a0c389c38eb6e0074))
* CD Layout content should grow to fill available space ([59778c5](https://github.com/UN-OCHA/common_design/commit/59778c5907517e7f8e77edeaf36762adf2bf94e7))
* clean up code, consolidate MQs, run linter ([dc97159](https://github.com/UN-OCHA/common_design/commit/dc97159621262ac33fb5a22a5fcde8d23c8d55ea))
* define CD Layout content flex-item after container ([8bc49fd](https://github.com/UN-OCHA/common_design/commit/8bc49fd637f8e38932d8f6f342ec9d8480ded62a))
* enforce proper flex order for second sidebar ([420be92](https://github.com/UN-OCHA/common_design/commit/420be92f1d9944c0d6128312c2ff60361d9ea2b6))
* further simplify universal layout by removing CSS Vars ([e8c71d2](https://github.com/UN-OCHA/common_design/commit/e8c71d2608b830f9d6317bfc127e396281e60270))
* lock sidebars to 285px by default and add option for wider ones ([3751da9](https://github.com/UN-OCHA/common_design/commit/3751da999ee86224ec80a86a8edc54f7bebefd60))
* prevent overflow on viewports 320 > 420 ([ea3be48](https://github.com/UN-OCHA/common_design/commit/ea3be48e2816ca9163c48fe205fc8bf64fa85e42))
* reapply sidebar styles using new BEM classes ([ea9781e](https://github.com/UN-OCHA/common_design/commit/ea9781e95dcb4e0d163b9c61fed63cef6ff9091e))
* remove cd-block-title compact styles ([7267212](https://github.com/UN-OCHA/common_design/commit/72672124fbc2dac07a0f3325030cb20d41bb90e4))
* rename CD Page Layout container class ([799248a](https://github.com/UN-OCHA/common_design/commit/799248a2db774bd4a28789970964df62e417c8d2))
* shorter, proper BEM class for cd-layout ([aaf24bc](https://github.com/UN-OCHA/common_design/commit/aaf24bc93f8ca64341d1bf5825278fc7da59fb77))
* simplify flex layout for sidebars ([84fb4e4](https://github.com/UN-OCHA/common_design/commit/84fb4e409cd7449e921ba76f8e7467ee4d60e9a0))
* split layouts into page/content and refactor page to flex ([6c84806](https://github.com/UN-OCHA/common_design/commit/6c8480651a91e5a0527f24dcf677a56c53286732))
* update cd-article Twig/HTML with new BEM classnames ([716bd47](https://github.com/UN-OCHA/common_design/commit/716bd473c5ce96883573fc8c1a30ed3a98f4bdf7))
* use new layout CSS for faux node columns as well ([1ebe1c1](https://github.com/UN-OCHA/common_design/commit/1ebe1c1999c9e66bc5d67411bce3d662276bbfc0))


## [8.0.2](https://github.com/UN-OCHA/common_design/compare/v8.0.1...v8.0.2) (2023-04-12)

### Bug Fixes

* adjust appearance of active trail on mobile/desktop ([4296eb7](https://github.com/UN-OCHA/common_design/commit/4296eb72733085b8dbe0b16c3e95f37c911259f5))
* adopt focus-visible state and restyle cosmetically ([48f4f25](https://github.com/UN-OCHA/common_design/commit/48f4f25ad1ccc1323d3a53d81553622865c097d3))
* alignment issues for footer copyright ([1c98d48](https://github.com/UN-OCHA/common_design/commit/1c98d48257e54cb389317737a14fa8ab7fe1d3d3))
* CD Footer mandate adjustments ([2aa69a1](https://github.com/UN-OCHA/common_design/commit/2aa69a148558a95786c53922744c5dbeaa043113))
* clean up the footer focus styles ([d5002c0](https://github.com/UN-OCHA/common_design/commit/d5002c05c268127f4ec9bd8875d491101a438eae))
* logical properties for text-align in footer ([7fbec82](https://github.com/UN-OCHA/common_design/commit/7fbec822086bae05f981b73add0d732893024f0f))
* padding/position issues with various GH dropdowns ([bffca47](https://github.com/UN-OCHA/common_design/commit/bffca47ca1684f00ec5557e1d40e0a0b1029c6c7))
* remove carets from Global Header dropdowns ([24c98d1](https://github.com/UN-OCHA/common_design/commit/24c98d1094362d6d84ce0c4f02ee6999f3a086f3))
* remove most RTL selectors from Global Header ([9b808b0](https://github.com/UN-OCHA/common_design/commit/9b808b039a1dee237b336f36fed68eecfd78f7ab))
* restore positioning of last-child nav dropdown ([24acf71](https://github.com/UN-OCHA/common_design/commit/24acf71d1e659f3a84d4195d7db4495b08dc4278))
* RTL cleanup for inline search ([0229a3d](https://github.com/UN-OCHA/common_design/commit/0229a3d0cf047f254e8076979397da1e4c8dd0ed))
* show focus styles when Search is expanded ([8251666](https://github.com/UN-OCHA/common_design/commit/8251666d1ca3fed3a0748c3c3eef266ae58817df))
* update HR.info to be RWR ([179c86d](https://github.com/UN-OCHA/common_design/commit/179c86d4cd4634ff582e32df086eda1abdfa87fe))
* use logical properties for CD Nav ([3e67b9e](https://github.com/UN-OCHA/common_design/commit/3e67b9ebf575ad92e79995c5aca73805ca265dc2))
* use the intended color for focus styles in base-theme ([728fbe2](https://github.com/UN-OCHA/common_design/commit/728fbe2c8f2ea33e20050ab7bb64adb9ea0559ae))
* z-index issue with Site Logo and OCHA Services dropdown ([0c26b0e](https://github.com/UN-OCHA/common_design/commit/0c26b0e4d2ea377800955ee300e8ad8490430245))


## [8.0.1](https://github.com/UN-OCHA/common_design/compare/v8.0.0...v8.0.1) (2023-03-22)

### Bug Fixes

* **cd-tabs:** exclude tabs and styled lists from typography defaults ([61cb937](https://github.com/UN-OCHA/common_design/commit/61cb937fcae1d129056ed87958e3c355414857e8))
* **cd-typography:** revert the disruptive display:block on img tags ([04d768d](https://github.com/UN-OCHA/common_design/commit/04d768dd8bd87e3d257d6ae5da00a5a7a459ba72))


## [8.0.0](https://github.com/UN-OCHA/common_design/compare/v7.4.1...v8.0.0) (2023-02-16)

### ⚠ BREAKING CHANGES

* **sass:** Remove Sass from base/sub-themes ([27ada38](https://github.com/UN-OCHA/common_design/commit/27ada380a707e9007441e3a30d6460dda0b74c68))
* **fonts:** removed system-ui font-family declarations and CSS Var `--cd-font--system` ([6837729](https://github.com/UN-OCHA/common_design/commit/68377295d8fb1ee08e0fe8a46d3ffc5726a73f1e))
* **drupal:** Drupal 9.5 is new minimum supported version. Drupal 8 no longer supported. ([10b520e](https://github.com/UN-OCHA/common_design/commit/10b520eb34b1d3367fd2afc36ce9a7b7750518ee))
* **ie:** remove IE10-specific fixes ([3bdf787](https://github.com/UN-OCHA/common_design/commit/3bdf7877a34ed429ccd49df5a1358bac837ab40f))
* **security:** upgrade to node.js LTS 16.19.0 / npm 8.19.3 ([97cf22c](https://github.com/UN-OCHA/common_design/commit/97cf22c3e43b9566eebee64ef57a1b7eac31f8d8))

### Bug Fixes

* dir-agnostic positioning of Search button chevron ([6356a46](https://github.com/UN-OCHA/common_design/commit/6356a462616d363853f89e7af6a39dd82ecb059a))
* implement Google Fonts Roboto in HTML ([64c7078](https://github.com/UN-OCHA/common_design/commit/64c7078474a6a31fd82bdd290fbb368e89cc2dc1))
* layout bug in mandate ([bf12306](https://github.com/UN-OCHA/common_design/commit/bf1230696250ff1af92226d40ecdabf1756411ac))
* remove float variant from ToC and increase columns ([2525297](https://github.com/UN-OCHA/common_design/commit/2525297b99cc2d171f9eda58836c62579da5b15b))
* reset for lists we know will be styles ([d52c8c2](https://github.com/UN-OCHA/common_design/commit/d52c8c27704d7b00f334c908344023f595c2e720))
* **tests:** remove sass-specific stylelint config from sub-theme ([a320c2b](https://github.com/UN-OCHA/common_design/commit/a320c2bcc424b539eac3cdcd5d1016c916d9886b))
* simplify the component styling the Main Nav ([4be4d65](https://github.com/UN-OCHA/common_design/commit/4be4d659675f081d47c3416005a424157acfb8ca))
* use flexbox for Search form layout ([749fe8a](https://github.com/UN-OCHA/common_design/commit/749fe8ab9a555599adfaaa748878240532728bf9))


## [7.4.1](https://github.com/UN-OCHA/common_design/compare/v7.4.0...v7.4.1) (2023-01-10)

### Bug Fixes

* User menu works automatically now (compare to upgrade instructions for `v7.4.0`) ([7272ab0](https://github.com/UN-OCHA/common_design/commit/7272ab0792a8e69f91b2668bb7320988e980d421))

## [7.4.0](https://github.com/UN-OCHA/common_design/compare/v7.3.0...v7.4.0) (2022-12-21)

### Features

* Language Switcher conforms to UN Multilingual guidelines ([bd4a2e1](https://github.com/UN-OCHA/common_design/commit/bd4a2e10d8df08488904a2e2f923fd809e5f6bce))


### Bug Fixes

* clean up User menu inside new Global Header ([fbfcd5b](https://github.com/UN-OCHA/common_design/commit/fbfcd5b1ce75a3558feacf6509f1f16afba6b57c))

## [7.3.0](https://github.com/UN-OCHA/common_design/compare/v7.2.1...v7.3.0) (2022-11-16)


### Features

* CD Clickable Card ([4467d04](https://github.com/UN-OCHA/common_design/commit/4467d04077602448d361dfa5899be3df02467ec8))
* Clickable variant for CD Card ([e8a57de](https://github.com/UN-OCHA/common_design/commit/e8a57de7deaacf85c0aaedcf3d9b8b142ae53898))


### Bug Fixes

* avoid abbreviations in visually-hidden logo text ([8bb19fc](https://github.com/UN-OCHA/common_design/commit/8bb19fc0f657b501a2489b6dc6e250ac3a27cfd2))
* update typography based on coordination with SCB and RW ([1fdf272](https://github.com/UN-OCHA/common_design/commit/1fdf2721381586008bbe749536ac91fe0ca08133)), [#341](https://github.com/UN-OCHA/common_design/issues/341) [#342](https://github.com/UN-OCHA/common_design/issues/342)

## [7.2.1](https://github.com/UN-OCHA/common_design/compare/v7.2.0...v7.2.1) (2022-08-01)


### Bug Fixes

* comment out no-js rule with min-width on search form ([ce41fdf](https://github.com/UN-OCHA/common_design/commit/ce41fdf641f12262ff263986c8e39869ddf78a57))
* comments and use transparent border ([d50dd0e](https://github.com/UN-OCHA/common_design/commit/d50dd0e8489d230204cb7742fa072ec125748ef2))
* refine first and second level active menu item styles when javascript is disabled. ([959f31c](https://github.com/UN-OCHA/common_design/commit/959f31c4be07e951892a720c23145e0fbcd9f365))
* remove min-width from search form, in favour of element size ([360878c](https://github.com/UN-OCHA/common_design/commit/360878c7325ab421ac0475a156f5fafeb750de9b))
* remove separators from menu items for better visual cohesion when js is disabled ([7e7ebdf](https://github.com/UN-OCHA/common_design/commit/7e7ebdf173463abd365e9a705e03424ece00784e))

## [7.2.0](https://github.com/UN-OCHA/common_design/compare/v7.1.0...v7.2.0) (2022-07-04)


### Features

* **cd-article:** adopt --brand colors ([456b401](https://github.com/UN-OCHA/common_design/commit/456b4015a8d2ee7ab52accab7f6e266704eb737d))
* **cd-bleed:** adopt --brand colors ([bc9dcf1](https://github.com/UN-OCHA/common_design/commit/bc9dcf146f150004be6cbf423c6eec789104fe29))
* **cd-byline:** adopt --brand colors ([be9a448](https://github.com/UN-OCHA/common_design/commit/be9a4486ead810b6f70a4ddc2fab00400fa10498))
* **cd-card:** adopt --brand colors ([94265de](https://github.com/UN-OCHA/common_design/commit/94265dec0fa3c01f6329e8bc3fcb9c1c4ff4bf4c))
* **cd-date:** adopt --brand colors ([3b6e1be](https://github.com/UN-OCHA/common_design/commit/3b6e1be3c86a34d0df84b925e8e6301bcd4e28b4))
* **cd-dropbutton:** adopt --brand colors ([204a3de](https://github.com/UN-OCHA/common_design/commit/204a3de37792d80c35e30688e8b2e7ea8fe2a557))
* **cd-facets:** adopt --brand colors ([3b4a1b2](https://github.com/UN-OCHA/common_design/commit/3b4a1b225f06a5e2b97275e7c917730ae3879cc0))
* **cd-figure-list:** adopt --brand colors ([393115e](https://github.com/UN-OCHA/common_design/commit/393115e5b2150fb16baf986cc61f9269939a9b88))
* **cd-filter:** adopt --brand colors ([b744f94](https://github.com/UN-OCHA/common_design/commit/b744f94034e6586b148367cdbca2e3c2454b239a))
* **cd-footer:** adopt --brand colors ([6bfb536](https://github.com/UN-OCHA/common_design/commit/6bfb536b0729cfb851c4b819ad3c92da7b29c11c))
* **cd-form:** adopt --brand colors ([d3d0cd5](https://github.com/UN-OCHA/common_design/commit/d3d0cd5bb88c29323b2e5026f9bab22b1d4d41c6))
* **cd-header:** adopt --brand colors ([3fea3aa](https://github.com/UN-OCHA/common_design/commit/3fea3aab772deb1b8ceff0cfd437bee277b47a5a))
* **cd-layout:** adopt --brand colors ([fdc5e54](https://github.com/UN-OCHA/common_design/commit/fdc5e547b45e3897a4e693f1d4a3fcd373937d06))
* **cd-link-list:** adopt --brand colors ([c0a16ce](https://github.com/UN-OCHA/common_design/commit/c0a16ce0adef2b95ff31aca7fc4dc42897d35795))
* **cd-page-title:** adopt --brand colors ([a53a8c8](https://github.com/UN-OCHA/common_design/commit/a53a8c885e929e899a41b43a87ca29e39c5d442f))
* **cd-pagination:** adopt --brand colors ([2dbc069](https://github.com/UN-OCHA/common_design/commit/2dbc0696a9071d9f8cb703f3052faaca343eced0))
* **cd-read-more:** adopt --brand colors ([26a5729](https://github.com/UN-OCHA/common_design/commit/26a5729ce2c1922ed012e9d40fba8fe5458726cb))
* **cd-social-links:** adopt --brand colors ([5950744](https://github.com/UN-OCHA/common_design/commit/5950744c79f141544ff563b3db8eca78ff6cf0e3))
* **cd-styled-list:** adopt --brand colors ([2725ec2](https://github.com/UN-OCHA/common_design/commit/2725ec276e29299fc49281c190a6b4f6bddbaa52))
* **cd-table:** adopt --brand colors ([f2e5e35](https://github.com/UN-OCHA/common_design/commit/f2e5e3516d3240e45aec1611b370e878339fb5c3))
* **cd-teaser:** adopt --brand colors ([4ddd405](https://github.com/UN-OCHA/common_design/commit/4ddd405356dbc5ccb64af43c0de800d8d4ee7955))
* **cd-title-list:** adopt --brand colors ([f7a6fcf](https://github.com/UN-OCHA/common_design/commit/f7a6fcf36b82c2c965161e3a8aaa2893753fe6d4))
* **cd-toc:** adopt --brand colors ([ea9d241](https://github.com/UN-OCHA/common_design/commit/ea9d241b4f6754e8f8ce3763bf0ded3391477fac))
* **styleguide:** adopt --brand colors ([94a9489](https://github.com/UN-OCHA/common_design/commit/94a94892835b085ac69567db73d9b78dbaa733c0))


### Bug Fixes

* **cd-form:** adopt --brand colors ([78a94c5](https://github.com/UN-OCHA/common_design/commit/78a94c5fb682fbceb41fde41640efcebabb6c416))
* namespace the embeds so they do not conflict with sub theme overrides ([b79fc99](https://github.com/UN-OCHA/common_design/commit/b79fc99c703b80be7f273833fdf36c9df9c8c58d))
* remove --cd-primary and --cd-primary--dark CSS Vars ([6476881](https://github.com/UN-OCHA/common_design/commit/6476881da7ecc50b94ded9d1cb11f9a9aac86803))

## [7.1.0](https://github.com/UN-OCHA/common_design/compare/v7.0.1...v7.1.0) (2022-06-29)


### Features

* Add theme settings to enable multilingual fonts via Drupal Libraries ([9080e25](https://github.com/UN-OCHA/common_design/commit/9080e25e107c70a444ec9a04cf535e1b4421eee3))
* visual indicator for unpublished nodes ([9329a2f](https://github.com/UN-OCHA/common_design/commit/9329a2fa89f0c903a7d0295f0e4464983cd2b18a))


### Bug Fixes

* CD Button applies --brand colors as default ([c91bb03](https://github.com/UN-OCHA/common_design/commit/c91bb03b7549b97feeee5359a242dacb51da0673))
* remove pesky dash that was causing errors ([d5742c4](https://github.com/UN-OCHA/common_design/commit/d5742c499be787df49b72df45cea6698adc29f55))
* remove the new variable that was created in this branch ([478253b](https://github.com/UN-OCHA/common_design/commit/478253ba5fcddc6faba6e2653160906ef660c3a5))
* update default --brand color in base-theme ([84021df](https://github.com/UN-OCHA/common_design/commit/84021df9e3114c3d0c44374ccb69eabcfb996852))

## [7.0.1](https://github.com/UN-OCHA/common_design/compare/v7.0.0...v7.0.1) (2022-04-26)


### Bug Fixes

* **a11y:** add focusable and aria-hidden attributes to search submit button svg to remove from accessibility tree ([cbc8782](https://github.com/UN-OCHA/common_design/commit/cbc87827f186879401e08b569f27627645419d9d))
* **a11y:** replace display none with max-width mixin for search button label to visually hide on mobile ([df79789](https://github.com/UN-OCHA/common_design/commit/df797896dc82d6db4a861ad1c81db9b8d39f2777))
* **a11y:** set text colour for visually hidden block headings to pass contrast ([94da5fa](https://github.com/UN-OCHA/common_design/commit/94da5faa7ad45a9d761e0404c12b0314636d0257))
* add accurate unocha social media links to replace placeholder hashes ([52cfb58](https://github.com/UN-OCHA/common_design/commit/52cfb58e535f7577c8d79990f5b2cabe2d058f85))
* add id to menu item anchors only if they have children to prevent duplicate ids on children ([cc1cc81](https://github.com/UN-OCHA/common_design/commit/cc1cc81d756c665c901f7ba60a9fbc698d79b5f4))
* ensure proper ID hierarchy in help menu template ([1565cdc](https://github.com/UN-OCHA/common_design/commit/1565cdccb32262c75a1b3ad600785b8a1391fabe))
* ensure proper ID hierarchy in main menu template ([6b33790](https://github.com/UN-OCHA/common_design/commit/6b33790fab5f9b43971abe6d4047f5fc0d7c7668))
* ensure proper ID hierarchy in user menu template ([e45b493](https://github.com/UN-OCHA/common_design/commit/e45b4935a59608a9231b4c1055bd914c358ebcfe))

## [7.0.0](https://github.com/UN-OCHA/common_design/compare/v6.0.0...v7.0.0) (2022-04-21)


### ⚠ BREAKING CHANGES

* **sass:** The sub-theme no longer uses Sass by default. All properties that were being overridden by sub-theme Sass are now folded into the base-theme, and instead you can use the `css/brand.css` file in the sub-theme to control your website branding.
* **icons:** The icon SVG sprite is included via a template rather than a hook. If you've customized your icon sprite, you'll need to reconfigure the sub-theme to take advantage of the template instead of `hook_preprocess_html()`.

### Features

* **branding:** Created a CSS file dedicated to site branding. You can control all site branding using five CSS Vars. ([2224bf8](https://github.com/UN-OCHA/common_design/commit/2224bf8d9de864f031d9242d903af2e8a4cc1e57))
* **icons:** include icon svg sprite via a template rather than a hook ([96cf1f7](https://github.com/UN-OCHA/common_design/commit/96cf1f7ca6cc8cbae72caae025b7a19158554d94))


## [6.0.0](https://github.com/UN-OCHA/common_design/compare/v5.1.0...v6.0.0) (2022-03-04)


### ⚠ BREAKING CHANGES

* **deps:** All implementations that receive updates after this commit will need to support **node.js 16.13.2 LTS** or higher.
* **deps:** stylelint@14 was adopted to keep up with Drupal 9 core, and the release had several major changes. It's possible that CD implementations which previously passed the linter will suddenly contain warnings or errors.

### Features

* **forms:** provide styling for common form elements ([#254](https://github.com/UN-OCHA/common_design/pull/254))
* **team:** CD-000 add conventional commits package ([#283](https://github.com/UN-OCHA/common_design/pull/283))


### Bug Fixes

* on largest breakpoint, make room for potentially long site names ([86d071c](https://github.com/UN-OCHA/common_design/commit/86d071c5e431755165f679aaad9c96b648f6ecc6))
* **security:** upgrade to node.js LTS 16.13.2 ([3925e3d](https://github.com/UN-OCHA/common_design/commit/3925e3d28d0e6d04dd0341319bedf26a205c50cd))


## [5.1.0](https://github.com/UN-OCHA/common_design/compare/v5.0.1...v5.1.0) (2021-11-18)

### Features

* Add conventional commits package to automate CHANGELOG #283
* Add theme functions and template overrides for Node, Taxonomy term and user edit forms
* Add template overrides for the date field, dataset table, media library item, radio element, and the generic form element, to add classes and attach CD libraries
* Expand form and field visual styles in `cd-form` component and add some basic layout rules for some elements like the Image and File fields.
* Add `cd-dropbutton` component that extends core library, for Drupal actions like reverting and deleting revisions


### Bug Fixes

* Expand README section about testing
* Expand `form alter` function to add CD button variant classes for Cancel and Delete buttons
* Expand `cd-form` README to explain the use of CubeCSS and `cd-flow` component to adjust vertical rhythm for forms
* **security:** Dependency updates for json-schema
* **security:** Update xmldom package published to npm instead of github
* **security:** Upgrade core-js


## [5.0.2](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.2) (2021-12-06)

### Added
- Add `ch` unit to `unit-allowed-list` stylelint configuration

### Changed
- Mention D9 in README
- Fix some links in `CONTRIBUTING.md`

### Removed
- Remove `unit-whitelist` from stylelint configuration as it is deprecated
- Remove `plugin/no-browser-hacks` from sub theme stylelint configuration. See [issues #265](https://github.com/UN-OCHA/common_design/issues/265).
The base theme and sub theme are now tailored for >= Drupal 9.2

### Security
- Dependency updates for nth-check


## [5.0.1](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.1) (2021-09-16)

### Security
- Dependency update for set-value


## [5.0.0](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.0) (2021-09-13)

### Added
- Add admin and external link SVG icons to SVG icon sprite
- Add and develop Pull Request template
- Add Release Notes template to CONTRIBUTING.md
- Add Arabic, French, and Spanish translation files for CD Header and Footer user interface strings
- Add `corejs` version to babel config to prevent warnings during `npm run e2e`

### Changed
- Replace external js file with local file for CSS custom property ponyfill
- Add missing accessibility-related attributes on SVG icons in the sub theme social media partial
- node package `dependencies` and `devDependencies` reshuffle to speed up builds and ensure `sass:build` works when `NODE_ENV=production`

### Removed
- `stylelint-no-browser-hacks` plugin, also removed from D9. See [#265](https://github.com/UN-OCHA/common_design/issues/265)

### Fixed
- Fix page title logic to limit the use of the page title to node canonical and preview pages
- Use `form_id` in theme_suggestions_form_alter hook to provide proper theme suggestions
### Security
- Dependency updates for xmldom
- Dependency updates for axios


## [4.1.1](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.1) (2021-07-23)

### Fixed
- Fix cd-filter component display for IE11 by reinstating previously removed rule to force display when CSS custom
properties are not supported.

## [4.1.0](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.0) (2021-07-22)

### Changed
- Adjust image path in manifest file
- Add details about Manifest and PWA to README
- Add libraries for advanced and multilanguage fonts and README updates to describe usage.
- Add CSS custom property to set the grid size for `cd-image-grid` component
- Move `browserconfig.xml` into sub theme, and adjust image path.

### Fixed
- Fix Views `views-view-grid.html.twig` template override so it adds the `cd-grid` component only when the alignment
setting from Views UI is set to "horizontal".

### Removed
- Remove Roboto Condensed and Slab fonts and Noto Sans for multilingual from being included by default in `styles.css`.
- Remove grid partial previously included in `styles.scss` as it is not in use.

## [4.0.6](https://github.com/UN-OCHA/common_design/releases/tag/v4.0.6) (2021-06-16)

### Added
- Theme hook suggestions for Views Display

### Changed
- Improve e2e tests to run in TravisCI
- Move sample.sql for e2e tests in TravisCI outside of theme repo
- Update URL for HID Services in OCHA Services menu and in tests
- Component's Review continued, see `components/README.md` for status

### Fixed
- Focus link colour in cd-tags component
- Cursor for cd-button component

### Security
- Dependabot Bump `ws` from 7.4.4 to 7.4.6
- `css-what` as dev dependency for svg-sprite
- `trim-newlines` for stylelint-no-browser-hacks
