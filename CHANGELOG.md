# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.2.1"></a>
## [1.2.1](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v1.2.0...v1.2.1) (2018-02-24)


### Bug Fixes

* **Rule:** out sync activeConditions-offersList-activeOffers ([fc56b4d](https://github.com/taverasmisael/CPACash-campaign-creator/commit/fc56b4d))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v1.1.0...v1.2.0) (2018-02-24)


### Features

* **CampaignMessage:** handle saving response in a better way ([620e71e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/620e71e))
* **GetIdFromURL:** now the campaign id is taken from location.search ([435ce9c](https://github.com/taverasmisael/CPACash-campaign-creator/commit/435ce9c))
* **SaveCampaign:** complete the saving proccess ([bd70517](https://github.com/taverasmisael/CPACash-campaign-creator/commit/bd70517))
* **Snackbar:** abstract snackbar component to display messages ([c4bf10c](https://github.com/taverasmisael/CPACash-campaign-creator/commit/c4bf10c))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v1.0.0...v1.1.0) (2018-02-22)


### Bug Fixes

* **compatibility:** move react-select styles to root component ([0decdbd](https://github.com/taverasmisael/CPACash-campaign-creator/commit/0decdbd))
* **perf:**  Autocomplete adjust inline-styles for Option component ([8abfae3](https://github.com/taverasmisael/CPACash-campaign-creator/commit/8abfae3))
* **PropType:** change PropType=>propType ([9753c46](https://github.com/taverasmisael/CPACash-campaign-creator/commit/9753c46))


### Features

* **App:** lazy load App subcomponents and services ([e76d100](https://github.com/taverasmisael/CPACash-campaign-creator/commit/e76d100))
* **AsyncLoading:** create to display while loading async components ([1028f31](https://github.com/taverasmisael/CPACash-campaign-creator/commit/1028f31))
* **lib:** install react-loadable ([ad9732f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ad9732f))
* **LoadbleLists:** load async components used in lists ([fb5505e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/fb5505e))
* **Loading:** split component and use Loadable to load parts ([b00e505](https://github.com/taverasmisael/CPACash-campaign-creator/commit/b00e505))
* **pastDelay:** ensure the delay time has passed before show loading ([fa38f34](https://github.com/taverasmisael/CPACash-campaign-creator/commit/fa38f34))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.8.0...v1.0.0) (2018-02-21)


### Bug Fixes

* **Autocomplete:** never send null as a value, send empty string instead ([9b7917f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/9b7917f))
* **filepath:** update path to models ([c80925e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/c80925e))
* **uniqueKey:** ensuere unique keys in SelectItems ([91b4bd8](https://github.com/taverasmisael/CPACash-campaign-creator/commit/91b4bd8))


### Features

* **api:** implement error catch at api level ([c5413ca](https://github.com/taverasmisael/CPACash-campaign-creator/commit/c5413ca))
* **api:** use different URLs edit and create ([f299fd1](https://github.com/taverasmisael/CPACash-campaign-creator/commit/f299fd1))
* **App:** move to root of src folder, implement services ([8c8083f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/8c8083f))
* **Autocomplete:** create using react-select ([366f8aa](https://github.com/taverasmisael/CPACash-campaign-creator/commit/366f8aa))
* **Autocomplete:** implement in condition and fix onChange behaviour ([896c365](https://github.com/taverasmisael/CPACash-campaign-creator/commit/896c365))
* **campaign:** create model for Campaign. Split rules and defaultOffers ([4f55e3a](https://github.com/taverasmisael/CPACash-campaign-creator/commit/4f55e3a))
* **CampaignRules:** pass down rules to hydratate other components ([ea95d9e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ea95d9e))
* **condition:** add getters for different conditions ([3d0dd39](https://github.com/taverasmisael/CPACash-campaign-creator/commit/3d0dd39))
* **Container:** add canAdd prop to enable createButton ([6dfba16](https://github.com/taverasmisael/CPACash-campaign-creator/commit/6dfba16))
* **defaultOffers:** map defaultOffers ([871187b](https://github.com/taverasmisael/CPACash-campaign-creator/commit/871187b))
* **initData:** complete initData get and mapping when creating ([d1b7939](https://github.com/taverasmisael/CPACash-campaign-creator/commit/d1b7939))
* **lib:** add normalizr to normalize the api response ([16f86e4](https://github.com/taverasmisael/CPACash-campaign-creator/commit/16f86e4))
* **lib:** install ramda ([a47b23f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/a47b23f))
* **move:** move models to folder in src root ([e72cdc2](https://github.com/taverasmisael/CPACash-campaign-creator/commit/e72cdc2))
* **MultiSelect:** cache listKeys on multiselect ([39a8630](https://github.com/taverasmisael/CPACash-campaign-creator/commit/39a8630))
* **NormalizeConditions:** create new class to handle conditionsList ([1868553](https://github.com/taverasmisael/CPACash-campaign-creator/commit/1868553))
* **Normalizer:** normalize conditions ([cd1b107](https://github.com/taverasmisael/CPACash-campaign-creator/commit/cd1b107))
* **oferrs:**  create entry point to load offers. ([6c1486c](https://github.com/taverasmisael/CPACash-campaign-creator/commit/6c1486c))
* **offers:** make rules load their offers on condition change ([18c1580](https://github.com/taverasmisael/CPACash-campaign-creator/commit/18c1580))
* **refact:** App move request to separated async method ([08f642e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/08f642e))
* **refact:** Loading component now can also reflect error and retry ([7470a30](https://github.com/taverasmisael/CPACash-campaign-creator/commit/7470a30))
* **refact:** move mapOffers to normalizer and transform to point-free ([e1330c0](https://github.com/taverasmisael/CPACash-campaign-creator/commit/e1330c0))
* **refact:** require instance of Conditions for conditionsList ([ca13772](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ca13772))
* **refact:** use autocomplete for offers ([160fc08](https://github.com/taverasmisael/CPACash-campaign-creator/commit/160fc08))
* **refact:** use virtualized select for autocomplete component ([d363b8f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/d363b8f))
* **rule:**  create Rule class and implement it ([91010eb](https://github.com/taverasmisael/CPACash-campaign-creator/commit/91010eb))
* **Select:** use 'text' prop instead of value ([c665322](https://github.com/taverasmisael/CPACash-campaign-creator/commit/c665322))
* **services:** create app and mapper and initdata ([a8e9e1c](https://github.com/taverasmisael/CPACash-campaign-creator/commit/a8e9e1c))
* **subvertical:** use subVertical instead ([31e5f31](https://github.com/taverasmisael/CPACash-campaign-creator/commit/31e5f31))


### BREAKING CHANGES

* **offers:** now the rules are the responsible for loading their offers and reseting the activeOffers each time the conditions are changed
* **Select:** now the Select and MultiSelect components use the text prop instead of value



<a name="0.8.0"></a>
# [0.8.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.7.1...v0.8.0) (2018-02-15)


### Features

* **FileExtensions:** use jsx for components ([ad248a3](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ad248a3))
* **Loading:** create loading component and implement it ([1a65a2d](https://github.com/taverasmisael/CPACash-campaign-creator/commit/1a65a2d))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.7.0...v0.7.1) (2018-02-15)



<a name="0.7.0"></a>
# [0.7.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.6.0...v0.7.0) (2018-02-15)


### Features

* **canSave:** add condition to activate save buttn ([cd782be](https://github.com/taverasmisael/CPACash-campaign-creator/commit/cd782be))
* **DefaultCondition:** create functionality and styles ([1f1b3e9](https://github.com/taverasmisael/CPACash-campaign-creator/commit/1f1b3e9))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.5.1...v0.6.0) (2018-02-15)


### Bug Fixes

* **style:** elevatin in CampaignSettings ([8455c18](https://github.com/taverasmisael/CPACash-campaign-creator/commit/8455c18))


### Features

* **CampaignSettings:** add onSave prop ([a63bbe1](https://github.com/taverasmisael/CPACash-campaign-creator/commit/a63bbe1))
* **CampaignSettings:** complete functionality and styles ([5dc3f0f](https://github.com/taverasmisael/CPACash-campaign-creator/commit/5dc3f0f))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.5.0...v0.5.1) (2018-02-15)


### Bug Fixes

* **state:** close RuleLists and fix setState in App ([2004f5c](https://github.com/taverasmisael/CPACash-campaign-creator/commit/2004f5c))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.4.0...v0.5.0) (2018-02-15)


### Bug Fixes

* **styles:** adjust styles for Condition and EP ([1d5cdbb](https://github.com/taverasmisael/CPACash-campaign-creator/commit/1d5cdbb))
* **styles:** grid container spacing and epDetails background ([6fe2291](https://github.com/taverasmisael/CPACash-campaign-creator/commit/6fe2291))


### Features

* **Conditions:** lift up the state to the rule ([d854c97](https://github.com/taverasmisael/CPACash-campaign-creator/commit/d854c97))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.3.0...v0.4.0) (2018-02-14)


### Features

* **Containers:** create a global container and implement it ([9eee2a6](https://github.com/taverasmisael/CPACash-campaign-creator/commit/9eee2a6))
* **DeleteButton:** create component. Use it for delete rules ([7781f45](https://github.com/taverasmisael/CPACash-campaign-creator/commit/7781f45))
* **Rule:** create/implementecomponent. Test save state to localStorage ([9881547](https://github.com/taverasmisael/CPACash-campaign-creator/commit/9881547))
* **RulesContainer:** use ep instead of the traditional mapper ([f77b030](https://github.com/taverasmisael/CPACash-campaign-creator/commit/f77b030))
* **RulesList:** create and implement component ([60080e7](https://github.com/taverasmisael/CPACash-campaign-creator/commit/60080e7))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.2.0...v0.3.0) (2018-02-13)


### Bug Fixes

* **Condition:** conditions id more unique with UUID ([85fdbcf](https://github.com/taverasmisael/CPACash-campaign-creator/commit/85fdbcf))


### Features

* **lib:** add uuid ([b7e6e95](https://github.com/taverasmisael/CPACash-campaign-creator/commit/b7e6e95))
* **OffersContainer:** create/implement OffersContainer ([ed84906](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ed84906))
* **OffersList:** create component and prepare it to lift up the state ([4a9d011](https://github.com/taverasmisael/CPACash-campaign-creator/commit/4a9d011))
* **styles:** add styles for ListContainer ([85cf504](https://github.com/taverasmisael/CPACash-campaign-creator/commit/85cf504))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.1.2...v0.2.0) (2018-02-11)


### Bug Fixes

* **Condition:** group right side elements ([0f25adc](https://github.com/taverasmisael/CPACash-campaign-creator/commit/0f25adc))
* **typo:** page title ([59eee0b](https://github.com/taverasmisael/CPACash-campaign-creator/commit/59eee0b))


### Features

* **Condition:** add support for deleting and id ([cfa7adb](https://github.com/taverasmisael/CPACash-campaign-creator/commit/cfa7adb))
* **Condition:** create basic styles/functionality ([ceb423e](https://github.com/taverasmisael/CPACash-campaign-creator/commit/ceb423e))
* **ConditionList:** complete and integrate with Condition component ([d736471](https://github.com/taverasmisael/CPACash-campaign-creator/commit/d736471))
* **ConditionsContainer:** create conditions container ([915e872](https://github.com/taverasmisael/CPACash-campaign-creator/commit/915e872))
* **EmptyComponent:** implement and fix some styles for Condition ([2d7b1c8](https://github.com/taverasmisael/CPACash-campaign-creator/commit/2d7b1c8))
* **EmptyContainer:** create HOC for list when empty ([70c99ce](https://github.com/taverasmisael/CPACash-campaign-creator/commit/70c99ce))
* **lib:** add change-case and just-compare ([5cbacf6](https://github.com/taverasmisael/CPACash-campaign-creator/commit/5cbacf6))
* **MultiSelect:** create MultiSelect with Chips and Checkbox ([cb837c4](https://github.com/taverasmisael/CPACash-campaign-creator/commit/cb837c4))
* **style:** add aproximated width of the real container ([30a3c19](https://github.com/taverasmisael/CPACash-campaign-creator/commit/30a3c19))
* **styles:** add styles for missing components ([81b3c1d](https://github.com/taverasmisael/CPACash-campaign-creator/commit/81b3c1d))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/taverasmisael/CPACash-campaign-creator/compare/v0.1.1...v0.1.2) (2018-02-10)



<a name="0.1.1"></a>
## 0.1.1 (2018-02-09)
