<template>
	<lp-layout direction="horizontal" class="page">
		<lp-aside width="250" class="p-5">Aside</lp-aside>
		<lp-layout>
			<lp-header>
				<lp-container class="d-flex">
					<lp-row class="page-info">
						<lp-col>
							<h6 class="subtitle">{{ $route.meta.subtitle }}</h6>
							<h1 class="title">{{ $route.meta.title }}</h1>
							<p class="description">
								{{ $route.meta.description }}
							</p>
						</lp-col>
					</lp-row>
				</lp-container>
			</lp-header>
			<router-view class="page-content"></router-view>
		</lp-layout>
	</lp-layout>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.#{$css-prefix}-aside {
	background: $white;
	border-right: 1px solid $border-color;
	box-shadow: $box-shadow-sm;
}

.#{$css-prefix}-header {
	background: rgba($primary-lighter, 0.4);
	min-height: 20rem;
	display: flex;
}
</style>

<style lang="scss">
$title-color: $primary-darker;
$subtitle-color: $primary;
$description-color: $secondary;
.page {
	min-height: 100vh;

	&-info {
		margin: auto 0;

		.title {
			font-size: $display3-size;
			color: $title-color;
			margin-bottom: 0;
		}

		.subtitle {
			color: $subtitle-color;
			font-weight: $font-weight-bold;
			text-transform: uppercase;
			margin-bottom: 0;
		}

		.description {
			color: $description-color;
			font-size: $font-size-lg;
		}
	}

	&-content {
		height: 100%;
		background: $white;
		padding: $grid-gutter-width;
	}

	&-section {
		.title {
			font-size: $display4-size;
			color: $title-color;
			margin-bottom: 0;
		}

		.description {
			color: $description-color;
		}
	}
}

nav {
	margin-bottom: 40px;

	ul {
		display: flex;
		flex-wrap: wrap;
	}
	li {
		display: inline-block;
	}
	li + li {
		border-left: solid 1px $border-color;
		padding-left: 10px;
		margin-left: 10px;
	}
}
</style>
<style lang="scss">
@import '../src/assets/scss/liphu-ui.scss';
</style>
