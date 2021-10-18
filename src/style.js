const styles = 
`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.adyen-checkout__spinner__wrapper {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center
}

.adyen-checkout__spinner__wrapper--inline {
	height: auto;
	display: inline-block;
	margin-right: 8px
}

.adyen-checkout__spinner {
	border-radius: 50%;
	height: 43px;
	width: 43px;
	border: 3px solid #06f;
	border-top-color: transparent;
	-webkit-animation: rotateSpinner 1.5s linear infinite;
	animation: rotateSpinner 1.5s linear infinite
}

.adyen-checkout__spinner--large {
	height: 43px;
	width: 43px
}

.adyen-checkout__spinner--small {
	height: 16px;
	width: 16px;
	border-width: 2px
}

.adyen-checkout__spinner--medium {
	height: 28px;
	width: 28px
}

@-webkit-keyframes rotateSpinner {
	0% {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(1turn)
	}
}

@keyframes rotateSpinner {
	0% {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(1turn)
	}
}

.adyen-checkout__button {
	background: #233660;
	border: 0;
	border-radius: 6px;
	color: #fff;
	cursor: pointer;
	font-size: 1em;
	font-weight: 500;
	height: 48px;
	margin: 0;
	padding: 15px;
	text-decoration: none;
	transition: background .3s ease-out, box-shadow .3s ease-out;
	width: 100%
}

.adyen-checkout__button:focus {
	box-shadow: 0 0 0 2px #99c2ff;
	outline: 0
}

.adyen-checkout__button:hover {
	box-shadow: 0 0, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14)
}

.adyen-checkout__button:hover:focus {
	box-shadow: 0 0 0 2px #99c2ff, 0 3px 4px rgba(0, 15, 45, .2)
}

.adyen-checkout__button:disabled,
.adyen-checkout__button:disabled:hover {
	box-shadow: none;
	cursor: not-allowed;
	opacity: .4;
	-webkit-user-select: all;
	-moz-user-select: all;
	user-select: all
}

.adyen-checkout__button.adyen-checkout__button--loading {
	background: #687282;
	box-shadow: none;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__button.adyen-checkout__button--pay {
	margin-top: 24px
}

.adyen-checkout__button.adyen-checkout__button--standalone {
	margin-top: 0
}

.adyen-checkout__button.adyen-checkout__button--inline {
	display: block;
	width: auto;
	height: auto;
	padding: 10px 8px;
	font-size: .81em
}

.adyen-checkout__button.adyen-checkout__button--ghost {
	background: none;
	border: 0;
	color: #00112c
}

.adyen-checkout__button.adyen-checkout__button--ghost:hover {
	background: #f7f8f9;
	box-shadow: none
}

.adyen-checkout__button.adyen-checkout__button--ghost:active {
	background: #e6e9eb;
	box-shadow: none
}

.adyen-checkout__button.adyen-checkout__button--secondary {
	padding: 10px 12px;
	background: rgba(0, 102, 255, .1);
	border: 1px solid transparent;
	color: #06f
}

.adyen-checkout__button.adyen-checkout__button--secondary:hover {
	background: rgba(0, 102, 255, .2);
	box-shadow: none
}

.adyen-checkout__button.adyen-checkout__button--secondary:active,
.adyen-checkout__button.adyen-checkout__button--secondary:active:hover {
	background: rgba(0, 102, 255, .3);
	box-shadow: none
}

.adyen-checkout__button.adyen-checkout__button--link {
	background: transparent;
	border: 1px solid transparent;
	color: #06f;
	font-weight: 400;
	border-radius: 3px;
	padding: 2px
}

.adyen-checkout__button.adyen-checkout__button--link:hover {
	background: transparent;
	text-decoration: underline;
	box-shadow: none
}

.adyen-checkout__button.adyen-checkout__button--completed,
.adyen-checkout__button.adyen-checkout__button--completed:active,
.adyen-checkout__button.adyen-checkout__button--completed:active:hover,
.adyen-checkout__button.adyen-checkout__button--completed:hover {
	background: #0abf53;
	color: #fff
}

.adyen-checkout__button.adyen-checkout__button--completed .adyen-checkout__button__icon {
	filter: brightness(0) invert(1)
}

.adyen-checkout__button__content {
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center
}

.adyen-checkout__button__icon {
	margin-right: 12px
}

.adyen-checkout__button__text {
	display: block;
	justify-content: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}

.adyen-checkout__button .adyen-checkout__spinner {
	border-color: transparent #fff #fff
}

.adyen-checkout__fieldset {
	display: block;
	padding-bottom: 8px;
	width: 100%
}

.adyen-checkout__fieldset:last-of-type {
	padding-bottom: 0
}

.adyen-checkout__fieldset+.adyen-checkout__fieldset {
	margin-top: 16px
}

.adyen-checkout__fieldset__title {
	color: #687282;
	display: block;
	font-size: .68em;
	font-weight: 700;
	letter-spacing: 1px;
	margin: 0;
	padding: 0 0 12px;
	text-transform: uppercase
}

.adyen-checkout__field-group,
.adyen-checkout__fieldset__fields {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%
}

.adyen-checkout__field-group:last-of-type .adyen-checkout__field {
	margin-bottom: 0
}

.adyen-checkout__fieldset--readonly .adyen-checkout__fieldset__fields {
	color: #00112c;
	font-size: .81em;
	line-height: 19px;
	margin: 0
}

.adyen-checkout__field {
	display: block;
	margin-bottom: 16px;
	width: 100%
}

.adyen-checkout__field:last-of-type {
	margin-bottom: 0
}

.adyen-checkout__label {
	display: block
}

.adyen-checkout__helper-text,
.adyen-checkout__label__text {
	font-family: 'Open Sans';
	color: #262626;
	display: block;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 22px;
	padding-bottom: 5px
}

.adyen-checkout__helper-text {
	color: #687282
}

.adyen-checkout__label__text {
	transition: color .1s ease-out;
	display: block;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap
}

.adyen-checkout__error-text {
	display: flex;
	color: #d10244;
	font-weight: 400;
	margin-top: 4px;
	font-size: .75em;
	align-items: center
}

.adyen-checkout__radio_group+.adyen-checkout-input__inline-validation {
	display: none
}

.adyen-checkout__radio_group__input {
	opacity: 0;
	position: absolute
}

.adyen-checkout__radio_group__label {
	padding-bottom: 0;
	padding-left: 24px;
	position: relative;
	display: block;
	color: inherit;
	font-size: .81em;
	font-weight: 400;
	line-height: 16px;
	overflow: visible
}

.adyen-checkout__label--focused .adyen-checkout__radio_group__label {
	color: inherit
}

.adyen-checkout__radio_group__label:before {
	content: "";
	position: absolute;
	background-color: #fff;
	border: 1px solid #b9c4c9;
	border-radius: 50%;
	height: 16px;
	width: 16px;
	left: 0;
	top: 0;
	transition: border-color .2s ease-out, box-shadow .2s ease-out
}

.adyen-checkout__radio_group__label:hover:before {
	border-color: #99a3ad;
	box-shadow: 0 0 0 2px #d4d9db;
	cursor: pointer
}

.adyen-checkout__radio_group__label:after {
	content: "";
	display: block;
	position: absolute;
	margin: 0 auto;
	left: 5px;
	top: 5px;
	height: 6px;
	width: 6px;
	background-color: #fff;
	border-radius: 50%;
	transform: scale(0);
	transition: transform .2s ease-out;
	box-shadow: 0 1px 1px rgba(0, 15, 45, .25)
}

.adyen-checkout__radio_group__label:hover {
	border-color: #06f;
	cursor: pointer
}

.adyen-checkout__radio_group__input:checked+.adyen-checkout__radio_group__label:before,
.adyen-checkout__radio_group__label--selected {
	background-color: #06f;
	border: 0;
	transition: all .2s ease-out
}

.adyen-checkout__radio_group__input:checked+.adyen-checkout__radio_group__label:after {
	transform: scale(1)
}

.adyen-checkout__radio_group__input:focus+.adyen-checkout__radio_group__label:before {
	border-color: #06f;
	box-shadow: 0 0 0 2px rgba(0, 102, 255, .4)
}

.adyen-checkout__radio_group__input:checked+.adyen-checkout__radio_group__label:hover:before,
.adyen-checkout__radio_group__input:checked:active+.adyen-checkout__radio_group__label:before,
.adyen-checkout__radio_group__input:checked:focus+.adyen-checkout__radio_group__label:before {
	box-shadow: 0 0 0 2px rgba(0, 102, 255, .4)
}

.adyen-checkout__radio_group__label.adyen-checkout__radio_group__label--invalid:before {
	border: 1px solid #d10244
}

.adyen-checkout__checkbox {
	display: block
}

.adyen-checkout__checkbox__label {
	position: relative;
	padding-left: 24px;
	cursor: pointer;
	display: inline-block;
	line-height: 19px;
	color: #00112c;
	font-size: .81em;
	font-weight: 400;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__checkbox__input {
	position: absolute;
	opacity: 0;
	pointer-events: none
}

.adyen-checkout__checkbox__input:checked+.adyen-checkout__checkbox__label:before {
	opacity: 1
}

.adyen-checkout__checkbox__input:checked+.adyen-checkout__checkbox__label:after {
	border: 1px solid #06f;
	background-color: #06f
}

.adyen-checkout__checkbox__input:checked:hover+.adyen-checkout__checkbox__label:after {
	box-shadow: 0 0 0 2px rgba(0, 102, 255, .4);
	border-color: #06f
}

.adyen-checkout__checkbox__input:focus+.adyen-checkout__checkbox__label:after {
	border: 1px solid #06f;
	box-shadow: 0 0 0 2px #99c2ff
}

.adyen-checkout__checkbox__input:hover:not(:focus)+.adyen-checkout__checkbox__label:after {
	border-color: #99a3ad;
	box-shadow: 0 0 0 2px #d4d9db
}

.adyen-checkout__checkbox__input+.adyen-checkout__checkbox__label:before {
	border-bottom: 1px solid transparent;
	border-right: 1px solid transparent;
	border-color: transparent #fff #fff transparent;
	border-style: solid;
	border-width: 1px 2px 2px 1px;
	border-radius: 0 2px 1px 2px;
	content: "";
	height: 11px;
	left: 1px;
	opacity: 0;
	position: absolute;
	top: 2px;
	transform: rotate(37deg);
	transform-origin: 100% 100%;
	transition: opacity .2s ease-out;
	width: 6px;
	z-index: 1
}

.adyen-checkout__checkbox__input+.adyen-checkout__checkbox__label:after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 16px;
	height: 16px;
	border-radius: 3px;
	background-color: #fff;
	border: 1px solid #b9c4c9;
	z-index: 0;
	transition: background .15s ease-out, border .05s ease-out, box-shadow .1s ease-out
}

.adyen-checkout__field--consentCheckbox {
	background: #e6e9eb;
	border: 1px solid #e6e9eb;
	border-radius: 6px;
	padding: 14px 40px 13px 14px
}

.adyen-checkout__field--consentCheckbox.adyen-checkout__field--error {
	border-color: #d10244
}

.adyen-checkout__field--consentCheckbox .adyen-checkout-input__inline-validation {
	right: -27px;
	top: 10px
}

._25j1wxcG6JMayoahR4dwTP {
	position: relative
}

.fyN7g68OwE8jYoU4M7kus {
	display: flex;
	align-items: center;
	cursor: pointer;
	justify-content: space-between
}

.fyN7g68OwE8jYoU4M7kus:after {
	position: absolute;
	content: "";
	height: 6px;
	right: 16px;
	width: 8px;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.195 6.565a1 1 0 001.6 0l2.992-3.98a1 1 0 00-.8-1.602H1.013a1 1 0 00-.8 1.6l2.983 3.982z' fill='%23687282'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: 50%
}

._3iqZCnn-31LQsexJZnNY7Y:after {
	transform: rotate(180deg)
}

.ZH972lEag_JGA8QEQO7ng {
	position: absolute;
	width: 100%;
	background: #fff;
	list-style: none;
	padding: 0;
	z-index: 1;
	margin: 0 0 50px;
	overflow-y: auto;
	display: none
}

.ZH972lEag_JGA8QEQO7ng._2WnEj5QNGxd_iZR-53o07C {
	display: block
}

._30ugZ2ebrREuog3c07S2JO {
	display: flex;
	justify-content: space-between;
	align-items: center
}

.adyen-checkout__dropdown {
	max-width: 100%;
	width: 100%;
	font-size: 1em
}

.adyen-checkout__dropdown__button {
	padding: 7px 24px 7px 12px;
	border: 1px solid #b9c4c9;
	background: #fff;
	color: #00112c;
	text-decoration: none;
	border-radius: 6px;
	outline: 0;
	width: 100%;
	font-size: 1em;
	height: 40px;
	line-height: 20px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	transition: border .2s ease-out, box-shadow .2s ease-out
}

.adyen-checkout__dropdown__button:hover {
	border-color: #99a3ad
}

.adyen-checkout__dropdown__button__icon {
	margin-right: 8px;
	margin-left: auto;
	max-width: 40px;
	height: 26px;
	border-radius: 3px
}

.adyen-checkout__dropdown__button--active,
.adyen-checkout__dropdown__button--active:hover,
.adyen-checkout__dropdown__button:active,
.adyen-checkout__dropdown__button:focus {
	border-color: #06f;
	box-shadow: 0 0 0 2px #99c2ff
}

.adyen-checkout__dropdown__button--readonly,
.adyen-checkout__dropdown__button--readonly--active,
.adyen-checkout__dropdown__button--readonly:focus,
.adyen-checkout__dropdown__button--readonly:hover {
	background: #e6e9eb;
	border-color: transparent;
	color: #00112c;
	cursor: not-allowed
}

.adyen-checkout__dropdown__button--readonly:after {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.195 6.565a1 1 0 001.6 0l2.992-3.98a1 1 0 00-.8-1.602H1.013a1 1 0 00-.8 1.6l2.983 3.982z' fill='%23B9C4C9'/%3E%3C/svg%3E")
}

.adyen-checkout__dropdown__button--invalid {
	border-color: #d10244
}

.adyen-checkout__dropdown__button__text {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis
}

.adyen-checkout__dropdown__list {
	z-index: 2;
	border-radius: 6px;
	max-height: 375px;
	box-shadow: 0 2px 7px rgba(0, 15, 45, .3)
}

.adyen-checkout__dropdown__list.adyen-checkout__dropdown__list--active {
	margin-top: 2px
}

.adyen-checkout__dropdown__element {
	padding: 8px;
	line-height: 20px;
	border: 1px solid transparent;
	word-break: break-word;
	-webkit-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
	cursor: pointer;
	font-size: .81em;
	outline: 0;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	transition: background .2s ease-out, border-color .2s ease-out
}

.adyen-checkout__dropdown__element:last-child {
	border-bottom: 0
}

.adyen-checkout__dropdown__element:active,
.adyen-checkout__dropdown__element:focus,
.adyen-checkout__dropdown__element:hover {
	background: rgba(230, 233, 235, .6)
}

.adyen-checkout__dropdown__element.adyen-checkout__dropdown__element--active {
	background: rgba(0, 102, 255, .1)
}

.adyen-checkout__dropdown__element.adyen-checkout__dropdown__element--active:active,
.adyen-checkout__dropdown__element.adyen-checkout__dropdown__element--active:focus,
.adyen-checkout__dropdown__element.adyen-checkout__dropdown__element--active:hover {
	background: rgba(0, 102, 255, .15)
}

.adyen-checkout__dropdown__element__icon {
	border-radius: 3px;
	margin-right: 8px;
	max-width: 40px;
	max-height: 26px
}

.adyen-checkout__dropdown__element__flag {
	margin-left: 8px;
	margin-right: 10px;
	max-width: 27px;
	max-height: 18px
}

.adyen-checkout__dropdown+.adyen-checkout-input__inline-validation {
	right: 32px
}

.adyen-checkout__field-wrapper {
	display: flex;
	width: 100%
}

.adyen-checkout__field--20 {
	width: 20%
}

.adyen-checkout__field--30 {
	width: 30%
}

.adyen-checkout__field--40 {
	width: 40%
}

.adyen-checkout__field--50 {
	width: 50%
}

.adyen-checkout__field--60 {
	width: 60%
}

.adyen-checkout__field--70 {
	width: 70%
}

.adyen-checkout__field--80 {
	width: 80%
}

.adyen-checkout__field--col-70 {
	width: calc(70% - 8px)
}

.adyen-checkout__field--col-30 {
	width: calc(30% - 8px)
}

.adyen-checkout__field--col-50 {
	width: calc(50% - 8px)
}

.adyen-checkout__field-wrapper>.adyen-checkout__field:first-child {
	margin-right: 8px
}

.adyen-checkout__field-wrapper>.adyen-checkout__field:nth-child(2) {
	margin-left: 8px
}

.adyen-checkout__field-wrapper:last-of-type>.adyen-checkout__field {
	margin-bottom: 0
}

.adyen-checkout__input {
	color: #718096;
	font-size: 0.875rem;
	font-family: 'Open Sans';
	display: block;
	height: 40px;
	background: #fff;
	border: 1px solid #718096;	
	border-radius: 8px;
	padding: 5px 8px;
	position: relative;
	outline: none;
	width: 100%;
	transition: border .2s ease-out, box-shadow .2s ease-out;
}

.input-field {
	color: #718096;
	font-size: 0.875rem;
	font-family: 'Open Sans';
}

.adyen-checkout__input:required {
	box-shadow: none
}

.adyen-checkout__input--disabled,
.adyen-checkout__input[readonly] {
	background: #e6e9eb;
	border-bottom-color: #e6e9eb
}

.adyen-checkout__input--disabled:hover {
	border-bottom-color: #e6e9eb
}

.adyen-checkout__input-wrapper {
	position: relative;
	display: block
}

.adyen-checkout__input-wrapper--block {
	display: block
}

.adyen-checkout-input__inline-validation {
	position: absolute;
	width: 16px;
	height: 16px;
	top: 50%;
	transform: translateY(-50%);
	right: 14px
}

.adyen-checkout-input__inline-validation--valid {
	color: #0abf53
}

.adyen-checkout__input::-moz-placeholder {
	color: #b9c4c9;
	font-weight: 200
}

.adyen-checkout__input:-ms-input-placeholder {
	color: #b9c4c9;
	font-weight: 200
}

.adyen-checkout__input::placeholder {
	color: #b9c4c9;
	font-weight: 200
}

.adyen-checkout__input--date {
	padding-right: 30px
}

.adyen-checkout__input[readonly],
.adyen-checkout__input[readonly]:hover {
	background-color: #e6e9eb;
	border-bottom-color: transparent;
	color: #687282;
	cursor: default
}

.adyen-checkout__open-invoice .adyen-checkout__field--gender .adyen-checkout__radio_group {
	display: flex
}

.adyen-checkout__open-invoice .adyen-checkout__field--gender .adyen-checkout__radio_group>label {
	margin-right: 20px
}

.adyen-checkout__open-invoice .adyen-checkout__fieldset--billingAddress {
	padding-bottom: 8px
}

.adyen-checkout__open-invoice .adyen-checkout__fieldset--deliveryAddress {
	margin-top: 24px;
	padding-bottom: 8px
}

.adyen-checkout__open-invoice .adyen-checkout__input--separateDeliveryAddress {
	margin-bottom: 0
}

.adyen-checkout__open-invoice .adyen-checkout__radio_group {
	display: flex;
	margin: 8px 0
}

.adyen-checkout__open-invoice .adyen-checkout__radio_group__input-wrapper {
	margin-right: 16px
}

.adyen-checkout__open-invoice .adyen-checkout__radio_group__input-wrapper:last-child {
	margin: 0
}

.adyen-checkout__open-invoice .adyen-checkout__field--consentCheckbox {
	margin-top: 22px
}

.adyen-checkout__input--separateDeliveryAddress+.adyen-checkout__checkbox__label {
	margin-top: 16px
}

.adyen-checkout__amazonpay__button {
	margin: auto
}

.adyen-checkout__amazonpay .adyen-checkout__button--ghost {
	display: block;
	margin: 8px auto 0;
	width: auto
}

@supports (-webkit-appearance:-apple-pay-button) {
	._1dIj5OBNHw-_NvtfqKwJuZ {
		display: inline-block;
		-webkit-appearance: -apple-pay-button;
		cursor: pointer
	}
	._3kQn_urayEY_qN10JCDZ8J {
		-apple-pay-button-style: #000
	}
	.Crk4OPiucf8byDY_XkCtZ {
		-apple-pay-button-style: #fff
	}
	._3QQ9y6Oiu8jxi0RjuzlwKE {
		-apple-pay-button-style: white-outline
	}
	._3LOpY03tW2ejIa0YfQeLkj {
		-apple-pay-button-type: plain
	}
	._1wFWUnhKvJFkhCm-mH9n9C {
		-apple-pay-button-type: buy
	}
	._302hppXqBoqpUJHMjj1VSS {
		-apple-pay-button-type: donate
	}
	._36UYjdq-NOAy6pxtkAM6ef {
		-apple-pay-button-type: check-out
	}
	._1bi-_fx2SBWe0CAAzJEPGa {
		-apple-pay-button-type: book
	}
	.c0ymV02fsvcG3rtm3Jwyn {
		-apple-pay-button-type: subscribe
	}
}

@supports not (-webkit-appearance:-apple-pay-button) {
	._1dIj5OBNHw-_NvtfqKwJuZ {
		display: inline-block;
		background-size: 100% 60%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 5px;
		padding: 0;
		box-sizing: border-box;
		min-width: 200px;
		min-height: 32px;
		max-height: 64px
	}
	._3kQn_urayEY_qN10JCDZ8J {
		background-image: -webkit-named-image(apple-pay-logo-white);
		background-color: #000
	}
	.Crk4OPiucf8byDY_XkCtZ,
	._3QQ9y6Oiu8jxi0RjuzlwKE {
		background-image: -webkit-named-image(apple-pay-logo-black);
		background-color: #fff
	}
	._3QQ9y6Oiu8jxi0RjuzlwKE {
		border: .5px solid #000
	}
}

.adyen-checkout__applepay__button {
	width: 240px;
	height: 40px
}

.adyen-checkout__dropin .adyen-checkout__applepay__button {
	width: 100%
}

.adyen-checkout__field--issuer-list {
	margin-bottom: 0
}

.-wMSeYyd1oxr12akf2KiW {
	position: relative
}

.-wMSeYyd1oxr12akf2KiW *,
.-wMSeYyd1oxr12akf2KiW :after,
.-wMSeYyd1oxr12akf2KiW :before {
	box-sizing: border-box
}

.LG8NPDcUMJlIVKf-vmZYS {
	border-radius: 3px;
	position: absolute;
	right: 10px;
	margin-left: 7px;
	transform: translateY(-50%);
	top: 50%;
	height: 18px;
	width: 27px
}

._1rROkhE_InAmAGBv9PbBh8 {
	opacity: 1
}

._15TC8X2U755Z-Hf-ih6QH0 {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: none
}

._1S9AS3BoV1JGA8Wvu0f5OB {
	display: block
}

._2_YFYtMPvqZWQG7QMEyFVK {
	opacity: 0
}

.j2oksRnjgVh11hRREN03v {
	display: block;
	max-height: 100px
}

._1bIHbqBrDUDWE6iNTKdVoo {
	display: none
}

._1wm1GR0fzcXXgnIfIM6Xih {
	pointer-events: none;
	opacity: .4
}

.adyen-checkout__card__dual-branding__buttons {
	display: flex;
	opacity: .25;
	pointer-events: none
}

.adyen-checkout__card__dual-branding__buttons--active {
	opacity: 1;
	pointer-events: auto
}

.adyen-checkout__card__dual-branding__buttons .adyen-checkout__card__cardNumber__brandIcon {
	cursor: pointer;
	opacity: 1
}

.adyen-checkout__card__dual-branding__buttons .adyen-checkout__card__cardNumber__brandIcon:first-child {
	right: 40px
}

.adyen-checkout__card__dual-branding__buttons .adyen-checkout__card__cardNumber__brandIcon--not-selected {
	opacity: .25
}

.jZ0YjSr9W9MlpurLCM8H {
	opacity: 1
}

._1tkkSlJUdKo032lWINvPsx {
	opacity: 0
}

.SEHC8PPYoyGWCEoqeuUXX {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: none
}

._1gPx4O2oXmC_ICmXU5w9cb {
	display: block
}

.adyen-checkout__card-input__form {
	transition: opacity .25s ease-out
}

.adyen-checkout__card__cardNumber {
	max-width: 400px
}

.adyen-checkout__card__cardNumber__input {
	padding: 5px 8px
}

.adyen-checkout__card__exp-date__input--oneclick {
	line-height: 30px;
	font-weight: 400;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap
}

.adyen-checkout__card__holderName,
.adyen-checkout__field--expiryDate,
.adyen-checkout__field--storedCard {
	margin-bottom: 0
}

.adyen-checkout__card-input .adyen-checkout__fieldset--billingAddress,
.adyen-checkout__card__holderName,
.adyen-checkout__card__kcp-authentication,
.adyen-checkout__installments,
.adyen-checkout__store-details {
	margin-top: 16px
}

.adyen-checkout__field--cardNumber .adyen-checkout__input--error .adyen-checkout__card__cardNumber__brandIcon,
.adyen-checkout__field--cardNumber .adyen-checkout__input--valid:not(.adyen-checkout__card__cardNumber__input--noBrand)+.adyen-checkout-input__inline-validation--valid {
	display: none
}

.adyen-checkout__field--securityCode.adyen-checkout__field--error .adyen-checkout__card__cvc__hint,
.adyen-checkout__field--securityCode.adyen-checkout__field--valid .adyen-checkout__card__cvc__hint {
	opacity: 0
}

@-webkit-keyframes cvcIndicateLocation {
	0% {
		opacity: 1
	}
	to {
		opacity: .3
	}
}

@keyframes cvcIndicateLocation {
	0% {
		opacity: 1
	}
	to {
		opacity: .3
	}
}

.adyen-checkout__label--focused .adyen-checkout__card__cvc__hint__location {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-name: cvcIndicateLocation;
	animation-name: cvcIndicateLocation;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-direction: alternate;
	animation-direction: alternate
}

.adyen-checkout__card__cvc__hint__wrapper {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 27px;
	display: flex;
	align-items: center;
	margin: 0 10px;
	transition: transform .3s cubic-bezier(.455, .03, .515, .955);
	transform-origin: center;
	transform-style: preserve-3d;
	will-change: transform;
	-webkit-backface-visibility: visible;
	backface-visibility: visible;
	transform: translateZ(0)
}

.adyen-checkout__field__cvc--front-hint.adyen-checkout__card__cvc__hint__wrapper {
	transform: rotateY(180deg)
}

.adyen-checkout__card__cvc__hint {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	position: absolute;
	transition: opacity .1s linear
}

.adyen-checkout__card__cvc__hint--front {
	transform: rotateY(180deg)
}

@media (prefers-reduced-motion:reduce) {
	.adyen-checkout__card__cvc__hint__wrapper {
		transition: none
	}
}

.adyen-checkout__fieldset--revolving-plan .adyen-checkout__fieldset__fields {
	justify-content: left
}

.adyen-checkout__fieldset--revolving-plan .adyen-checkout__radio_group {
	display: flex;
	flex-direction: column
}

.adyen-checkout__fieldset--revolving-plan .adyen-checkout__radio_group__input-wrapper {
	margin-top: 20px
}

.adyen-checkout__field--revolving-plan-installments {
	position: relative;
	top: 42px;
	width: 30%;
	margin-left: 15px
}

.adyen-checkout__image {
	opacity: 0;
	transition: opacity .6s ease-out
}

.adyen-checkout__image--loaded {
	opacity: 1
}

.adyen-checkout__button-group {
	background: transparent;
	display: flex;
	justify-content: space-between
}

.adyen-checkout__button-group .adyen-checkout__button {
	background: transparent;
	border: 0;
	box-shadow: inset 0 0 0 1px #99a3ad;
	color: #00112c;
	font-size: .81em;
	font-weight: 400;
	line-height: 40px;
	margin-right: 8px;
	height: 40px;
	padding: 0;
	text-align: center
}

.adyen-checkout__button-group .adyen-checkout__button:last-child {
	margin-right: 0
}

.adyen-checkout__button-group .adyen-checkout__button:hover {
	background: transparent;
	box-shadow: inset 0 0 0 2px #99a3ad
}

.adyen-checkout__button-group .adyen-checkout__button:active {
	background: #f7f8f9;
	box-shadow: inset 0 0 0 2px #99a3ad
}

.adyen-checkout__button-group .adyen-checkout__button--disabled,
.adyen-checkout__button-group .adyen-checkout__button--disabled:hover {
	cursor: not-allowed;
	opacity: .4;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__button-group .adyen-checkout__button--selected,
.adyen-checkout__button-group .adyen-checkout__button--selected:active,
.adyen-checkout__button-group .adyen-checkout__button--selected:active:hover,
.adyen-checkout__button-group .adyen-checkout__button--selected:hover {
	background: #e5efff;
	box-shadow: inset 0 0 0 2px #06f;
	border-color: #06f;
	font-weight: 500;
	height: 40px;
	transition: none
}

.adyen-checkout__button-group .adyen-checkout__button .adyen-checkout__button-group__input {
	opacity: 0;
	pointer-events: none;
	position: absolute
}

.adyen-checkout__adyen-giving .adyen-checkout__status__icon {
	display: block;
	margin: 56px auto 32px
}

.adyen-checkout__adyen-giving .adyen-checkout__status__text {
	color: #00112c;
	margin-bottom: 56px;
	text-align: center
}

.adyen-checkout__campaign {
	border-radius: 6px;
	background: #00112c;
	height: 227px;
	overflow: hidden;
	position: relative
}

.adyen-checkout__campaign-link:hover .adyen-checkout__campaign-description {
	text-decoration: underline
}

.adyen-checkout__campaign-container {
	height: 100%
}

.adyen-checkout__campaign-logo {
	border: 2px solid hsla(0, 0%, 100%, .4);
	border-radius: 3px;
	display: block;
	height: 48px;
	margin-bottom: 16px;
	overflow: hidden;
	width: 48px
}

.adyen-checkout__campaign-background-image {
	background-color: #00112c;
	background-position: 50%;
	background-size: cover;
	height: 100%
}

.adyen-checkout__campaign-link .adyen-checkout__campaign-background-image:before {
	background: inherit;
	content: "";
	height: 100%;
	position: absolute;
	transition: transform .6s ease-out;
	width: 100%
}

.adyen-checkout__campaign-link .adyen-checkout__campaign-background-image:hover:before {
	transform: scale(1.1)
}

.adyen-checkout__campaign-link .adyen-checkout__campaign-content {
	pointer-events: none
}

.adyen-checkout__campaign-content {
	bottom: 0;
	padding: 16px;
	position: absolute;
	z-index: 2
}

.adyen-checkout__campaign-description,
.adyen-checkout__campaign-title {
	color: #fff;
	font-weight: 400;
	margin: 0
}

.adyen-checkout__campaign-title {
	font-size: 1em;
	margin-bottom: 8px
}

.adyen-checkout__campaign-description {
	font-size: .81em;
	line-height: 19px
}

.adyen-checkout__adyen-giving-actions {
	margin-top: 16px
}

.adyen-checkout__button.adyen-checkout__button--donate {
	margin: 16px auto 8px
}

.adyen-checkout__button.adyen-checkout__button--decline {
	display: block;
	margin: auto;
	width: auto
}

.adyen-checkout__paywithgoogle>div>button,
.adyen-checkout__paywithgoogle>div>button.long,
.adyen-checkout__paywithgoogle>div>button.short {
	height: 48px;
	transition: background-color .3s ease-out, box-shadow .3s ease-out
}

.adyen-checkout__paywithgoogle>div>button.long:focus,
.adyen-checkout__paywithgoogle>div>button.short:focus,
.adyen-checkout__paywithgoogle>div>button:focus {
	box-shadow: 0 0 0 2px #99c2ff;
	outline: 0
}

.adyen-checkout__paywithgoogle>div>button.gpay-button {
	padding: 15px 24px 13px
}

.adyen-checkout__paywithgoogle>div>button.long {
	width: 100%
}

.adyen-checkout__voucher-result {
	box-sizing: border-box;
	border-radius: 12px;
	text-align: center;
	position: relative
}

.adyen-checkout__voucher-result__bottom,
.adyen-checkout__voucher-result__top {
	background: #fff;
	border: 1px solid #d4d9db
}

.adyen-checkout__voucher-result__top {
	padding: 40px 0 24px;
	border-radius: 12px 12px 0 0;
	border-bottom: 0
}

.adyen-checkout__voucher-result__bottom {
	border-top: 0;
	border-radius: 0 0 12px 12px
}

.adyen-checkout__voucher-result__separator {
	background: #fff;
	position: relative;
	width: calc(100% - 14px);
	height: 13px;
	margin: 0 auto;
	display: flex;
	align-items: center
}

.adyen-checkout__voucher-result__separator:after,
.adyen-checkout__voucher-result__separator:before {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMGw1IDIgMS41IDRIN1YwSDB6bTAgMTNsNS0yIDEuNS00SDd2NkgweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02LjQyMyA2LjVDNi40MjMgMy4zMTIgMy43ODMuNzU2LjUuNTE4djBjMy4zODYuMjM2IDYgMi44NTUgNiA1Ljk4MiAwIDMuMTI3LTIuNjE0IDUuNzQ2LTYgNS45ODN2LS4wMDFjMy4yODQtLjIzNyA1LjkyMy0yLjc5NCA1LjkyMy01Ljk4MnoiIHN0cm9rZT0iI0Q0RDlEQiIvPjxwYXRoIGZpbGw9IiNENEQ5REIiIGQ9Ik0wIDBoMXYxSDB6TTAgMTJoMXYxSDB6Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoN3YxM0gweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==)
}

.adyen-checkout__voucher-result__separator:before {
	left: -7px
}

.adyen-checkout__voucher-result__separator:after,
.adyen-checkout__voucher-result__separator:before {
	background-position: 100%;
	background-repeat: no-repeat;
	content: "";
	top: 0;
	position: absolute;
	width: 7px;
	height: 13px
}

.adyen-checkout__voucher-result__separator:after {
	right: -7px;
	transform: rotate(-180deg)
}

.adyen-checkout__voucher-result__separator__inner {
	width: 100%;
	border-top: 1px solid #e6e9eb
}

.adyen-checkout__voucher-result__image {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 40px
}

.adyen-checkout__link--voucher-result-instructions {
	display: inline-block
}

.adyen-checkout__voucher-result__image__wrapper {
	display: block;
	position: relative;
	height: 48px;
	margin: 0 24px
}

.adyen-checkout__voucher-result__image__wrapper:after {
	border: 1px solid rgba(0, 27, 43, .17);
	border-radius: 3px;
	content: "";
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%
}

.adyen-checkout__voucher-result__image__wrapper:nth-child(2):before {
	border-left: 1px solid #d4d9db;
	content: "";
	height: 64px;
	left: -24.5px;
	position: absolute;
	top: -8px;
	width: 1px
}

.adyen-checkout__voucher-result__image__brand,
.adyen-checkout__voucher-result__image__issuer {
	height: 48px;
	border-radius: 3px
}

.adyen-checkout__voucher-result__introduction {
	line-height: 19px;
	font-size: .81em;
	text-align: center;
	color: #00112c;
	max-width: 400px;
	margin: 0 auto
}

.adyen-checkout__voucher-result__amount {
	margin: 24px auto 0;
	font-size: 1em;
	color: #00112c;
	text-align: center;
	font-weight: 700
}

.adyen-checkout__voucher-result__surcharge {
	font-size: .81em;
	line-height: 19px;
	text-align: center;
	color: #687282;
	display: block;
	font-weight: 400
}

.adyen-checkout__voucher-result__code__label {
	position: absolute;
	display: block;
	font-weight: 400;
	right: 0;
	left: 0;
	width: auto;
	line-height: 19px;
	top: -2px;
	margin: 0 auto;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__voucher-result__code__label:before {
	content: "";
	position: absolute
}

.adyen-checkout__voucher-result__code__label__text {
	font-size: 13px;
	color: #00112c;
	background: #fff;
	padding: 0 8px;
	letter-spacing: normal;
	line-height: 1
}

.adyen-checkout__voucher-result__code__barcode {
	display: block;
	margin: 0 auto 8px;
	max-width: 100%;
	height: 56px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__voucher-result__code {
	position: relative;
	font-size: 1.5em;
	text-align: center;
	letter-spacing: 1px;
	color: #00112c;
	border-width: 1px 0;
	padding: 16px 48px;
	display: inline-block;
	margin: 0 auto;
	width: 100%;
	font-weight: 700;
	-webkit-user-select: all;
	-moz-user-select: all;
	user-select: all;
	word-break: break-word;
	line-height: 1.2
}

.adyen-checkout__voucher-result__details {
	list-style: none;
	padding: 0;
	margin: -1px auto 0
}

.adyen-checkout__voucher-result__details__item {
	display: flex;
	justify-content: space-between;
	font-size: .81em;
	color: #00112c;
	padding: 16px 24px;
	border-top: 1px solid #e6e9eb;
	word-break: break-word
}

.adyen-checkout__voucher-result__details__item:last-child {
	margin-bottom: 0
}

.adyen-checkout__voucher-result__details__label {
	max-width: 50%;
	text-align: left
}

.adyen-checkout__voucher-result__details__value {
	max-width: 50%;
	text-align: right;
	font-weight: 700
}

.adyen-checkout__voucher-result__actions {
	margin: 0 auto 32px;
	max-width: 100%;
	min-width: 200px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	padding: 0
}

.adyen-checkout__voucher-result__actions__item {
	margin: 0 4px
}

.adyen-checkout__paypal__buttons {
	position: relative;
	z-index: 0
}

.adyen-checkout__paypal__button {
	display: flex;
	margin-bottom: 16px
}

.adyen-checkout__paypal__button:empty {
	display: none
}

.adyen-checkout__paypal__status--pending {
	margin: 16px 0
}

.adyen-checkout__paypal__status--processing {
	align-items: center;
	display: flex;
	font-size: 13px;
	justify-content: center;
	padding: 24px 0
}

.adyen-checkout__payment-method .adyen-checkout__paypal__status--pending {
	margin: -16px 0 38px
}

.adyen-checkout__payment-method .adyen-checkout__paypal__status--processing {
	padding: 20px 0 65px
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper {
	width: 100%
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__input:focus {
	border: 1px solid #06f;
	box-shadow: 0 0 0 2px #99c2ff
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__dropdown__button {
	width: auto;
	border: 0;
	height: 35px
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__dropdown__button:after {
	left: 40px;
	box-sizing: revert;
	height: 10px
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__input--phoneNumber {
	margin-left: 8px;
	height: 35px;
	padding-left: 15px;
	border: 1px solid transparent
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__input-wrapper--phoneInput {
	display: flex;
	align-items: center
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__input-wrapper--phoneInput:focus {
	border-bottom: 1px solid #06f;
	box-shadow: 0 0 0 2px #99c2ff
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__phoneNumber {
	display: flex;
	align-items: center;
	margin-left: 65px;
	width: 100%
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__countryFlag {
	position: absolute
}

.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__dropdown__button--active,
.adyen-checkout__phone-input .adyen-checkout__input-wrapper .adyen-checkout__dropdown__button--active:hover {
	box-shadow: none
}

.adyen-checkout__iban-input__number {
	text-transform: uppercase;
	padding: 5px 36px 5px 8px
}

.adyen-checkout__threeds2__challenge,
.adyen-checkout__threeds2__challenge-container {
	background-color: transparent;
	box-sizing: border-box;
	display: block;
	position: relative;
	overflow: hidden;
	width: 100%;
	min-height: 400px;
	height: inherit
}

.adyen-checkout__threeds2__challenge--01,
.adyen-checkout__threeds2__challenge--01 .adyen-checkout__iframe--threeDSIframe {
	width: 250px;
	height: 400px
}

.adyen-checkout__threeds2__challenge--02,
.adyen-checkout__threeds2__challenge--02 .adyen-checkout__iframe--threeDSIframe {
	width: 390px;
	height: 400px
}

.adyen-checkout__threeds2__challenge--03,
.adyen-checkout__threeds2__challenge--03 .adyen-checkout__iframe--threeDSIframe {
	width: 500px;
	height: 600px
}

.adyen-checkout__threeds2__challenge--04,
.adyen-checkout__threeds2__challenge--04 .adyen-checkout__iframe--threeDSIframe {
	width: 600px;
	height: 400px
}

.adyen-checkout__threeds2__challenge--05,
.adyen-checkout__threeds2__challenge--05 .adyen-checkout__iframe--threeDSIframe {
	width: 100%;
	height: 100%
}

.adyen-checkout__iframe--threeDSIframe {
	position: absolute;
	top: 0;
	left: 0;
	border: 0
}

.adyen-checkout__qr-loader {
	background: #fff;
	padding: 40px;
	border: 1px solid #d4d9db;
	border-radius: 12px;
	text-align: center
}

.adyen-checkout__qr-loader--result {
	padding: 100px
}

.adyen-checkout__qr-loader--app {
	border: 0;
	border-radius: 0;
	padding: 0
}

.adyen-checkout__qr-loader__brand-logo {
	width: 74px;
	border-radius: 3px
}

.adyen-checkout__qr-loader__subtitle {
	max-width: 400px;
	margin: 32px auto 0
}

.adyen-checkout__qr-loader__subtitle--result {
	margin-bottom: 32px
}

.adyen-checkout__qr-loader__payment_amount,
.adyen-checkout__qr-loader__subtitle {
	color: #00112c;
	font-size: 1em;
	line-height: 19px
}

.adyen-checkout__qr-loader__icon {
	width: 88px;
	height: 88px
}

.adyen-checkout__qr-loader__payment_amount {
	font-weight: 700
}

.adyen-checkout__qr-loader__progress {
	height: 4px;
	background: #d4d9db;
	border-radius: 24px;
	margin: 32px auto 12px;
	width: 152px;
	padding-right: 3%
}

.adyen-checkout__qr-loader__percentage {
	display: block;
	height: 100%;
	border-radius: 24px;
	background: #06f
}

.adyen-checkout__qr-loader__countdown {
	color: #687282;
	font-size: .81em
}

.adyen-checkout__qr-loader>.adyen-checkout__spinner__wrapper {
	margin: 60px 0
}

.adyen-checkout__qr-loader__app-link {
	margin-top: 16px;
	display: none
}

.adyen-checkout__qr-loader__separator__label {
	position: relative;
	font-size: 13px;
	color: #687282;
	overflow: hidden;
	text-align: center;
	z-index: 1;
	display: block
}

.adyen-checkout__qr-loader__separator__label:after,
.adyen-checkout__qr-loader__separator__label:before {
	position: absolute;
	top: 51%;
	overflow: hidden;
	width: 50%;
	height: 1px;
	content: "\a0";
	background-color: #e6e9eb
}

.adyen-checkout__qr-loader__separator__label:before {
	margin-left: -52%;
	text-align: right
}

.adyen-checkout__qr-loader__separator__label:after {
	margin-left: 2%
}

.adyen-checkout__button.adyen-checkout__button--qr-loader {
	text-decoration: none;
	margin-top: 24px
}

.adyen-checkout__qr-loader__instructions {
	color: #687282;
	font-size: 1em;
	line-height: 1.5;
	margin-top: 32px
}

.adyen-checkout__qr-loader__actions {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px
}

@media only screen and (max-device-width:1200px) {
	.adyen-checkout__qr-loader__app-link {
		display: block
	}
}

.adyen-checkout__voucher-result--boletobancario .adyen-checkout__voucher-result__code {
	font-size: .81em;
	line-height: 19px;
	word-break: break-all;
	padding: 24px
}

.adyen-checkout__voucher-result--oxxo .adyen-checkout__voucher-result__code {
	font-size: .81em;
	line-height: 19px;
	word-break: break-all;
	padding: 24px
}

.adyen-checkout__alert-message {
	display: flex;
	border-radius: 6px;
	margin: 0 0 16px;
	text-align: left;
	padding: 12px;
	font-size: .81em
}

.adyen-checkout__alert-message--error {
	background: #fbe6ed
}

.adyen-checkout__alert-message--warning {
	background: #ffeacc
}

.adyen-checkout__alert-message--info {
	background: #e5efff
}

.adyen-checkout__alert-message__icon {
	width: 14px;
	height: 14px;
	margin-right: 8px
}

.adyen-checkout__giftcard-result__header {
	align-items: center;
	display: flex;
	flex-wrap: nowrap;
	font-size: 1em;
	font-weight: 400;
	justify-content: space-between;
	position: relative;
	width: 100%
}

.adyen-checkout__giftcard-result__header__title {
	display: flex;
	align-items: center
}

.adyen-checkout__giftcard-result__name {
	margin-left: 8px
}

.adyen-checkout__giftcard-result__balance {
	padding: 0;
	list-style: none;
	margin: 16px 0 0
}

.adyen-checkout__giftcard-result__balance__item {
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px
}

.adyen-checkout__giftcard-result__balance__item .adyen-checkout__giftcard-result__balance__title--transactionLimit {
	color: #687282
}

.adyen-checkout__giftcard-result__balance__item:last-child {
	margin-bottom: 0
}

.adyen-checkout__giftcard-result__balance__value--amount {
	font-weight: 700
}

.adyen-checkout__giftcard-result__remaining-balance {
	font-size: 13px;
	line-height: 19px;
	text-align: center;
	color: #687282;
	margin: 8px auto 0
}

.iGQlrgUxnAsLb4qtu0dOc {
	list-style: none;
	margin: 0;
	padding: 0
}

._1Rv6Y28L612jCrJtlPzepi {
	display: block;
	max-height: 60px
}

._3u1CYXsnDFNlMBMpufyrsq {
	display: none
}

._1fo2qAgp7ayytaKrqbZpQI {
	width: 40px;
	height: 26px
}

._11rD_9hAzkhgGyt7QOo002 {
	margin-right: 8px
}

._3BJR28lK23l7BF0ouQL_18 {
	max-height: 100%
}

._3BJR28lK23l7BF0ouQL_18 ._3u1CYXsnDFNlMBMpufyrsq {
	display: block
}

.adyen-checkout__payment-method__disable-confirmation {
	background: #d10244;
	font-size: .81em;
	color: #fff;
	border-right: 1px solid #c70241;
	border-left: 1px solid #c70241;
	overflow: hidden;
	opacity: 0;
	margin: 0 -17px;
	max-height: 0;
	transition: opacity .15s ease-out, max-height .15s linear, margin-bottom .1s linear
}

.adyen-checkout__payment-method__disable-confirmation.adyen-checkout__payment-method__disable-confirmation--open {
	max-height: 62px;
	opacity: 1;
	margin-bottom: 16px
}

.adyen-checkout__payment-method__disable-confirmation__content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px
}

.adyen-checkout__payment-method__disable-confirmation__buttons {
	display: flex
}

.adyen-checkout__payment-method__disable-confirmation__button {
	background: #d10244;
	border: 1px solid transparent;
	border-radius: 6px;
	color: #fff;
	cursor: pointer;
	display: block;
	height: auto;
	line-height: 14px;
	margin: 0 0 0 8px;
	padding: 8px;
	width: auto
}

.adyen-checkout__payment-method__disable-confirmation__button:hover,
.adyen-checkout__payment-method__disable-confirmation__button:hover:focus {
	box-shadow: none;
	background: #b8023c
}

.adyen-checkout__payment-method__disable-confirmation__button:active,
.adyen-checkout__payment-method__disable-confirmation__button:hover:active {
	background: #9e0234;
	box-shadow: none
}

.adyen-checkout__payment-method__disable-confirmation__button--remove,
.adyen-checkout__payment-method__disable-confirmation__button--remove:disabled {
	border-color: #fff
}

.adyen-checkout__payment-method__disable-confirmation__button--cancel,
.adyen-checkout__payment-method__disable-confirmation__button--cancel:disabled {
	border-color: transparent
}

.adyen-checkout__payment-method {
	position: relative;
	background: #fff;
	border: 1px solid #e6e9eb;
	cursor: pointer;
	margin-top: -1px;
	width: 100%;
	transition: opacity .3s ease-out
}

.adyen-checkout__payment-method:focus {
	outline: 0
}

.adyen-checkout__payment-method--selected+.adyen-checkout__payment-method,
.adyen-checkout__payment-method:first-child {
	margin-top: 0;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px
}

.adyen-checkout__payment-method--next-selected,
.adyen-checkout__payment-method:last-child {
	margin-bottom: 0;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px
}

.adyen-checkout__payment-method--loading {
	opacity: .2
}

.adyen-checkout__payment-method--selected.adyen-checkout__payment-method--loading {
	opacity: .9
}

.adyen-checkout__payment-method--confirming .adyen-checkout__payment-method__details__content {
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__payment-method--disabling {
	opacity: .3;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.adyen-checkout__payment-method__header {
	align-items: center;
	color: #00112c;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	font-weight: 400;
	font-size: 1em;
	padding: 16px 16px 16px 48px;
	position: relative;
	transition: background .1s ease-out;
	width: 100%
}

.adyen-checkout__payment-method--standalone .adyen-checkout__payment-method__header {
	padding: 16px
}

.adyen-checkout__payment-method__header__title {
	display: flex;
	align-items: center;
	flex-shrink: 0;
	margin-right: 16px;
	max-width: 100%
}

.adyen-checkout__payment-method__surcharge {
	color: #687282;
	margin-left: 5px
}

.adyen-checkout__payment-method--selected {
	transition: margin .15s cubic-bezier(.4, 0, .2, 1) 0ms, opacity .3s ease-out;
	background: #f7f8f9;
	border: 1px solid #e6e9eb;
	margin: 8px 0;
	border-radius: 12px;
	cursor: default
}

.adyen-checkout__payment-method--selected .adyen-checkout__payment-method__header {
	flex-wrap: wrap
}

.adyen-checkout__payment-method__name {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden
}

.adyen-checkout__payment-method__name--selected {
	font-weight: 500
}

.adyen-checkout__payment-method__details {
	padding: 0 16px;
	position: relative
}

.adyen-checkout__payment-method__details__content {
	margin: 0 0 16px
}

.adyen-checkout__payment-method__image__wrapper {
	height: 26px;
	width: 40px;
	position: relative
}

.adyen-checkout__payment-method__image__wrapper:after {
	content: "";
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	left: 0;
	border-radius: 3px;
	border: 1px solid rgba(0, 27, 43, .17)
}

.adyen-checkout__payment-method__image {
	display: block;
	border-radius: 3px
}

.adyen-checkout__payment-method__brands {
	display: flex;
	flex-wrap: wrap;
	margin: 4px 0;
	height: 16px;
	flex-basis: auto;
	flex-shrink: 1;
	text-align: right;
	overflow: hidden
}

.adyen-checkout__payment-method--selected .adyen-checkout__payment-method__brands {
	text-align: left;
	overflow: visible;
	height: auto
}

.adyen-checkout__payment-method__brands .adyen-checkout__payment-method__image__wrapper {
	display: inline-block;
	margin-right: 4px;
	height: 16px;
	width: 24px;
	transition: opacity .2s ease-out
}

.adyen-checkout__payment-method__brands .adyen-checkout__payment-method__image__wrapper:last-child {
	margin: 0
}

.adyen-checkout__payment-method--selected .adyen-checkout__payment-method__brands .adyen-checkout__payment-method__image__wrapper {
	margin-bottom: 4px
}

.adyen-checkout__payment-method__brands img {
	width: 24px;
	height: 16px
}

.adyen-checkout__payment-method__image__wrapper--disabled {
	opacity: .25
}

.adyen-checkout__payment-method__radio {
	position: absolute;
	background-color: #fff;
	border: 1px solid #b9c4c9;
	border-radius: 50%;
	height: 16px;
	width: 16px;
	left: 16px;
	transition: border-color .2s ease-out, box-shadow .2s ease-out
}

.adyen-checkout__payment-method--standalone .adyen-checkout__payment-method__radio {
	display: none
}

.adyen-checkout__payment-method__radio:after {
	content: "";
	display: block;
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 50%;
	height: 6px;
	width: 6px;
	background-color: #fff;
	border-radius: 50%;
	transform: translateY(-50%) scale(0);
	transition: transform .3s ease-out
}

.adyen-checkout__payment-method:hover:not(.adyen-checkout__payment-method--selected) .adyen-checkout__payment-method__radio {
	border-color: #99a3ad;
	box-shadow: 0 0 0 2px #d4d9db;
	cursor: pointer
}

.adyen-checkout__payment-method__radio--selected {
	background-color: #06f;
	border: 0;
	transition: all .3s ease-out
}

.adyen-checkout__payment-method__radio--selected:hover {
	box-shadow: 0 0 0 2px rgba(0, 102, 255, .4)
}

.adyen-checkout__payment-method__radio--selected:after {
	transform: translateY(-50%) scale(1)
}

.adyen-checkout__order-payment-methods-list {
	list-style: none;
	margin: 0 auto 16px;
	padding: 0
}

.adyen-checkout__order-payment-method {
	position: relative;
	background: #fff;
	border: 1px solid #e6e9eb;
	margin-top: -1px;
	width: 100%
}

.adyen-checkout__order-payment-method:first-child {
	border-top-left-radius: 12px;
	border-top-right-radius: 12px
}

.adyen-checkout__order-payment-method:last-child {
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px
}

.adyen-checkout__order-payment-method__header {
	align-items: center;
	color: #00112c;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	font-weight: 500;
	font-size: 1em;
	padding: 16px;
	position: relative;
	transition: background .1s ease-out;
	width: 100%
}

.adyen-checkout__order-payment-method__details {
	padding: 0 16px 16px
}

.adyen-checkout__order-payment-method__deducted-amount {
	display: flex;
	justify-content: space-between;
	line-height: 1em;
	font-size: 1em
}

.adyen-checkout__order-payment-method__deducted-amount__label {
	font-size: .81em
}

.adyen-checkout__order-payment-method__deducted-amount__value {
	font-weight: 500
}

.adyen-checkout__order-remaining-amount {
	display: block;
	width: 100%;
	padding: 8px 16px;
	color: #7f4a00;
	background: #ffeacc;
	border-radius: 6px;
	margin-bottom: 16px;
	font-size: .81em
}

.adyen-checkout__order-remaining-amount strong {
	font-weight: 700
}

.adyen-checkout__status {
	display: flex;
	text-align: center;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 350px;
	margin: 0;
	padding: 32px;
	background-color: #fff;
	border-radius: 6px;
	border: 1px solid #d4d9db;
	font-size: 1em;
	color: #00112c
}

.adyen-checkout__status__icon {
	margin-bottom: 24px
}

.adyen-checkout__status .adyen-checkout__spinner__wrapper {
	max-height: 88px
}

.adyen-checkout__dropin,
.adyen-checkout__dropin *,
.adyen-checkout__dropin :after,
.adyen-checkout__dropin :before {
	box-sizing: border-box
}

.adyen-checkout__payment-methods-list--loading {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none
}

.adyen-checkout__link {
	color: #06f;
	text-decoration: none
}

.adyen-checkout__link:hover {
	text-decoration: underline
}

._1EXw9Cav0pmID2b-ymwNmz {
	position: relative
}

._1EXw9Cav0pmID2b-ymwNmz *,
._1EXw9Cav0pmID2b-ymwNmz :after,
._1EXw9Cav0pmID2b-ymwNmz :before {
	box-sizing: border-box
}

._2NaT42mcuvEbfoJUjXGSch {
	display: block;
	max-height: 100px
}

.adyen-checkout__loading-input__form {
	transition: opacity .25s ease-out
}

.adyen-checkout__pm__holderName {
	margin-bottom: 0
}

.adyen-checkout__fieldset__title+.adyen-checkout__ach-sf__form {
	margin-top: 0
}

.adyen-checkout__ach-input .adyen-checkout__fieldset--address,
.adyen-checkout__ach-sf__form {
	margin-top: 16px
}

.adyen-checkout__loading-input__form {
	transition: opacity .25s ease-out
}

.adyen-checkout__await {
	background: #fff;
	padding: 40px;
	border: 1px solid #d4d9db;
	border-radius: 12px;
	text-align: center
}

.adyen-checkout__await--result {
	padding: 100px
}

.adyen-checkout__qr-loader--app {
	border: 0;
	border-radius: 0;
	padding: 0
}

.adyen-checkout__await__brand-logo {
	width: 74px;
	border-radius: 3px
}

.adyen-checkout__await__indicator-text,
.adyen-checkout__await__subtitle {
	color: #00112c;
	font-size: 1em;
	line-height: 19px;
	margin-top: 32px
}

.adyen-checkout__await__indicator-holder .adyen-checkout__await__indicator-text {
	margin-top: 6px;
	margin-left: 10px
}

.adyen-checkout__await__indicator-holder {
	display: flex;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 20px
}

.adyen-checkout__await__subtitle--result {
	margin-bottom: 32px
}

.adyen-checkout__await__icon {
	width: 88px;
	height: 88px
}

.adyen-checkout__await__progress {
	height: 4px;
	background: #d4d9db;
	border-radius: 24px;
	margin: 32px auto 12px;
	width: 152px
}

.adyen-checkout__await__percentage {
	display: block;
	height: 100%;
	border-radius: 24px;
	background: #06f
}

.adyen-checkout__await__countdown {
	color: #687282;
	font-size: .81em
}

.adyen-checkout__await>.adyen-checkout__spinner__wrapper {
	margin: 60px 0
}

.adyen-checkout__await__app-link {
	margin-top: 16px;
	display: none
}

.adyen-checkout__await__separator__label {
	position: relative;
	font-size: 13px;
	color: #687282;
	overflow: hidden;
	text-align: center;
	z-index: 1;
	display: block
}

.adyen-checkout__await__separator__label:after,
.adyen-checkout__await__separator__label:before {
	position: absolute;
	top: 51%;
	overflow: hidden;
	width: 50%;
	height: 1px;
	content: "\a0";
	background-color: #e6e9eb
}

.adyen-checkout__await__separator__label:before {
	margin-left: -52%;
	text-align: right
}

.adyen-checkout__await__separator__label:after {
	margin-left: 2%
}

@media only screen and (max-device-width:1200px) {
	.adyen-checkout__await__app-link {
		display: block
	}
}

.adyen-checkout__blik__helper {
	font-size: 1em;
	font-weight: 400;
	color: #00112c;
	margin: 0 0 16px;
	padding: 0
}

.adyen-checkout__bankTransfer__introduction {
	font-size: .81em;
	color: #00112c;
	font-weight: 400;
	margin: 0 0 16px;
	padding: 0
}

.adyen-checkout__bankTransfer__emailField {
	margin: 0 0 16px
}

.adyen-checkout__bacs--confirm {
	position: relative
}

.adyen-checkout__bacs--confirm .adyen-checkout-input__inline-validation--valid {
	display: none
}

.adyen-checkout__bacs .adyen-checkout__field--inactive {
	pointer-events: none
}

.adyen-checkout__bacs .adyen-checkout__bacs--edit {
	position: absolute;
	top: -25px;
	right: 0;
	cursor: pointer;
	width: 20%
}

.adyen-checkout__bacs .adyen-checkout__bacs--edit-dropin {
	top: -50px
}

.adyen-checkout__bacs .adyen-checkout__bacs--edit .adyen-checkout__bacs--edit-button {
	border: none;
	background: none;
	color: #06f;
	text-decoration: underline;
	text-align: end;
	cursor: pointer
}

.adyen-checkout__voucher-result__introduction {
	font-size: 1em;
	max-width: 420px
}`;

export default styles;