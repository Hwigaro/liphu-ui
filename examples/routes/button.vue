<template>
	<lp-row>
		<lp-col col="24" class="my-4">
			<h1 class="my-8">Buttons Test</h1>
		</lp-col>
		<lp-col col="24">
			<lp-card title="Buttons Test">
				<div>
					<div class="pagewidth">
						<lp-row>
							<lp-col col="24">
								<h3>Default</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Hollow</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="hollow"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Hollow Hover</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="hollow-hover"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Dashed</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="dashed"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Dashed Hover</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="dashed-hover"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Outline</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="outline"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Ghost</h3>
							</lp-col>

							<lp-col
								v-for="(group, index) in Object.keys(
									grouped
								).filter(g => grouped[g].length > 1)"
								:key="index + guid()"
								col="24"
								lg="12"
								class="mb-4 bg-dark"
							>
								<template
									v-for="(color, idx) in grouped[group]"
								>
									<br
										v-if="idx % 3 == 0 && idx !== 0"
										:key="idx + guid()"
									/>
									<lp-button
										:key="color"
										:variant="color"
										type="ghost"
										class="m-1"
										>{{ formatColorName(color) }}</lp-button
									>
								</template>
							</lp-col>

							<lp-col col="24" class="mt-5">
								<h3>Disabled</h3>
							</lp-col>

							<lp-col col="24" lg="12" class="mb-4">
								<lp-button variant="primary" class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									disabled
									class="m-1"
									>Primary disabled</lp-button
								>
								<lp-button
									variant="primary"
									type="hollow"
									class="m-1"
									>Hollow</lp-button
								>
								<lp-button
									variant="primary"
									type="hollow"
									disabled
									class="m-1"
									>Hollow disabled</lp-button
								>
								<lp-button
									variant="primary"
									type="dashed"
									class="m-1"
									>Dashed</lp-button
								>
								<lp-button
									variant="primary"
									type="dashed"
									disabled
									class="m-1"
									>Dashed disabled</lp-button
								>
								<lp-button
									variant="primary"
									type="outline"
									class="m-1"
									>Outline</lp-button
								>
								<lp-button
									variant="primary"
									type="outline"
									disabled
									class="m-1"
									>Outline disabled</lp-button
								>
								<div class="bg-dark d-inline-block">
									<lp-button
										variant="primary"
										type="ghost"
										disabled
										class="m-1"
										>Ghost disabled</lp-button
									>
								</div>
							</lp-col>
							<lp-col col="24" class="mt-5">
								<h3>Icon</h3>
							</lp-col>
							<lp-col col="24" lg="12" class="mb-4">
								<lp-button
									variant="primary"
									icon="download"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="screen"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="home"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="magnifier"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="magnifier"
									shape="circle"
									class="m-1"
								/>
							</lp-col>
							<lp-col col="24" lg="12" class="mb-4">
								<lp-button
									variant="primary"
									icon="screen"
									size="xs"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="screen"
									size="sm"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="screen"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="screen"
									size="lg"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="home"
									size="xl"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="home"
									size="xxl"
									class="m-1"
									>Primary</lp-button
								>
								<lp-button
									variant="primary"
									icon="magnifier"
									size="xs"
									shape="circle"
									class="m-1"
								/>
								<lp-button
									variant="primary"
									icon="magnifier"
									size="sm"
									shape="circle"
									class="m-1"
								/>
								<lp-button
									variant="primary"
									icon="magnifier"
									shape="circle"
									class="m-1"
								/>
								<lp-button
									variant="primary"
									icon="magnifier"
									size="lg"
									shape="circle"
									class="m-1"
								/>
								<lp-button
									variant="primary"
									icon="magnifier"
									size="xl"
									shape="circle"
									class="m-1"
								/>
								<lp-button
									variant="primary"
									icon="magnifier"
									size="xxl"
									shape="circle"
									class="m-1"
								/>
							</lp-col>
							<lp-col col="24" class="mt-5">
								<h3>Event</h3>
							</lp-col>
							<lp-col col="24" lg="12" class="mb-4">
								<lp-button
									variant="primary"
									icon="bullhorn"
									class="m-1"
									@click="handleClick"
									>Click this button</lp-button
								>
							</lp-col>
							<lp-col col="24" class="mt-5">
								<h3>Loading</h3>
							</lp-col>
							<lp-col col="24" lg="24" class="mb-4">
								<lp-button
									variant="primary"
									icon="pointer-right"
									class="m-1"
									@click="loading = !loading"
								>
									{{
										`Click to ${
											loading ? 'start' : 'start'
										} loading`
									}}
								</lp-button>
								<lp-button
									variant="light"
									icon="download"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="purple"
									icon="download"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="primary-light"
									icon="download"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="primary"
									icon="download"
									type="hollow"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="primary-light"
									icon="download"
									type="dashed"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="purple"
									icon="download"
									type="outline"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="indigo"
									icon="download"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="success"
									class="m-1"
									:loading="loading"
									>Download</lp-button
								>
								<lp-button
									variant="primary"
									class="m-1"
									icon="download"
									shape="circle"
									:loading="loading"
								></lp-button>
							</lp-col>
							<lp-col col="24" class="mt-5">
								<h3>Link</h3>
							</lp-col>
							<lp-col col="24" lg="24" class="mb-4">
								<lp-button
									variant="primary"
									class="m-1"
									size="lg"
									type="link"
									@click="handleClick"
									>Link</lp-button
								>
							</lp-col>
							<lp-col col="24" class="mt-5">
								<h3>Groups</h3>
							</lp-col>
							<lp-col col="24" lg="24" class="mb-4">
								<div class="mb-3">
									<lp-button-group class="mr-5">
										<lp-button variant="warning" disabled
											>Warning</lp-button
										>
										<lp-button variant="success" disabled
											>Success</lp-button
										>
										<lp-button variant="danger" disabled
											>Danger</lp-button
										>
									</lp-button-group>
									<lp-button-group>
										<lp-button
											variant="primary"
											icon="printer"
										></lp-button>
										<lp-button
											variant="primary"
											icon="heart"
										></lp-button>
										<lp-button
											variant="primary"
											icon="download"
										></lp-button>
									</lp-button-group>
									<lp-button-group
										size="xs"
										vertical
										class="ml-2"
									>
										<lp-button
											variant="primary"
											icon="printer"
										></lp-button>
										<lp-button
											variant="primary"
											icon="heart"
										></lp-button>
										<lp-button
											variant="primary"
											icon="download"
										></lp-button>
									</lp-button-group>
								</div>
							</lp-col>
						</lp-row>
					</div>
				</div>
			</lp-card>
		</lp-col>
	</lp-row>
</template>

<script>
import colors from 'styles/helpers/variables/_colors';
import { capitalizeFirstLetter, guid } from 'utils/helpers';

export default {
	data() {
		return {
			loading: true
		};
	},
	computed: {
		colors() {
			return colors;
		},
		grouped() {
			return Object.keys(this.colors).reduce((groups, item) => {
				var val = item.split('-')[0];
				groups[val] = groups[val] || [];
				groups[val].push(item);
				return groups;
			}, {});
		}
	},
	methods: {
		formatColorName(string) {
			return capitalizeFirstLetter(string.split('-').join(' '));
		},
		handleClick(e) {
			alert(JSON.stringify(e));
		},
		guid() {
			return guid();
		}
	}
};
</script>
