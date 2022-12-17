<!-- Snow effect via https://codepen.io/alphardex/pen/dyPorwJ -->
<div id="snow-container">
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
	<div class="snow" />
</div>

<style>
	body {
		height: 100vh;
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		overflow: hidden;
		filter: drop-shadow(0 0 10px white);
	}

	.snow {
		position: absolute;
		width: 10px;
		height: 10px;
		background: white;
		border-radius: 50%;
	}
	.snow:nth-child(1) {
		opacity: 0.1777;
		transform: translate(4.228vw, -10px) scale(0.8541);
		animation: fall-1 22s -10s linear infinite;
	}
	@keyframes fall-1 {
		37.985% {
			transform: translate(1.7341vw, 37.985vh) scale(0.8541);
		}
		to {
			transform: translate(2.98105vw, 100vh) scale(0.8541);
		}
	}
	.snow:nth-child(2) {
		opacity: 0.9451;
		transform: translate(27.1494vw, -10px) scale(0.9461);
		animation: fall-2 25s -16s linear infinite;
	}
	@keyframes fall-2 {
		50.074% {
			transform: translate(35.1022vw, 50.074vh) scale(0.9461);
		}
		to {
			transform: translate(31.1258vw, 100vh) scale(0.9461);
		}
	}
	.snow:nth-child(3) {
		opacity: 0.6957;
		transform: translate(28.5511vw, -10px) scale(0.4558);
		animation: fall-3 22s -9s linear infinite;
	}
	@keyframes fall-3 {
		75.087% {
			transform: translate(28.3984vw, 75.087vh) scale(0.4558);
		}
		to {
			transform: translate(28.47475vw, 100vh) scale(0.4558);
		}
	}
	.snow:nth-child(4) {
		opacity: 0.6813;
		transform: translate(68.8973vw, -10px) scale(0.1988);
		animation: fall-4 24s -20s linear infinite;
	}
	@keyframes fall-4 {
		34.036% {
			transform: translate(74.5018vw, 34.036vh) scale(0.1988);
		}
		to {
			transform: translate(71.69955vw, 100vh) scale(0.1988);
		}
	}
	.snow:nth-child(5) {
		opacity: 0.655;
		transform: translate(92.0208vw, -10px) scale(0.3157);
		animation: fall-5 23s -4s linear infinite;
	}
	@keyframes fall-5 {
		40.866% {
			transform: translate(87.783vw, 40.866vh) scale(0.3157);
		}
		to {
			transform: translate(89.9019vw, 100vh) scale(0.3157);
		}
	}
	.snow:nth-child(6) {
		opacity: 0.1061;
		transform: translate(73.5067vw, -10px) scale(0.4044);
		animation: fall-6 26s -18s linear infinite;
	}
	@keyframes fall-6 {
		77.771% {
			transform: translate(68.9361vw, 77.771vh) scale(0.4044);
		}
		to {
			transform: translate(71.2214vw, 100vh) scale(0.4044);
		}
	}
	.snow:nth-child(7) {
		opacity: 0.4256;
		transform: translate(32.0431vw, -10px) scale(0.1517);
		animation: fall-7 23s -6s linear infinite;
	}
	@keyframes fall-7 {
		58.142% {
			transform: translate(24.2244vw, 58.142vh) scale(0.1517);
		}
		to {
			transform: translate(28.13375vw, 100vh) scale(0.1517);
		}
	}
	.snow:nth-child(8) {
		opacity: 0.3365;
		transform: translate(98.802vw, -10px) scale(0.0639);
		animation: fall-8 27s -22s linear infinite;
	}
	@keyframes fall-8 {
		72.346% {
			transform: translate(91.4599vw, 72.346vh) scale(0.0639);
		}
		to {
			transform: translate(95.13095vw, 100vh) scale(0.0639);
		}
	}
	.snow:nth-child(9) {
		opacity: 0.5057;
		transform: translate(26.9535vw, -10px) scale(0.7115);
		animation: fall-9 20s -26s linear infinite;
	}
	@keyframes fall-9 {
		77.883% {
			transform: translate(26.0855vw, 77.883vh) scale(0.7115);
		}
		to {
			transform: translate(26.5195vw, 100vh) scale(0.7115);
		}
	}
	.snow:nth-child(10) {
		opacity: 0.7323;
		transform: translate(49.8613vw, -10px) scale(0.4578);
		animation: fall-10 16s -8s linear infinite;
	}
	@keyframes fall-10 {
		72.607% {
			transform: translate(46.2534vw, 72.607vh) scale(0.4578);
		}
		to {
			transform: translate(48.05735vw, 100vh) scale(0.4578);
		}
	}
	.snow:nth-child(11) {
		opacity: 0.5607;
		transform: translate(1.3418vw, -10px) scale(0.62);
		animation: fall-11 16s -15s linear infinite;
	}
	@keyframes fall-11 {
		77.354% {
			transform: translate(-1.6505vw, 77.354vh) scale(0.62);
		}
		to {
			transform: translate(-0.15435vw, 100vh) scale(0.62);
		}
	}
	.snow:nth-child(12) {
		opacity: 0.7825;
		transform: translate(52.3833vw, -10px) scale(0.3185);
		animation: fall-12 16s -20s linear infinite;
	}
	@keyframes fall-12 {
		47.318% {
			transform: translate(50.494vw, 47.318vh) scale(0.3185);
		}
		to {
			transform: translate(51.43865vw, 100vh) scale(0.3185);
		}
	}
	.snow:nth-child(13) {
		opacity: 0.6078;
		transform: translate(95.223vw, -10px) scale(0.4916);
		animation: fall-13 17s -2s linear infinite;
	}
	@keyframes fall-13 {
		44.184% {
			transform: translate(99.4402vw, 44.184vh) scale(0.4916);
		}
		to {
			transform: translate(97.3316vw, 100vh) scale(0.4916);
		}
	}
	.snow:nth-child(14) {
		opacity: 0.3074;
		transform: translate(14.3389vw, -10px) scale(0.2615);
		animation: fall-14 18s -1s linear infinite;
	}
	@keyframes fall-14 {
		45.145% {
			transform: translate(20.5911vw, 45.145vh) scale(0.2615);
		}
		to {
			transform: translate(17.465vw, 100vh) scale(0.2615);
		}
	}
	.snow:nth-child(15) {
		opacity: 0.6455;
		transform: translate(52.291vw, -10px) scale(0.2177);
		animation: fall-15 16s -4s linear infinite;
	}
	@keyframes fall-15 {
		47.212% {
			transform: translate(56.6252vw, 47.212vh) scale(0.2177);
		}
		to {
			transform: translate(54.4581vw, 100vh) scale(0.2177);
		}
	}
	.snow:nth-child(16) {
		opacity: 0.0557;
		transform: translate(28.1293vw, -10px) scale(0.9469);
		animation: fall-16 24s -27s linear infinite;
	}
	@keyframes fall-16 {
		79.915% {
			transform: translate(36.8919vw, 79.915vh) scale(0.9469);
		}
		to {
			transform: translate(32.5106vw, 100vh) scale(0.9469);
		}
	}
	.snow:nth-child(17) {
		opacity: 0.9192;
		transform: translate(20.6068vw, -10px) scale(0.1941);
		animation: fall-17 22s -26s linear infinite;
	}
	@keyframes fall-17 {
		37.27% {
			transform: translate(23.0335vw, 37.27vh) scale(0.1941);
		}
		to {
			transform: translate(21.82015vw, 100vh) scale(0.1941);
		}
	}
	.snow:nth-child(18) {
		opacity: 0.1303;
		transform: translate(37.9218vw, -10px) scale(0.3635);
		animation: fall-18 15s -23s linear infinite;
	}
	@keyframes fall-18 {
		74.574% {
			transform: translate(27.9396vw, 74.574vh) scale(0.3635);
		}
		to {
			transform: translate(32.9307vw, 100vh) scale(0.3635);
		}
	}
	.snow:nth-child(19) {
		opacity: 0.7799;
		transform: translate(7.4414vw, -10px) scale(0.2728);
		animation: fall-19 29s -25s linear infinite;
	}
	@keyframes fall-19 {
		69.963% {
			transform: translate(3.6008vw, 69.963vh) scale(0.2728);
		}
		to {
			transform: translate(5.5211vw, 100vh) scale(0.2728);
		}
	}
	.snow:nth-child(20) {
		opacity: 0.4195;
		transform: translate(89.16vw, -10px) scale(0.4182);
		animation: fall-20 10s -22s linear infinite;
	}
	@keyframes fall-20 {
		42.153% {
			transform: translate(93.5635vw, 42.153vh) scale(0.4182);
		}
		to {
			transform: translate(91.36175vw, 100vh) scale(0.4182);
		}
	}
	.snow:nth-child(21) {
		opacity: 0.5468;
		transform: translate(59.7346vw, -10px) scale(0.7573);
		animation: fall-21 21s -5s linear infinite;
	}
	@keyframes fall-21 {
		58.436% {
			transform: translate(52.3998vw, 58.436vh) scale(0.7573);
		}
		to {
			transform: translate(56.0672vw, 100vh) scale(0.7573);
		}
	}
	.snow:nth-child(22) {
		opacity: 0.7962;
		transform: translate(82.1784vw, -10px) scale(0.3924);
		animation: fall-22 18s -14s linear infinite;
	}
	@keyframes fall-22 {
		46.741% {
			transform: translate(80.1217vw, 46.741vh) scale(0.3924);
		}
		to {
			transform: translate(81.15005vw, 100vh) scale(0.3924);
		}
	}
	.snow:nth-child(23) {
		opacity: 0.0212;
		transform: translate(84.5353vw, -10px) scale(0.218);
		animation: fall-23 29s -25s linear infinite;
	}
	@keyframes fall-23 {
		49.903% {
			transform: translate(88.3487vw, 49.903vh) scale(0.218);
		}
		to {
			transform: translate(86.442vw, 100vh) scale(0.218);
		}
	}
	.snow:nth-child(24) {
		opacity: 0.1481;
		transform: translate(13.7909vw, -10px) scale(0.5755);
		animation: fall-24 10s -16s linear infinite;
	}
	@keyframes fall-24 {
		49.751% {
			transform: translate(9.5297vw, 49.751vh) scale(0.5755);
		}
		to {
			transform: translate(11.6603vw, 100vh) scale(0.5755);
		}
	}
	.snow:nth-child(25) {
		opacity: 0.1105;
		transform: translate(6.2952vw, -10px) scale(0.1852);
		animation: fall-25 23s -21s linear infinite;
	}
	@keyframes fall-25 {
		40.679% {
			transform: translate(2.9896vw, 40.679vh) scale(0.1852);
		}
		to {
			transform: translate(4.6424vw, 100vh) scale(0.1852);
		}
	}
	.snow:nth-child(26) {
		opacity: 0.379;
		transform: translate(69.8198vw, -10px) scale(0.4648);
		animation: fall-26 29s -29s linear infinite;
	}
	@keyframes fall-26 {
		35.359% {
			transform: translate(70.4349vw, 35.359vh) scale(0.4648);
		}
		to {
			transform: translate(70.12735vw, 100vh) scale(0.4648);
		}
	}
	.snow:nth-child(27) {
		opacity: 0.2067;
		transform: translate(78.9797vw, -10px) scale(0.8112);
		animation: fall-27 21s -27s linear infinite;
	}
	@keyframes fall-27 {
		47.171% {
			transform: translate(85.0488vw, 47.171vh) scale(0.8112);
		}
		to {
			transform: translate(82.01425vw, 100vh) scale(0.8112);
		}
	}
	.snow:nth-child(28) {
		opacity: 0.5886;
		transform: translate(67.3108vw, -10px) scale(0.5282);
		animation: fall-28 17s -29s linear infinite;
	}
	@keyframes fall-28 {
		47.514% {
			transform: translate(60.3669vw, 47.514vh) scale(0.5282);
		}
		to {
			transform: translate(63.83885vw, 100vh) scale(0.5282);
		}
	}
	.snow:nth-child(29) {
		opacity: 0.8366;
		transform: translate(31.0636vw, -10px) scale(0.3667);
		animation: fall-29 24s -22s linear infinite;
	}
	@keyframes fall-29 {
		65.064% {
			transform: translate(28.3962vw, 65.064vh) scale(0.3667);
		}
		to {
			transform: translate(29.7299vw, 100vh) scale(0.3667);
		}
	}
	.snow:nth-child(30) {
		opacity: 0.7946;
		transform: translate(63.0268vw, -10px) scale(0.0188);
		animation: fall-30 15s -2s linear infinite;
	}
	@keyframes fall-30 {
		38.628% {
			transform: translate(53.721vw, 38.628vh) scale(0.0188);
		}
		to {
			transform: translate(58.3739vw, 100vh) scale(0.0188);
		}
	}
	.snow:nth-child(31) {
		opacity: 0.1912;
		transform: translate(72.4994vw, -10px) scale(0.114);
		animation: fall-31 21s -15s linear infinite;
	}
	@keyframes fall-31 {
		57.79% {
			transform: translate(63.8518vw, 57.79vh) scale(0.114);
		}
		to {
			transform: translate(68.1756vw, 100vh) scale(0.114);
		}
	}
	.snow:nth-child(32) {
		opacity: 0.2147;
		transform: translate(45.1109vw, -10px) scale(0.2578);
		animation: fall-32 16s -21s linear infinite;
	}
	@keyframes fall-32 {
		63.166% {
			transform: translate(39.5238vw, 63.166vh) scale(0.2578);
		}
		to {
			transform: translate(42.31735vw, 100vh) scale(0.2578);
		}
	}
	.snow:nth-child(33) {
		opacity: 0.0959;
		transform: translate(33.5679vw, -10px) scale(0.6599);
		animation: fall-33 12s -20s linear infinite;
	}
	@keyframes fall-33 {
		44.77% {
			transform: translate(24.5533vw, 44.77vh) scale(0.6599);
		}
		to {
			transform: translate(29.0606vw, 100vh) scale(0.6599);
		}
	}
	.snow:nth-child(34) {
		opacity: 0.0035;
		transform: translate(72.4708vw, -10px) scale(0.4183);
		animation: fall-34 29s -10s linear infinite;
	}
	@keyframes fall-34 {
		44.599% {
			transform: translate(72.269vw, 44.599vh) scale(0.4183);
		}
		to {
			transform: translate(72.3699vw, 100vh) scale(0.4183);
		}
	}
	.snow:nth-child(35) {
		opacity: 0.6666;
		transform: translate(21.3025vw, -10px) scale(0.5659);
		animation: fall-35 30s -12s linear infinite;
	}
	@keyframes fall-35 {
		66.216% {
			transform: translate(29.2289vw, 66.216vh) scale(0.5659);
		}
		to {
			transform: translate(25.2657vw, 100vh) scale(0.5659);
		}
	}
	.snow:nth-child(36) {
		opacity: 0.2409;
		transform: translate(2.9655vw, -10px) scale(0.4442);
		animation: fall-36 17s -28s linear infinite;
	}
	@keyframes fall-36 {
		46.722% {
			transform: translate(11.6406vw, 46.722vh) scale(0.4442);
		}
		to {
			transform: translate(7.30305vw, 100vh) scale(0.4442);
		}
	}
	.snow:nth-child(37) {
		opacity: 0.0665;
		transform: translate(6.2409vw, -10px) scale(0.4294);
		animation: fall-37 12s -7s linear infinite;
	}
	@keyframes fall-37 {
		30.333% {
			transform: translate(0.2292vw, 30.333vh) scale(0.4294);
		}
		to {
			transform: translate(3.23505vw, 100vh) scale(0.4294);
		}
	}
	.snow:nth-child(38) {
		opacity: 0.917;
		transform: translate(50.0793vw, -10px) scale(0.8372);
		animation: fall-38 19s -20s linear infinite;
	}
	@keyframes fall-38 {
		61.018% {
			transform: translate(47.8499vw, 61.018vh) scale(0.8372);
		}
		to {
			transform: translate(48.9646vw, 100vh) scale(0.8372);
		}
	}
	.snow:nth-child(39) {
		opacity: 0.6938;
		transform: translate(49.1899vw, -10px) scale(0.3868);
		animation: fall-39 14s -8s linear infinite;
	}
	@keyframes fall-39 {
		65.623% {
			transform: translate(45.147vw, 65.623vh) scale(0.3868);
		}
		to {
			transform: translate(47.16845vw, 100vh) scale(0.3868);
		}
	}
	.snow:nth-child(40) {
		opacity: 0.5219;
		transform: translate(95.2409vw, -10px) scale(0.8054);
		animation: fall-40 14s -1s linear infinite;
	}
	@keyframes fall-40 {
		56.722% {
			transform: translate(104.6803vw, 56.722vh) scale(0.8054);
		}
		to {
			transform: translate(99.9606vw, 100vh) scale(0.8054);
		}
	}
	.snow:nth-child(41) {
		opacity: 0.8404;
		transform: translate(90.6498vw, -10px) scale(0.6351);
		animation: fall-41 24s -8s linear infinite;
	}
	@keyframes fall-41 {
		33.342% {
			transform: translate(93.4083vw, 33.342vh) scale(0.6351);
		}
		to {
			transform: translate(92.02905vw, 100vh) scale(0.6351);
		}
	}
	.snow:nth-child(42) {
		opacity: 0.5646;
		transform: translate(86.3043vw, -10px) scale(0.5443);
		animation: fall-42 22s -9s linear infinite;
	}
	@keyframes fall-42 {
		71.863% {
			transform: translate(90.5774vw, 71.863vh) scale(0.5443);
		}
		to {
			transform: translate(88.44085vw, 100vh) scale(0.5443);
		}
	}
	.snow:nth-child(43) {
		opacity: 0.2762;
		transform: translate(54.0663vw, -10px) scale(0.49);
		animation: fall-43 27s -16s linear infinite;
	}
	@keyframes fall-43 {
		51.086% {
			transform: translate(58.1155vw, 51.086vh) scale(0.49);
		}
		to {
			transform: translate(56.0909vw, 100vh) scale(0.49);
		}
	}
	.snow:nth-child(44) {
		opacity: 0.5825;
		transform: translate(43.2446vw, -10px) scale(0.7487);
		animation: fall-44 11s -24s linear infinite;
	}
	@keyframes fall-44 {
		53.614% {
			transform: translate(46.7666vw, 53.614vh) scale(0.7487);
		}
		to {
			transform: translate(45.0056vw, 100vh) scale(0.7487);
		}
	}
	.snow:nth-child(45) {
		opacity: 0.8341;
		transform: translate(66.1421vw, -10px) scale(0.399);
		animation: fall-45 30s -25s linear infinite;
	}
	@keyframes fall-45 {
		72.164% {
			transform: translate(73.3758vw, 72.164vh) scale(0.399);
		}
		to {
			transform: translate(69.75895vw, 100vh) scale(0.399);
		}
	}
	.snow:nth-child(46) {
		opacity: 0.7499;
		transform: translate(37.5729vw, -10px) scale(0.6697);
		animation: fall-46 24s -26s linear infinite;
	}
	@keyframes fall-46 {
		77.2% {
			transform: translate(28.3891vw, 77.2vh) scale(0.6697);
		}
		to {
			transform: translate(32.981vw, 100vh) scale(0.6697);
		}
	}
	.snow:nth-child(47) {
		opacity: 0.9735;
		transform: translate(81.9639vw, -10px) scale(0.583);
		animation: fall-47 18s -22s linear infinite;
	}
	@keyframes fall-47 {
		32.912% {
			transform: translate(84.1489vw, 32.912vh) scale(0.583);
		}
		to {
			transform: translate(83.0564vw, 100vh) scale(0.583);
		}
	}
	.snow:nth-child(48) {
		opacity: 0.8383;
		transform: translate(36.4141vw, -10px) scale(0.484);
		animation: fall-48 16s -19s linear infinite;
	}
	@keyframes fall-48 {
		35.245% {
			transform: translate(33.6836vw, 35.245vh) scale(0.484);
		}
		to {
			transform: translate(35.04885vw, 100vh) scale(0.484);
		}
	}
	.snow:nth-child(49) {
		opacity: 0.094;
		transform: translate(66.7642vw, -10px) scale(0.7066);
		animation: fall-49 12s -21s linear infinite;
	}
	@keyframes fall-49 {
		37.204% {
			transform: translate(76.5084vw, 37.204vh) scale(0.7066);
		}
		to {
			transform: translate(71.6363vw, 100vh) scale(0.7066);
		}
	}
	.snow:nth-child(50) {
		opacity: 0.9947;
		transform: translate(76.5205vw, -10px) scale(0.7949);
		animation: fall-50 13s -30s linear infinite;
	}
	@keyframes fall-50 {
		76.39% {
			transform: translate(80.5395vw, 76.39vh) scale(0.7949);
		}
		to {
			transform: translate(78.53vw, 100vh) scale(0.7949);
		}
	}
	.snow:nth-child(51) {
		opacity: 0.941;
		transform: translate(26.059vw, -10px) scale(0.4481);
		animation: fall-51 25s -14s linear infinite;
	}
	@keyframes fall-51 {
		67.516% {
			transform: translate(23.6352vw, 67.516vh) scale(0.4481);
		}
		to {
			transform: translate(24.8471vw, 100vh) scale(0.4481);
		}
	}
	.snow:nth-child(52) {
		opacity: 0.1434;
		transform: translate(72.0697vw, -10px) scale(0.0002);
		animation: fall-52 15s -9s linear infinite;
	}
	@keyframes fall-52 {
		60.94% {
			transform: translate(62.9277vw, 60.94vh) scale(0.0002);
		}
		to {
			transform: translate(67.4987vw, 100vh) scale(0.0002);
		}
	}
	.snow:nth-child(53) {
		opacity: 0.4511;
		transform: translate(4.8528vw, -10px) scale(0.6246);
		animation: fall-53 19s -17s linear infinite;
	}
	@keyframes fall-53 {
		79.582% {
			transform: translate(-5.1359vw, 79.582vh) scale(0.6246);
		}
		to {
			transform: translate(-0.14155vw, 100vh) scale(0.6246);
		}
	}
	.snow:nth-child(54) {
		opacity: 0.7543;
		transform: translate(88.3315vw, -10px) scale(0.056);
		animation: fall-54 27s -21s linear infinite;
	}
	@keyframes fall-54 {
		60.06% {
			transform: translate(86.2265vw, 60.06vh) scale(0.056);
		}
		to {
			transform: translate(87.279vw, 100vh) scale(0.056);
		}
	}
	.snow:nth-child(55) {
		opacity: 0.7775;
		transform: translate(95.3934vw, -10px) scale(0.9363);
		animation: fall-55 25s -20s linear infinite;
	}
	@keyframes fall-55 {
		59.38% {
			transform: translate(91.9551vw, 59.38vh) scale(0.9363);
		}
		to {
			transform: translate(93.67425vw, 100vh) scale(0.9363);
		}
	}
	.snow:nth-child(56) {
		opacity: 0.2378;
		transform: translate(19.7283vw, -10px) scale(0.7599);
		animation: fall-56 24s -10s linear infinite;
	}
	@keyframes fall-56 {
		68.044% {
			transform: translate(24.7263vw, 68.044vh) scale(0.7599);
		}
		to {
			transform: translate(22.2273vw, 100vh) scale(0.7599);
		}
	}
	.snow:nth-child(57) {
		opacity: 0.1587;
		transform: translate(75.8718vw, -10px) scale(0.7134);
		animation: fall-57 22s -30s linear infinite;
	}
	@keyframes fall-57 {
		65.766% {
			transform: translate(72.4106vw, 65.766vh) scale(0.7134);
		}
		to {
			transform: translate(74.1412vw, 100vh) scale(0.7134);
		}
	}
	.snow:nth-child(58) {
		opacity: 0.7753;
		transform: translate(88.0752vw, -10px) scale(0.0058);
		animation: fall-58 19s -5s linear infinite;
	}
	@keyframes fall-58 {
		39.661% {
			transform: translate(91.6569vw, 39.661vh) scale(0.0058);
		}
		to {
			transform: translate(89.86605vw, 100vh) scale(0.0058);
		}
	}
	.snow:nth-child(59) {
		opacity: 0.497;
		transform: translate(97.9144vw, -10px) scale(0.6663);
		animation: fall-59 24s -5s linear infinite;
	}
	@keyframes fall-59 {
		32.187% {
			transform: translate(102.0634vw, 32.187vh) scale(0.6663);
		}
		to {
			transform: translate(99.9889vw, 100vh) scale(0.6663);
		}
	}
	.snow:nth-child(60) {
		opacity: 0.1545;
		transform: translate(6.7356vw, -10px) scale(0.2382);
		animation: fall-60 12s -24s linear infinite;
	}
	@keyframes fall-60 {
		41.992% {
			transform: translate(-1.033vw, 41.992vh) scale(0.2382);
		}
		to {
			transform: translate(2.8513vw, 100vh) scale(0.2382);
		}
	}
	.snow:nth-child(61) {
		opacity: 0.392;
		transform: translate(25.2085vw, -10px) scale(0.125);
		animation: fall-61 21s -5s linear infinite;
	}
	@keyframes fall-61 {
		41.216% {
			transform: translate(25.2053vw, 41.216vh) scale(0.125);
		}
		to {
			transform: translate(25.2069vw, 100vh) scale(0.125);
		}
	}
	.snow:nth-child(62) {
		opacity: 0.9118;
		transform: translate(52.0211vw, -10px) scale(0.4906);
		animation: fall-62 17s -17s linear infinite;
	}
	@keyframes fall-62 {
		65.832% {
			transform: translate(45.8722vw, 65.832vh) scale(0.4906);
		}
		to {
			transform: translate(48.94665vw, 100vh) scale(0.4906);
		}
	}
	.snow:nth-child(63) {
		opacity: 0.5249;
		transform: translate(62.2045vw, -10px) scale(0.1588);
		animation: fall-63 27s -18s linear infinite;
	}
	@keyframes fall-63 {
		64.614% {
			transform: translate(58.0737vw, 64.614vh) scale(0.1588);
		}
		to {
			transform: translate(60.1391vw, 100vh) scale(0.1588);
		}
	}
	.snow:nth-child(64) {
		opacity: 0.6987;
		transform: translate(88.5122vw, -10px) scale(0.5422);
		animation: fall-64 14s -19s linear infinite;
	}
	@keyframes fall-64 {
		67.795% {
			transform: translate(98.1755vw, 67.795vh) scale(0.5422);
		}
		to {
			transform: translate(93.34385vw, 100vh) scale(0.5422);
		}
	}
	.snow:nth-child(65) {
		opacity: 0.8807;
		transform: translate(61.1677vw, -10px) scale(0.4856);
		animation: fall-65 22s -14s linear infinite;
	}
	@keyframes fall-65 {
		71.962% {
			transform: translate(59.6542vw, 71.962vh) scale(0.4856);
		}
		to {
			transform: translate(60.41095vw, 100vh) scale(0.4856);
		}
	}
	.snow:nth-child(66) {
		opacity: 0.6291;
		transform: translate(40.3177vw, -10px) scale(0.5941);
		animation: fall-66 10s -19s linear infinite;
	}
	@keyframes fall-66 {
		34.819% {
			transform: translate(40.3867vw, 34.819vh) scale(0.5941);
		}
		to {
			transform: translate(40.3522vw, 100vh) scale(0.5941);
		}
	}
	.snow:nth-child(67) {
		opacity: 0.7403;
		transform: translate(65.2775vw, -10px) scale(0.812);
		animation: fall-67 16s -7s linear infinite;
	}
	@keyframes fall-67 {
		43.256% {
			transform: translate(61.6569vw, 43.256vh) scale(0.812);
		}
		to {
			transform: translate(63.4672vw, 100vh) scale(0.812);
		}
	}
	.snow:nth-child(68) {
		opacity: 0.6822;
		transform: translate(85.1156vw, -10px) scale(0.0653);
		animation: fall-68 15s -16s linear infinite;
	}
	@keyframes fall-68 {
		60.756% {
			transform: translate(86.2243vw, 60.756vh) scale(0.0653);
		}
		to {
			transform: translate(85.66995vw, 100vh) scale(0.0653);
		}
	}
	.snow:nth-child(69) {
		opacity: 0.2166;
		transform: translate(46.0301vw, -10px) scale(0.3648);
		animation: fall-69 26s -28s linear infinite;
	}
	@keyframes fall-69 {
		69.896% {
			transform: translate(50.8403vw, 69.896vh) scale(0.3648);
		}
		to {
			transform: translate(48.4352vw, 100vh) scale(0.3648);
		}
	}
	.snow:nth-child(70) {
		opacity: 0.8673;
		transform: translate(61.9529vw, -10px) scale(0.4794);
		animation: fall-70 30s -4s linear infinite;
	}
	@keyframes fall-70 {
		45.755% {
			transform: translate(55.4068vw, 45.755vh) scale(0.4794);
		}
		to {
			transform: translate(58.67985vw, 100vh) scale(0.4794);
		}
	}
	.snow:nth-child(71) {
		opacity: 0.246;
		transform: translate(41.7674vw, -10px) scale(0.0158);
		animation: fall-71 13s -2s linear infinite;
	}
	@keyframes fall-71 {
		68.987% {
			transform: translate(42.2124vw, 68.987vh) scale(0.0158);
		}
		to {
			transform: translate(41.9899vw, 100vh) scale(0.0158);
		}
	}
	.snow:nth-child(72) {
		opacity: 0.1811;
		transform: translate(92.2722vw, -10px) scale(0.8074);
		animation: fall-72 14s -28s linear infinite;
	}
	@keyframes fall-72 {
		57.986% {
			transform: translate(95.9331vw, 57.986vh) scale(0.8074);
		}
		to {
			transform: translate(94.10265vw, 100vh) scale(0.8074);
		}
	}
	.snow:nth-child(73) {
		opacity: 0.2816;
		transform: translate(84.6474vw, -10px) scale(0.189);
		animation: fall-73 28s -11s linear infinite;
	}
	@keyframes fall-73 {
		63.823% {
			transform: translate(80.2673vw, 63.823vh) scale(0.189);
		}
		to {
			transform: translate(82.45735vw, 100vh) scale(0.189);
		}
	}
	.snow:nth-child(74) {
		opacity: 0.8171;
		transform: translate(4.0553vw, -10px) scale(0.0088);
		animation: fall-74 24s -25s linear infinite;
	}
	@keyframes fall-74 {
		72.689% {
			transform: translate(13.4904vw, 72.689vh) scale(0.0088);
		}
		to {
			transform: translate(8.77285vw, 100vh) scale(0.0088);
		}
	}
	.snow:nth-child(75) {
		opacity: 0.1171;
		transform: translate(33.8794vw, -10px) scale(0.2674);
		animation: fall-75 28s -3s linear infinite;
	}
	@keyframes fall-75 {
		37.904% {
			transform: translate(36.4095vw, 37.904vh) scale(0.2674);
		}
		to {
			transform: translate(35.14445vw, 100vh) scale(0.2674);
		}
	}
	.snow:nth-child(76) {
		opacity: 0.4329;
		transform: translate(75.6946vw, -10px) scale(0.3338);
		animation: fall-76 23s -7s linear infinite;
	}
	@keyframes fall-76 {
		62.949% {
			transform: translate(84.1356vw, 62.949vh) scale(0.3338);
		}
		to {
			transform: translate(79.9151vw, 100vh) scale(0.3338);
		}
	}
	.snow:nth-child(77) {
		opacity: 0.5691;
		transform: translate(7.6216vw, -10px) scale(0.1232);
		animation: fall-77 13s -8s linear infinite;
	}
	@keyframes fall-77 {
		53.161% {
			transform: translate(6.4071vw, 53.161vh) scale(0.1232);
		}
		to {
			transform: translate(7.01435vw, 100vh) scale(0.1232);
		}
	}
	.snow:nth-child(78) {
		opacity: 0.9823;
		transform: translate(55.3317vw, -10px) scale(0.0023);
		animation: fall-78 14s -20s linear infinite;
	}
	@keyframes fall-78 {
		73.729% {
			transform: translate(58.1516vw, 73.729vh) scale(0.0023);
		}
		to {
			transform: translate(56.74165vw, 100vh) scale(0.0023);
		}
	}
	.snow:nth-child(79) {
		opacity: 0.6676;
		transform: translate(41.6673vw, -10px) scale(0.497);
		animation: fall-79 14s -5s linear infinite;
	}
	@keyframes fall-79 {
		57.899% {
			transform: translate(44.1068vw, 57.899vh) scale(0.497);
		}
		to {
			transform: translate(42.88705vw, 100vh) scale(0.497);
		}
	}
	.snow:nth-child(80) {
		opacity: 0.3447;
		transform: translate(87.5792vw, -10px) scale(0.7418);
		animation: fall-80 17s -16s linear infinite;
	}
	@keyframes fall-80 {
		45.929% {
			transform: translate(93.9973vw, 45.929vh) scale(0.7418);
		}
		to {
			transform: translate(90.78825vw, 100vh) scale(0.7418);
		}
	}
	.snow:nth-child(81) {
		opacity: 0.7678;
		transform: translate(31.5175vw, -10px) scale(0.9519);
		animation: fall-81 25s -25s linear infinite;
	}
	@keyframes fall-81 {
		66.011% {
			transform: translate(21.7978vw, 66.011vh) scale(0.9519);
		}
		to {
			transform: translate(26.65765vw, 100vh) scale(0.9519);
		}
	}
	.snow:nth-child(82) {
		opacity: 0.7125;
		transform: translate(55.2448vw, -10px) scale(0.0881);
		animation: fall-82 14s -27s linear infinite;
	}
	@keyframes fall-82 {
		63.512% {
			transform: translate(65.1928vw, 63.512vh) scale(0.0881);
		}
		to {
			transform: translate(60.2188vw, 100vh) scale(0.0881);
		}
	}
	.snow:nth-child(83) {
		opacity: 0.1687;
		transform: translate(70.1115vw, -10px) scale(0.5515);
		animation: fall-83 22s -1s linear infinite;
	}
	@keyframes fall-83 {
		63.163% {
			transform: translate(77.095vw, 63.163vh) scale(0.5515);
		}
		to {
			transform: translate(73.60325vw, 100vh) scale(0.5515);
		}
	}
	.snow:nth-child(84) {
		opacity: 0.8078;
		transform: translate(44.4316vw, -10px) scale(0.7142);
		animation: fall-84 25s -4s linear infinite;
	}
	@keyframes fall-84 {
		76.965% {
			transform: translate(40.7771vw, 76.965vh) scale(0.7142);
		}
		to {
			transform: translate(42.60435vw, 100vh) scale(0.7142);
		}
	}
	.snow:nth-child(85) {
		opacity: 0.2864;
		transform: translate(50.294vw, -10px) scale(0.266);
		animation: fall-85 18s -8s linear infinite;
	}
	@keyframes fall-85 {
		49.601% {
			transform: translate(56.5642vw, 49.601vh) scale(0.266);
		}
		to {
			transform: translate(53.4291vw, 100vh) scale(0.266);
		}
	}
	.snow:nth-child(86) {
		opacity: 0.0825;
		transform: translate(9.4855vw, -10px) scale(0.3949);
		animation: fall-86 16s -10s linear infinite;
	}
	@keyframes fall-86 {
		60.943% {
			transform: translate(0.8327vw, 60.943vh) scale(0.3949);
		}
		to {
			transform: translate(5.1591vw, 100vh) scale(0.3949);
		}
	}
	.snow:nth-child(87) {
		opacity: 0.1044;
		transform: translate(49.9193vw, -10px) scale(0.4854);
		animation: fall-87 16s -5s linear infinite;
	}
	@keyframes fall-87 {
		33.565% {
			transform: translate(40.9305vw, 33.565vh) scale(0.4854);
		}
		to {
			transform: translate(45.4249vw, 100vh) scale(0.4854);
		}
	}
	.snow:nth-child(88) {
		opacity: 0.4563;
		transform: translate(76.0199vw, -10px) scale(0.6864);
		animation: fall-88 16s -25s linear infinite;
	}
	@keyframes fall-88 {
		53.044% {
			transform: translate(81.4085vw, 53.044vh) scale(0.6864);
		}
		to {
			transform: translate(78.7142vw, 100vh) scale(0.6864);
		}
	}
	.snow:nth-child(89) {
		opacity: 0.0004;
		transform: translate(27.4089vw, -10px) scale(0.7438);
		animation: fall-89 27s -19s linear infinite;
	}
	@keyframes fall-89 {
		43.431% {
			transform: translate(33.7084vw, 43.431vh) scale(0.7438);
		}
		to {
			transform: translate(30.55865vw, 100vh) scale(0.7438);
		}
	}
	.snow:nth-child(90) {
		opacity: 0.2609;
		transform: translate(4.3026vw, -10px) scale(0.6316);
		animation: fall-90 29s -6s linear infinite;
	}
	@keyframes fall-90 {
		61.278% {
			transform: translate(0.4182vw, 61.278vh) scale(0.6316);
		}
		to {
			transform: translate(2.3604vw, 100vh) scale(0.6316);
		}
	}
	.snow:nth-child(91) {
		opacity: 0.287;
		transform: translate(27.6315vw, -10px) scale(0.6982);
		animation: fall-91 30s -1s linear infinite;
	}
	@keyframes fall-91 {
		39.911% {
			transform: translate(30.8888vw, 39.911vh) scale(0.6982);
		}
		to {
			transform: translate(29.26015vw, 100vh) scale(0.6982);
		}
	}
	.snow:nth-child(92) {
		opacity: 0.2709;
		transform: translate(23.9384vw, -10px) scale(0.6505);
		animation: fall-92 18s -23s linear infinite;
	}
	@keyframes fall-92 {
		66.938% {
			transform: translate(33.1852vw, 66.938vh) scale(0.6505);
		}
		to {
			transform: translate(28.5618vw, 100vh) scale(0.6505);
		}
	}
	.snow:nth-child(93) {
		opacity: 0.8311;
		transform: translate(30.0839vw, -10px) scale(0.6998);
		animation: fall-93 24s -21s linear infinite;
	}
	@keyframes fall-93 {
		77.717% {
			transform: translate(35.5024vw, 77.717vh) scale(0.6998);
		}
		to {
			transform: translate(32.79315vw, 100vh) scale(0.6998);
		}
	}
	.snow:nth-child(94) {
		opacity: 0.9554;
		transform: translate(5.3672vw, -10px) scale(0.3996);
		animation: fall-94 26s -18s linear infinite;
	}
	@keyframes fall-94 {
		50.753% {
			transform: translate(7.7424vw, 50.753vh) scale(0.3996);
		}
		to {
			transform: translate(6.5548vw, 100vh) scale(0.3996);
		}
	}
	.snow:nth-child(95) {
		opacity: 0.2446;
		transform: translate(19.792vw, -10px) scale(0.5752);
		animation: fall-95 17s -25s linear infinite;
	}
	@keyframes fall-95 {
		49.035% {
			transform: translate(19.2843vw, 49.035vh) scale(0.5752);
		}
		to {
			transform: translate(19.53815vw, 100vh) scale(0.5752);
		}
	}
	.snow:nth-child(96) {
		opacity: 0.5664;
		transform: translate(65.1973vw, -10px) scale(0.2042);
		animation: fall-96 10s -29s linear infinite;
	}
	@keyframes fall-96 {
		64.279% {
			transform: translate(68.0946vw, 64.279vh) scale(0.2042);
		}
		to {
			transform: translate(66.64595vw, 100vh) scale(0.2042);
		}
	}
	.snow:nth-child(97) {
		opacity: 0.7942;
		transform: translate(47.1199vw, -10px) scale(0.8664);
		animation: fall-97 12s -9s linear infinite;
	}
	@keyframes fall-97 {
		62.535% {
			transform: translate(38.5917vw, 62.535vh) scale(0.8664);
		}
		to {
			transform: translate(42.8558vw, 100vh) scale(0.8664);
		}
	}
	.snow:nth-child(98) {
		opacity: 0.582;
		transform: translate(35.7921vw, -10px) scale(0.664);
		animation: fall-98 15s -21s linear infinite;
	}
	@keyframes fall-98 {
		45.879% {
			transform: translate(26.4628vw, 45.879vh) scale(0.664);
		}
		to {
			transform: translate(31.12745vw, 100vh) scale(0.664);
		}
	}
	.snow:nth-child(99) {
		opacity: 0.2062;
		transform: translate(81.3518vw, -10px) scale(0.9008);
		animation: fall-99 28s -5s linear infinite;
	}
	@keyframes fall-99 {
		79.19% {
			transform: translate(75.5616vw, 79.19vh) scale(0.9008);
		}
		to {
			transform: translate(78.4567vw, 100vh) scale(0.9008);
		}
	}
	.snow:nth-child(100) {
		opacity: 0.6448;
		transform: translate(0.0512vw, -10px) scale(0.137);
		animation: fall-100 25s -25s linear infinite;
	}
	@keyframes fall-100 {
		41.969% {
			transform: translate(2.4066vw, 41.969vh) scale(0.137);
		}
		to {
			transform: translate(1.2289vw, 100vh) scale(0.137);
		}
	}
	.snow:nth-child(101) {
		opacity: 0.7594;
		transform: translate(50.2815vw, -10px) scale(0.8729);
		animation: fall-101 24s -12s linear infinite;
	}
	@keyframes fall-101 {
		54.029% {
			transform: translate(49.7447vw, 54.029vh) scale(0.8729);
		}
		to {
			transform: translate(50.0131vw, 100vh) scale(0.8729);
		}
	}
	.snow:nth-child(102) {
		opacity: 0.2818;
		transform: translate(0.3484vw, -10px) scale(0.3175);
		animation: fall-102 27s -2s linear infinite;
	}
	@keyframes fall-102 {
		49.924% {
			transform: translate(7.9545vw, 49.924vh) scale(0.3175);
		}
		to {
			transform: translate(4.15145vw, 100vh) scale(0.3175);
		}
	}
	.snow:nth-child(103) {
		opacity: 0.1064;
		transform: translate(99.1575vw, -10px) scale(0.1686);
		animation: fall-103 23s -23s linear infinite;
	}
	@keyframes fall-103 {
		63.763% {
			transform: translate(109.0203vw, 63.763vh) scale(0.1686);
		}
		to {
			transform: translate(104.0889vw, 100vh) scale(0.1686);
		}
	}
	.snow:nth-child(104) {
		opacity: 0.553;
		transform: translate(11.5336vw, -10px) scale(0.0304);
		animation: fall-104 26s -18s linear infinite;
	}
	@keyframes fall-104 {
		57.688% {
			transform: translate(20.8183vw, 57.688vh) scale(0.0304);
		}
		to {
			transform: translate(16.17595vw, 100vh) scale(0.0304);
		}
	}
	.snow:nth-child(105) {
		opacity: 0.6258;
		transform: translate(81.0692vw, -10px) scale(0.3794);
		animation: fall-105 11s -14s linear infinite;
	}
	@keyframes fall-105 {
		45.629% {
			transform: translate(73.1022vw, 45.629vh) scale(0.3794);
		}
		to {
			transform: translate(77.0857vw, 100vh) scale(0.3794);
		}
	}
	.snow:nth-child(106) {
		opacity: 0.3937;
		transform: translate(55.4027vw, -10px) scale(0.8682);
		animation: fall-106 25s -30s linear infinite;
	}
	@keyframes fall-106 {
		62.825% {
			transform: translate(58.6402vw, 62.825vh) scale(0.8682);
		}
		to {
			transform: translate(57.02145vw, 100vh) scale(0.8682);
		}
	}
	.snow:nth-child(107) {
		opacity: 0.1617;
		transform: translate(81.8081vw, -10px) scale(0.9122);
		animation: fall-107 16s -11s linear infinite;
	}
	@keyframes fall-107 {
		46.728% {
			transform: translate(89.422vw, 46.728vh) scale(0.9122);
		}
		to {
			transform: translate(85.61505vw, 100vh) scale(0.9122);
		}
	}
	.snow:nth-child(108) {
		opacity: 0.4104;
		transform: translate(53.5943vw, -10px) scale(0.4265);
		animation: fall-108 21s -27s linear infinite;
	}
	@keyframes fall-108 {
		41.745% {
			transform: translate(55.3472vw, 41.745vh) scale(0.4265);
		}
		to {
			transform: translate(54.47075vw, 100vh) scale(0.4265);
		}
	}
	.snow:nth-child(109) {
		opacity: 0.8055;
		transform: translate(56.642vw, -10px) scale(0.3891);
		animation: fall-109 30s -16s linear infinite;
	}
	@keyframes fall-109 {
		73.101% {
			transform: translate(47.0597vw, 73.101vh) scale(0.3891);
		}
		to {
			transform: translate(51.85085vw, 100vh) scale(0.3891);
		}
	}
	.snow:nth-child(110) {
		opacity: 0.5673;
		transform: translate(27.6539vw, -10px) scale(0.9521);
		animation: fall-110 25s -15s linear infinite;
	}
	@keyframes fall-110 {
		77.331% {
			transform: translate(31.8042vw, 77.331vh) scale(0.9521);
		}
		to {
			transform: translate(29.72905vw, 100vh) scale(0.9521);
		}
	}
	.snow:nth-child(111) {
		opacity: 0.49;
		transform: translate(94.374vw, -10px) scale(0.2988);
		animation: fall-111 19s -7s linear infinite;
	}
	@keyframes fall-111 {
		35.365% {
			transform: translate(101.6383vw, 35.365vh) scale(0.2988);
		}
		to {
			transform: translate(98.00615vw, 100vh) scale(0.2988);
		}
	}
	.snow:nth-child(112) {
		opacity: 0.7258;
		transform: translate(14.6737vw, -10px) scale(0.5736);
		animation: fall-112 14s -23s linear infinite;
	}
	@keyframes fall-112 {
		48.97% {
			transform: translate(21.9883vw, 48.97vh) scale(0.5736);
		}
		to {
			transform: translate(18.331vw, 100vh) scale(0.5736);
		}
	}
	.snow:nth-child(113) {
		opacity: 0.9812;
		transform: translate(0.7344vw, -10px) scale(0.4266);
		animation: fall-113 12s -4s linear infinite;
	}
	@keyframes fall-113 {
		78.545% {
			transform: translate(-5.5358vw, 78.545vh) scale(0.4266);
		}
		to {
			transform: translate(-2.4007vw, 100vh) scale(0.4266);
		}
	}
	.snow:nth-child(114) {
		opacity: 0.2248;
		transform: translate(6.7131vw, -10px) scale(0.9649);
		animation: fall-114 10s -8s linear infinite;
	}
	@keyframes fall-114 {
		62.543% {
			transform: translate(12.9916vw, 62.543vh) scale(0.9649);
		}
		to {
			transform: translate(9.85235vw, 100vh) scale(0.9649);
		}
	}
	.snow:nth-child(115) {
		opacity: 0.476;
		transform: translate(28.7885vw, -10px) scale(0.0984);
		animation: fall-115 29s -19s linear infinite;
	}
	@keyframes fall-115 {
		67.844% {
			transform: translate(32.0845vw, 67.844vh) scale(0.0984);
		}
		to {
			transform: translate(30.4365vw, 100vh) scale(0.0984);
		}
	}
	.snow:nth-child(116) {
		opacity: 0.4256;
		transform: translate(51.2677vw, -10px) scale(0.9317);
		animation: fall-116 20s -15s linear infinite;
	}
	@keyframes fall-116 {
		69.23% {
			transform: translate(50.611vw, 69.23vh) scale(0.9317);
		}
		to {
			transform: translate(50.93935vw, 100vh) scale(0.9317);
		}
	}
	.snow:nth-child(117) {
		opacity: 0.8405;
		transform: translate(94.9895vw, -10px) scale(0.8576);
		animation: fall-117 17s -10s linear infinite;
	}
	@keyframes fall-117 {
		52.672% {
			transform: translate(93.0812vw, 52.672vh) scale(0.8576);
		}
		to {
			transform: translate(94.03535vw, 100vh) scale(0.8576);
		}
	}
	.snow:nth-child(118) {
		opacity: 0.0538;
		transform: translate(79.5219vw, -10px) scale(0.0759);
		animation: fall-118 13s -20s linear infinite;
	}
	@keyframes fall-118 {
		58.685% {
			transform: translate(83.9962vw, 58.685vh) scale(0.0759);
		}
		to {
			transform: translate(81.75905vw, 100vh) scale(0.0759);
		}
	}
	.snow:nth-child(119) {
		opacity: 0.1824;
		transform: translate(23.4123vw, -10px) scale(0.3028);
		animation: fall-119 28s -15s linear infinite;
	}
	@keyframes fall-119 {
		42.724% {
			transform: translate(31.1336vw, 42.724vh) scale(0.3028);
		}
		to {
			transform: translate(27.27295vw, 100vh) scale(0.3028);
		}
	}
	.snow:nth-child(120) {
		opacity: 0.0291;
		transform: translate(32.9638vw, -10px) scale(0.9624);
		animation: fall-120 23s -12s linear infinite;
	}
	@keyframes fall-120 {
		60.838% {
			transform: translate(41.2613vw, 60.838vh) scale(0.9624);
		}
		to {
			transform: translate(37.11255vw, 100vh) scale(0.9624);
		}
	}
	.snow:nth-child(121) {
		opacity: 0.9673;
		transform: translate(73.19vw, -10px) scale(0.3178);
		animation: fall-121 28s -13s linear infinite;
	}
	@keyframes fall-121 {
		57.269% {
			transform: translate(73.8182vw, 57.269vh) scale(0.3178);
		}
		to {
			transform: translate(73.5041vw, 100vh) scale(0.3178);
		}
	}
	.snow:nth-child(122) {
		opacity: 0.8848;
		transform: translate(2.2161vw, -10px) scale(0.9721);
		animation: fall-122 23s -10s linear infinite;
	}
	@keyframes fall-122 {
		52.876% {
			transform: translate(-1.8462vw, 52.876vh) scale(0.9721);
		}
		to {
			transform: translate(0.18495vw, 100vh) scale(0.9721);
		}
	}
	.snow:nth-child(123) {
		opacity: 0.2931;
		transform: translate(97.0951vw, -10px) scale(0.0929);
		animation: fall-123 17s -19s linear infinite;
	}
	@keyframes fall-123 {
		69.64% {
			transform: translate(92.0341vw, 69.64vh) scale(0.0929);
		}
		to {
			transform: translate(94.5646vw, 100vh) scale(0.0929);
		}
	}
	.snow:nth-child(124) {
		opacity: 0.4457;
		transform: translate(11.6053vw, -10px) scale(0.3801);
		animation: fall-124 14s -8s linear infinite;
	}
	@keyframes fall-124 {
		70.661% {
			transform: translate(6.2853vw, 70.661vh) scale(0.3801);
		}
		to {
			transform: translate(8.9453vw, 100vh) scale(0.3801);
		}
	}
	.snow:nth-child(125) {
		opacity: 0.6877;
		transform: translate(44.5464vw, -10px) scale(0.6964);
		animation: fall-125 14s -24s linear infinite;
	}
	@keyframes fall-125 {
		41.419% {
			transform: translate(43.6558vw, 41.419vh) scale(0.6964);
		}
		to {
			transform: translate(44.1011vw, 100vh) scale(0.6964);
		}
	}
	.snow:nth-child(126) {
		opacity: 0.8736;
		transform: translate(32.4532vw, -10px) scale(0.3713);
		animation: fall-126 13s -25s linear infinite;
	}
	@keyframes fall-126 {
		71.875% {
			transform: translate(25.0157vw, 71.875vh) scale(0.3713);
		}
		to {
			transform: translate(28.73445vw, 100vh) scale(0.3713);
		}
	}
	.snow:nth-child(127) {
		opacity: 0.8631;
		transform: translate(79.1517vw, -10px) scale(0.0138);
		animation: fall-127 21s -19s linear infinite;
	}
	@keyframes fall-127 {
		59.981% {
			transform: translate(82.5152vw, 59.981vh) scale(0.0138);
		}
		to {
			transform: translate(80.83345vw, 100vh) scale(0.0138);
		}
	}
	.snow:nth-child(128) {
		opacity: 0.2427;
		transform: translate(96.3442vw, -10px) scale(0.2933);
		animation: fall-128 19s -25s linear infinite;
	}
	@keyframes fall-128 {
		38.035% {
			transform: translate(98.2394vw, 38.035vh) scale(0.2933);
		}
		to {
			transform: translate(97.2918vw, 100vh) scale(0.2933);
		}
	}
	.snow:nth-child(129) {
		opacity: 0.0139;
		transform: translate(42.5651vw, -10px) scale(0.7993);
		animation: fall-129 23s -27s linear infinite;
	}
	@keyframes fall-129 {
		32.533% {
			transform: translate(37.1499vw, 32.533vh) scale(0.7993);
		}
		to {
			transform: translate(39.8575vw, 100vh) scale(0.7993);
		}
	}
	.snow:nth-child(130) {
		opacity: 0.0151;
		transform: translate(23.6913vw, -10px) scale(0.0175);
		animation: fall-130 18s -30s linear infinite;
	}
	@keyframes fall-130 {
		35.291% {
			transform: translate(21.5931vw, 35.291vh) scale(0.0175);
		}
		to {
			transform: translate(22.6422vw, 100vh) scale(0.0175);
		}
	}
	.snow:nth-child(131) {
		opacity: 0.9464;
		transform: translate(6.0154vw, -10px) scale(0.6212);
		animation: fall-131 25s -14s linear infinite;
	}
	@keyframes fall-131 {
		33.232% {
			transform: translate(14.1302vw, 33.232vh) scale(0.6212);
		}
		to {
			transform: translate(10.0728vw, 100vh) scale(0.6212);
		}
	}
	.snow:nth-child(132) {
		opacity: 0.9821;
		transform: translate(55.9633vw, -10px) scale(0.0752);
		animation: fall-132 27s -23s linear infinite;
	}
	@keyframes fall-132 {
		41.522% {
			transform: translate(65.7803vw, 41.522vh) scale(0.0752);
		}
		to {
			transform: translate(60.8718vw, 100vh) scale(0.0752);
		}
	}
	.snow:nth-child(133) {
		opacity: 0.0126;
		transform: translate(94.0689vw, -10px) scale(0.0967);
		animation: fall-133 20s -20s linear infinite;
	}
	@keyframes fall-133 {
		75.765% {
			transform: translate(89.013vw, 75.765vh) scale(0.0967);
		}
		to {
			transform: translate(91.54095vw, 100vh) scale(0.0967);
		}
	}
	.snow:nth-child(134) {
		opacity: 0.8069;
		transform: translate(82.8759vw, -10px) scale(0.8404);
		animation: fall-134 23s -15s linear infinite;
	}
	@keyframes fall-134 {
		79.299% {
			transform: translate(86.2097vw, 79.299vh) scale(0.8404);
		}
		to {
			transform: translate(84.5428vw, 100vh) scale(0.8404);
		}
	}
	.snow:nth-child(135) {
		opacity: 0.9926;
		transform: translate(51.621vw, -10px) scale(0.2732);
		animation: fall-135 13s -17s linear infinite;
	}
	@keyframes fall-135 {
		51.215% {
			transform: translate(59.4278vw, 51.215vh) scale(0.2732);
		}
		to {
			transform: translate(55.5244vw, 100vh) scale(0.2732);
		}
	}
	.snow:nth-child(136) {
		opacity: 0.7163;
		transform: translate(13.9717vw, -10px) scale(0.0088);
		animation: fall-136 10s -20s linear infinite;
	}
	@keyframes fall-136 {
		64.28% {
			transform: translate(5.0621vw, 64.28vh) scale(0.0088);
		}
		to {
			transform: translate(9.5169vw, 100vh) scale(0.0088);
		}
	}
	.snow:nth-child(137) {
		opacity: 0.1646;
		transform: translate(94.0686vw, -10px) scale(0.8205);
		animation: fall-137 21s -13s linear infinite;
	}
	@keyframes fall-137 {
		77.246% {
			transform: translate(91.7073vw, 77.246vh) scale(0.8205);
		}
		to {
			transform: translate(92.88795vw, 100vh) scale(0.8205);
		}
	}
	.snow:nth-child(138) {
		opacity: 0.0272;
		transform: translate(31.0361vw, -10px) scale(0.929);
		animation: fall-138 30s -17s linear infinite;
	}
	@keyframes fall-138 {
		44.742% {
			transform: translate(25.6782vw, 44.742vh) scale(0.929);
		}
		to {
			transform: translate(28.35715vw, 100vh) scale(0.929);
		}
	}
	.snow:nth-child(139) {
		opacity: 0.3646;
		transform: translate(8.5269vw, -10px) scale(0.69);
		animation: fall-139 16s -2s linear infinite;
	}
	@keyframes fall-139 {
		42.379% {
			transform: translate(1.1603vw, 42.379vh) scale(0.69);
		}
		to {
			transform: translate(4.8436vw, 100vh) scale(0.69);
		}
	}
	.snow:nth-child(140) {
		opacity: 0.6574;
		transform: translate(43.2374vw, -10px) scale(0.082);
		animation: fall-140 12s -3s linear infinite;
	}
	@keyframes fall-140 {
		77.525% {
			transform: translate(48.0126vw, 77.525vh) scale(0.082);
		}
		to {
			transform: translate(45.625vw, 100vh) scale(0.082);
		}
	}
	.snow:nth-child(141) {
		opacity: 0.0254;
		transform: translate(11.0316vw, -10px) scale(0.9244);
		animation: fall-141 16s -4s linear infinite;
	}
	@keyframes fall-141 {
		30.215% {
			transform: translate(8.5814vw, 30.215vh) scale(0.9244);
		}
		to {
			transform: translate(9.8065vw, 100vh) scale(0.9244);
		}
	}
	.snow:nth-child(142) {
		opacity: 0.1804;
		transform: translate(21.0398vw, -10px) scale(0.2144);
		animation: fall-142 28s -12s linear infinite;
	}
	@keyframes fall-142 {
		37.094% {
			transform: translate(25.3999vw, 37.094vh) scale(0.2144);
		}
		to {
			transform: translate(23.21985vw, 100vh) scale(0.2144);
		}
	}
	.snow:nth-child(143) {
		opacity: 0.8107;
		transform: translate(5.214vw, -10px) scale(0.0294);
		animation: fall-143 20s -6s linear infinite;
	}
	@keyframes fall-143 {
		57.424% {
			transform: translate(11.2483vw, 57.424vh) scale(0.0294);
		}
		to {
			transform: translate(8.23115vw, 100vh) scale(0.0294);
		}
	}
	.snow:nth-child(144) {
		opacity: 0.951;
		transform: translate(61.8634vw, -10px) scale(0.7163);
		animation: fall-144 26s -1s linear infinite;
	}
	@keyframes fall-144 {
		52.754% {
			transform: translate(55.9545vw, 52.754vh) scale(0.7163);
		}
		to {
			transform: translate(58.90895vw, 100vh) scale(0.7163);
		}
	}
	.snow:nth-child(145) {
		opacity: 0.7018;
		transform: translate(67.6841vw, -10px) scale(0.319);
		animation: fall-145 24s -16s linear infinite;
	}
	@keyframes fall-145 {
		34.422% {
			transform: translate(62.2783vw, 34.422vh) scale(0.319);
		}
		to {
			transform: translate(64.9812vw, 100vh) scale(0.319);
		}
	}
	.snow:nth-child(146) {
		opacity: 0.6769;
		transform: translate(2.4673vw, -10px) scale(0.8738);
		animation: fall-146 27s -3s linear infinite;
	}
	@keyframes fall-146 {
		41.167% {
			transform: translate(0.7618vw, 41.167vh) scale(0.8738);
		}
		to {
			transform: translate(1.61455vw, 100vh) scale(0.8738);
		}
	}
	.snow:nth-child(147) {
		opacity: 0.1823;
		transform: translate(24.9657vw, -10px) scale(0.6773);
		animation: fall-147 30s -11s linear infinite;
	}
	@keyframes fall-147 {
		60.116% {
			transform: translate(31.5062vw, 60.116vh) scale(0.6773);
		}
		to {
			transform: translate(28.23595vw, 100vh) scale(0.6773);
		}
	}
	.snow:nth-child(148) {
		opacity: 0.9033;
		transform: translate(12.9378vw, -10px) scale(0.5774);
		animation: fall-148 10s -16s linear infinite;
	}
	@keyframes fall-148 {
		73.551% {
			transform: translate(14.3601vw, 73.551vh) scale(0.5774);
		}
		to {
			transform: translate(13.64895vw, 100vh) scale(0.5774);
		}
	}
	.snow:nth-child(149) {
		opacity: 0.7243;
		transform: translate(20.6654vw, -10px) scale(0.2745);
		animation: fall-149 26s -21s linear infinite;
	}
	@keyframes fall-149 {
		48.787% {
			transform: translate(23.44vw, 48.787vh) scale(0.2745);
		}
		to {
			transform: translate(22.0527vw, 100vh) scale(0.2745);
		}
	}
	.snow:nth-child(150) {
		opacity: 0.6241;
		transform: translate(79.3629vw, -10px) scale(0.3313);
		animation: fall-150 15s -1s linear infinite;
	}
	@keyframes fall-150 {
		31.488% {
			transform: translate(75.0479vw, 31.488vh) scale(0.3313);
		}
		to {
			transform: translate(77.2054vw, 100vh) scale(0.3313);
		}
	}
	.snow:nth-child(151) {
		opacity: 0.5137;
		transform: translate(95.0134vw, -10px) scale(0.1782);
		animation: fall-151 24s -9s linear infinite;
	}
	@keyframes fall-151 {
		73.173% {
			transform: translate(102.0343vw, 73.173vh) scale(0.1782);
		}
		to {
			transform: translate(98.52385vw, 100vh) scale(0.1782);
		}
	}
	.snow:nth-child(152) {
		opacity: 0.7335;
		transform: translate(75.5872vw, -10px) scale(0.0572);
		animation: fall-152 26s -23s linear infinite;
	}
	@keyframes fall-152 {
		67.231% {
			transform: translate(79.7432vw, 67.231vh) scale(0.0572);
		}
		to {
			transform: translate(77.6652vw, 100vh) scale(0.0572);
		}
	}
	.snow:nth-child(153) {
		opacity: 0.6763;
		transform: translate(79.2447vw, -10px) scale(0.1669);
		animation: fall-153 13s -29s linear infinite;
	}
	@keyframes fall-153 {
		51.331% {
			transform: translate(87.3987vw, 51.331vh) scale(0.1669);
		}
		to {
			transform: translate(83.3217vw, 100vh) scale(0.1669);
		}
	}
	.snow:nth-child(154) {
		opacity: 0.004;
		transform: translate(83.0817vw, -10px) scale(0.0531);
		animation: fall-154 13s -15s linear infinite;
	}
	@keyframes fall-154 {
		71.012% {
			transform: translate(79.1298vw, 71.012vh) scale(0.0531);
		}
		to {
			transform: translate(81.10575vw, 100vh) scale(0.0531);
		}
	}
	.snow:nth-child(155) {
		opacity: 0.5525;
		transform: translate(7.7068vw, -10px) scale(0.0968);
		animation: fall-155 20s -18s linear infinite;
	}
	@keyframes fall-155 {
		38.026% {
			transform: translate(6.3668vw, 38.026vh) scale(0.0968);
		}
		to {
			transform: translate(7.0368vw, 100vh) scale(0.0968);
		}
	}
	.snow:nth-child(156) {
		opacity: 0.2632;
		transform: translate(29.1678vw, -10px) scale(0.4309);
		animation: fall-156 22s -3s linear infinite;
	}
	@keyframes fall-156 {
		69.482% {
			transform: translate(23.5255vw, 69.482vh) scale(0.4309);
		}
		to {
			transform: translate(26.34665vw, 100vh) scale(0.4309);
		}
	}
	.snow:nth-child(157) {
		opacity: 0.2249;
		transform: translate(51.688vw, -10px) scale(0.0799);
		animation: fall-157 14s -27s linear infinite;
	}
	@keyframes fall-157 {
		36.192% {
			transform: translate(44.7362vw, 36.192vh) scale(0.0799);
		}
		to {
			transform: translate(48.2121vw, 100vh) scale(0.0799);
		}
	}
	.snow:nth-child(158) {
		opacity: 0.466;
		transform: translate(32.1195vw, -10px) scale(0.9955);
		animation: fall-158 30s -13s linear infinite;
	}
	@keyframes fall-158 {
		70.477% {
			transform: translate(41.1158vw, 70.477vh) scale(0.9955);
		}
		to {
			transform: translate(36.61765vw, 100vh) scale(0.9955);
		}
	}
	.snow:nth-child(159) {
		opacity: 0.467;
		transform: translate(69.0237vw, -10px) scale(0.7041);
		animation: fall-159 13s -22s linear infinite;
	}
	@keyframes fall-159 {
		61.024% {
			transform: translate(61.2635vw, 61.024vh) scale(0.7041);
		}
		to {
			transform: translate(65.1436vw, 100vh) scale(0.7041);
		}
	}
	.snow:nth-child(160) {
		opacity: 0.1412;
		transform: translate(73.7094vw, -10px) scale(0.2901);
		animation: fall-160 20s -13s linear infinite;
	}
	@keyframes fall-160 {
		36.616% {
			transform: translate(80.8307vw, 36.616vh) scale(0.2901);
		}
		to {
			transform: translate(77.27005vw, 100vh) scale(0.2901);
		}
	}
	.snow:nth-child(161) {
		opacity: 0.3471;
		transform: translate(51.6384vw, -10px) scale(0.7298);
		animation: fall-161 14s -12s linear infinite;
	}
	@keyframes fall-161 {
		32.768% {
			transform: translate(52.5055vw, 32.768vh) scale(0.7298);
		}
		to {
			transform: translate(52.07195vw, 100vh) scale(0.7298);
		}
	}
	.snow:nth-child(162) {
		opacity: 0.8557;
		transform: translate(62.7392vw, -10px) scale(0.597);
		animation: fall-162 17s -18s linear infinite;
	}
	@keyframes fall-162 {
		36.295% {
			transform: translate(60.0579vw, 36.295vh) scale(0.597);
		}
		to {
			transform: translate(61.39855vw, 100vh) scale(0.597);
		}
	}
	.snow:nth-child(163) {
		opacity: 0.6104;
		transform: translate(15.2491vw, -10px) scale(0.1207);
		animation: fall-163 13s -10s linear infinite;
	}
	@keyframes fall-163 {
		56.208% {
			transform: translate(11.3054vw, 56.208vh) scale(0.1207);
		}
		to {
			transform: translate(13.27725vw, 100vh) scale(0.1207);
		}
	}
	.snow:nth-child(164) {
		opacity: 0.494;
		transform: translate(65.3696vw, -10px) scale(0.6173);
		animation: fall-164 11s -17s linear infinite;
	}
	@keyframes fall-164 {
		74.989% {
			transform: translate(69.7516vw, 74.989vh) scale(0.6173);
		}
		to {
			transform: translate(67.5606vw, 100vh) scale(0.6173);
		}
	}
	.snow:nth-child(165) {
		opacity: 0.5949;
		transform: translate(88.6475vw, -10px) scale(0.9155);
		animation: fall-165 11s -5s linear infinite;
	}
	@keyframes fall-165 {
		42.207% {
			transform: translate(89.2709vw, 42.207vh) scale(0.9155);
		}
		to {
			transform: translate(88.9592vw, 100vh) scale(0.9155);
		}
	}
	.snow:nth-child(166) {
		opacity: 0.3271;
		transform: translate(41.1616vw, -10px) scale(0.1013);
		animation: fall-166 17s -16s linear infinite;
	}
	@keyframes fall-166 {
		36.308% {
			transform: translate(49.0012vw, 36.308vh) scale(0.1013);
		}
		to {
			transform: translate(45.0814vw, 100vh) scale(0.1013);
		}
	}
	.snow:nth-child(167) {
		opacity: 0.1409;
		transform: translate(87.2252vw, -10px) scale(0.5336);
		animation: fall-167 13s -18s linear infinite;
	}
	@keyframes fall-167 {
		54.67% {
			transform: translate(95.36vw, 54.67vh) scale(0.5336);
		}
		to {
			transform: translate(91.2926vw, 100vh) scale(0.5336);
		}
	}
	.snow:nth-child(168) {
		opacity: 0.4883;
		transform: translate(44.7657vw, -10px) scale(0.1237);
		animation: fall-168 18s -17s linear infinite;
	}
	@keyframes fall-168 {
		53.343% {
			transform: translate(45.2221vw, 53.343vh) scale(0.1237);
		}
		to {
			transform: translate(44.9939vw, 100vh) scale(0.1237);
		}
	}
	.snow:nth-child(169) {
		opacity: 0.4677;
		transform: translate(37.7882vw, -10px) scale(0.9746);
		animation: fall-169 11s -20s linear infinite;
	}
	@keyframes fall-169 {
		60.533% {
			transform: translate(42.2156vw, 60.533vh) scale(0.9746);
		}
		to {
			transform: translate(40.0019vw, 100vh) scale(0.9746);
		}
	}
	.snow:nth-child(170) {
		opacity: 0.8227;
		transform: translate(89.6098vw, -10px) scale(0.9443);
		animation: fall-170 24s -17s linear infinite;
	}
	@keyframes fall-170 {
		78.482% {
			transform: translate(97.3844vw, 78.482vh) scale(0.9443);
		}
		to {
			transform: translate(93.4971vw, 100vh) scale(0.9443);
		}
	}
	.snow:nth-child(171) {
		opacity: 0.3534;
		transform: translate(94.4989vw, -10px) scale(0.4266);
		animation: fall-171 23s -7s linear infinite;
	}
	@keyframes fall-171 {
		74.346% {
			transform: translate(94.0847vw, 74.346vh) scale(0.4266);
		}
		to {
			transform: translate(94.2918vw, 100vh) scale(0.4266);
		}
	}
	.snow:nth-child(172) {
		opacity: 0.6277;
		transform: translate(46.9039vw, -10px) scale(0.5062);
		animation: fall-172 25s -13s linear infinite;
	}
	@keyframes fall-172 {
		55.391% {
			transform: translate(49.5986vw, 55.391vh) scale(0.5062);
		}
		to {
			transform: translate(48.25125vw, 100vh) scale(0.5062);
		}
	}
	.snow:nth-child(173) {
		opacity: 0.4533;
		transform: translate(53.7344vw, -10px) scale(0.1002);
		animation: fall-173 12s -14s linear infinite;
	}
	@keyframes fall-173 {
		63.06% {
			transform: translate(57.5523vw, 63.06vh) scale(0.1002);
		}
		to {
			transform: translate(55.64335vw, 100vh) scale(0.1002);
		}
	}
	.snow:nth-child(174) {
		opacity: 0.7595;
		transform: translate(47.7525vw, -10px) scale(0.1999);
		animation: fall-174 16s -10s linear infinite;
	}
	@keyframes fall-174 {
		59.006% {
			transform: translate(54.6112vw, 59.006vh) scale(0.1999);
		}
		to {
			transform: translate(51.18185vw, 100vh) scale(0.1999);
		}
	}
	.snow:nth-child(175) {
		opacity: 0.6565;
		transform: translate(35.8715vw, -10px) scale(0.2642);
		animation: fall-175 23s -25s linear infinite;
	}
	@keyframes fall-175 {
		33.732% {
			transform: translate(30.9435vw, 33.732vh) scale(0.2642);
		}
		to {
			transform: translate(33.4075vw, 100vh) scale(0.2642);
		}
	}
	.snow:nth-child(176) {
		opacity: 0.0685;
		transform: translate(95.6507vw, -10px) scale(0.4857);
		animation: fall-176 29s -15s linear infinite;
	}
	@keyframes fall-176 {
		62.118% {
			transform: translate(90.7827vw, 62.118vh) scale(0.4857);
		}
		to {
			transform: translate(93.2167vw, 100vh) scale(0.4857);
		}
	}
	.snow:nth-child(177) {
		opacity: 0.3733;
		transform: translate(13.6233vw, -10px) scale(0.6467);
		animation: fall-177 12s -25s linear infinite;
	}
	@keyframes fall-177 {
		70.712% {
			transform: translate(22.0512vw, 70.712vh) scale(0.6467);
		}
		to {
			transform: translate(17.83725vw, 100vh) scale(0.6467);
		}
	}
	.snow:nth-child(178) {
		opacity: 0.7445;
		transform: translate(74.7131vw, -10px) scale(0.8784);
		animation: fall-178 13s -27s linear infinite;
	}
	@keyframes fall-178 {
		79.989% {
			transform: translate(77.679vw, 79.989vh) scale(0.8784);
		}
		to {
			transform: translate(76.19605vw, 100vh) scale(0.8784);
		}
	}
	.snow:nth-child(179) {
		opacity: 0.072;
		transform: translate(13.404vw, -10px) scale(0.8061);
		animation: fall-179 20s -11s linear infinite;
	}
	@keyframes fall-179 {
		31.064% {
			transform: translate(20.4195vw, 31.064vh) scale(0.8061);
		}
		to {
			transform: translate(16.91175vw, 100vh) scale(0.8061);
		}
	}
	.snow:nth-child(180) {
		opacity: 0.2604;
		transform: translate(47.1314vw, -10px) scale(0.9296);
		animation: fall-180 24s -19s linear infinite;
	}
	@keyframes fall-180 {
		62.838% {
			transform: translate(53.7803vw, 62.838vh) scale(0.9296);
		}
		to {
			transform: translate(50.45585vw, 100vh) scale(0.9296);
		}
	}
	.snow:nth-child(181) {
		opacity: 0.2625;
		transform: translate(61.6266vw, -10px) scale(0.5968);
		animation: fall-181 21s -24s linear infinite;
	}
	@keyframes fall-181 {
		43.445% {
			transform: translate(66.0767vw, 43.445vh) scale(0.5968);
		}
		to {
			transform: translate(63.85165vw, 100vh) scale(0.5968);
		}
	}
	.snow:nth-child(182) {
		opacity: 0.1118;
		transform: translate(86.1752vw, -10px) scale(0.3663);
		animation: fall-182 15s -19s linear infinite;
	}
	@keyframes fall-182 {
		74.5% {
			transform: translate(84.5597vw, 74.5vh) scale(0.3663);
		}
		to {
			transform: translate(85.36745vw, 100vh) scale(0.3663);
		}
	}
	.snow:nth-child(183) {
		opacity: 0.1479;
		transform: translate(23.0026vw, -10px) scale(0.4442);
		animation: fall-183 15s -15s linear infinite;
	}
	@keyframes fall-183 {
		40.08% {
			transform: translate(14.0105vw, 40.08vh) scale(0.4442);
		}
		to {
			transform: translate(18.50655vw, 100vh) scale(0.4442);
		}
	}
	.snow:nth-child(184) {
		opacity: 0.6649;
		transform: translate(63.6933vw, -10px) scale(0.8978);
		animation: fall-184 18s -18s linear infinite;
	}
	@keyframes fall-184 {
		33.648% {
			transform: translate(55.7665vw, 33.648vh) scale(0.8978);
		}
		to {
			transform: translate(59.7299vw, 100vh) scale(0.8978);
		}
	}
	.snow:nth-child(185) {
		opacity: 0.826;
		transform: translate(77.871vw, -10px) scale(0.8645);
		animation: fall-185 26s -22s linear infinite;
	}
	@keyframes fall-185 {
		49.842% {
			transform: translate(68.1156vw, 49.842vh) scale(0.8645);
		}
		to {
			transform: translate(72.9933vw, 100vh) scale(0.8645);
		}
	}
	.snow:nth-child(186) {
		opacity: 0.3719;
		transform: translate(84.501vw, -10px) scale(0.274);
		animation: fall-186 13s -25s linear infinite;
	}
	@keyframes fall-186 {
		43.504% {
			transform: translate(90.672vw, 43.504vh) scale(0.274);
		}
		to {
			transform: translate(87.5865vw, 100vh) scale(0.274);
		}
	}
	.snow:nth-child(187) {
		opacity: 0.8871;
		transform: translate(34.5985vw, -10px) scale(0.5038);
		animation: fall-187 29s -16s linear infinite;
	}
	@keyframes fall-187 {
		63.26% {
			transform: translate(28.5056vw, 63.26vh) scale(0.5038);
		}
		to {
			transform: translate(31.55205vw, 100vh) scale(0.5038);
		}
	}
	.snow:nth-child(188) {
		opacity: 0.9593;
		transform: translate(33.4571vw, -10px) scale(0.5251);
		animation: fall-188 21s -22s linear infinite;
	}
	@keyframes fall-188 {
		36.739% {
			transform: translate(24.8343vw, 36.739vh) scale(0.5251);
		}
		to {
			transform: translate(29.1457vw, 100vh) scale(0.5251);
		}
	}
	.snow:nth-child(189) {
		opacity: 0.7263;
		transform: translate(78.0601vw, -10px) scale(0.0308);
		animation: fall-189 12s -19s linear infinite;
	}
	@keyframes fall-189 {
		50.461% {
			transform: translate(77.2698vw, 50.461vh) scale(0.0308);
		}
		to {
			transform: translate(77.66495vw, 100vh) scale(0.0308);
		}
	}
	.snow:nth-child(190) {
		opacity: 0.092;
		transform: translate(25.5526vw, -10px) scale(0.0294);
		animation: fall-190 23s -19s linear infinite;
	}
	@keyframes fall-190 {
		31.31% {
			transform: translate(22.507vw, 31.31vh) scale(0.0294);
		}
		to {
			transform: translate(24.0298vw, 100vh) scale(0.0294);
		}
	}
	.snow:nth-child(191) {
		opacity: 0.9763;
		transform: translate(57.9484vw, -10px) scale(0.0932);
		animation: fall-191 22s -29s linear infinite;
	}
	@keyframes fall-191 {
		43.679% {
			transform: translate(61.1384vw, 43.679vh) scale(0.0932);
		}
		to {
			transform: translate(59.5434vw, 100vh) scale(0.0932);
		}
	}
	.snow:nth-child(192) {
		opacity: 0.8205;
		transform: translate(28.7231vw, -10px) scale(0.0253);
		animation: fall-192 22s -10s linear infinite;
	}
	@keyframes fall-192 {
		57.244% {
			transform: translate(35.3535vw, 57.244vh) scale(0.0253);
		}
		to {
			transform: translate(32.0383vw, 100vh) scale(0.0253);
		}
	}
	.snow:nth-child(193) {
		opacity: 0.156;
		transform: translate(78.6777vw, -10px) scale(0.7647);
		animation: fall-193 18s -2s linear infinite;
	}
	@keyframes fall-193 {
		72.165% {
			transform: translate(81.7425vw, 72.165vh) scale(0.7647);
		}
		to {
			transform: translate(80.2101vw, 100vh) scale(0.7647);
		}
	}
	.snow:nth-child(194) {
		opacity: 0.4008;
		transform: translate(15.4784vw, -10px) scale(0.2046);
		animation: fall-194 30s -11s linear infinite;
	}
	@keyframes fall-194 {
		74.814% {
			transform: translate(21.6985vw, 74.814vh) scale(0.2046);
		}
		to {
			transform: translate(18.58845vw, 100vh) scale(0.2046);
		}
	}
	.snow:nth-child(195) {
		opacity: 0.4796;
		transform: translate(64.7577vw, -10px) scale(0.4748);
		animation: fall-195 21s -7s linear infinite;
	}
	@keyframes fall-195 {
		38.389% {
			transform: translate(70.3694vw, 38.389vh) scale(0.4748);
		}
		to {
			transform: translate(67.56355vw, 100vh) scale(0.4748);
		}
	}
	.snow:nth-child(196) {
		opacity: 0.2987;
		transform: translate(67.1584vw, -10px) scale(0.0587);
		animation: fall-196 13s -7s linear infinite;
	}
	@keyframes fall-196 {
		59.538% {
			transform: translate(63.6492vw, 59.538vh) scale(0.0587);
		}
		to {
			transform: translate(65.4038vw, 100vh) scale(0.0587);
		}
	}
	.snow:nth-child(197) {
		opacity: 0.4125;
		transform: translate(28.4647vw, -10px) scale(0.2505);
		animation: fall-197 15s -28s linear infinite;
	}
	@keyframes fall-197 {
		54.407% {
			transform: translate(20.533vw, 54.407vh) scale(0.2505);
		}
		to {
			transform: translate(24.49885vw, 100vh) scale(0.2505);
		}
	}
	.snow:nth-child(198) {
		opacity: 0.8595;
		transform: translate(8.4046vw, -10px) scale(0.6309);
		animation: fall-198 15s -1s linear infinite;
	}
	@keyframes fall-198 {
		52.583% {
			transform: translate(17.4522vw, 52.583vh) scale(0.6309);
		}
		to {
			transform: translate(12.9284vw, 100vh) scale(0.6309);
		}
	}
	.snow:nth-child(199) {
		opacity: 0.6223;
		transform: translate(52.9492vw, -10px) scale(0.6885);
		animation: fall-199 29s -20s linear infinite;
	}
	@keyframes fall-199 {
		32.011% {
			transform: translate(61.5407vw, 32.011vh) scale(0.6885);
		}
		to {
			transform: translate(57.24495vw, 100vh) scale(0.6885);
		}
	}
	.snow:nth-child(200) {
		opacity: 0.7896;
		transform: translate(46.4811vw, -10px) scale(0.4144);
		animation: fall-200 30s -30s linear infinite;
	}
	@keyframes fall-200 {
		78.603% {
			transform: translate(54.1756vw, 78.603vh) scale(0.4144);
		}
		to {
			transform: translate(50.32835vw, 100vh) scale(0.4144);
		}
	}
</style>
