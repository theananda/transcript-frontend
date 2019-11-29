<template>
	<div class="content_wrapper mdl-grid">
		<div class="mdl-cell mdl-cell--6-col legislature_wrapper" v-for="meeting in meetings" v-bind:key="meeting.legislature">
			<div class="mdl-grid">
				<div class="mdl-cell mdl-cell--12-col">
					<h2>{{ meeting.name }}</h2>
				</div>
				<div class="mdl-cell mdl-cell--12-col">
					<div class="term_wrapper" v-for="term in meeting.terms" v-bind:key="term.number">
						<h4>{{ term.name }}</h4>
						<div class="mdl-grid">
							<div class="mdl-cell mdl-cell--4-col" v-for="session in term.sessions" v-bind:key="session.number">
								<router-link :to="{name: 'browse', 
													params: {legislature: meeting.legislature, 
													term: term.number, 
													session: session.number}}">
									{{ session.name }}
								</router-link>
							</div>		
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default {
	name: 'ByLegislature',
	data() {
		return {
			meetings : [
				{
					legislature: 'upper',
					name : 'အမျိုးသားလွှတ်တော်',
					terms : [
						{
							number : 2,
							name : 'ဒုတိယအကြိမ်အစည်းအဝေး',
							sessions : [
								{
									number : 1,
									name : 'ပထမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 2,
									name : 'ဒုတိယပုံမှန်အစည်းအဝေး'
								},
								{
									number : 3,
									name : 'တတိယပုံမှန်အစည်းအဝေး'
								},
								{
									number : 4,
									name : 'စတုတ္ထပုံမှန်အစည်းအဝေး'
								},
								{
									number : 5,
									name : 'ပဥ္စမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 6,
									name : 'ဆဋ္ဌမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 7,
									name : 'သတ္တမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 8,
									name : 'အဋ္ဌမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 9,
									name : 'နဝမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 10,
									name : 'ဒသမပုံမှန်အစည်းအဝေး'
								}

							]
						}
					]
				},
				{
					legislature: 'lower',
					name : 'ပြည်သူ့လွှတ်တော်',
					terms : [
						{
							number : 2,
							name : 'ဒုတိယအကြိမ်အစည်းအဝေး',
							sessions : [
								{
									number : 1,
									name : 'ပထမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 2,
									name : 'ဒုတိယပုံမှန်အစည်းအဝေး'
								},
								{
									number : 3,
									name : 'တတိယပုံမှန်အစည်းအဝေး'
								},
								{
									number : 4,
									name : 'စတုတ္ထပုံမှန်အစည်းအဝေး'
								},
								{
									number : 5,
									name : 'ပဥ္စမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 6,
									name : 'ဆဋ္ဌမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 7,
									name : 'သတ္တမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 8,
									name : 'အဋ္ဌမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 9,
									name : 'နဝမပုံမှန်အစည်းအဝေး'
								},
								{
									number : 10,
									name : 'ဒသမပုံမှန်အစည်းအဝေး'
								}

							]
						}
					]
				}
			]
		}
	}
}

</script>